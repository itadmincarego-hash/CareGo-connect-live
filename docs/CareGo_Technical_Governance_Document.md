# CareGo Technical Governance Document

**Document Owner:** Shervin Croner — DS Living Solutions Limited  
**Last Updated:** 16 May 2026  
**Version:** 2.0  
**Status:** Live — updated as development progresses

---

## 1. Executive Overview

This document records all technical build activities, decisions, configurations, and processes completed for the CareGo AI-Powered Autonomous Care Platform. It serves as the governance reference for the development team, any future employees or contractors, auditors, and integration partners.

---

## 2. Project Identity

| Field | Detail |
|---|---|
| Platform Name | CareGo |
| Legal Entity | DS Living Solutions Limited |
| Location | Wales, UK |
| Primary Contact | Shervin Croner |
| Google Cloud Project ID | project-e8dbad65-d08d-4ae7-b3f |
| Google Cloud Project Number | 213384839991 |
| GCP Region | europe-west2 (London) |
| Frontend Repository | https://github.com/itadmincarego-hash/CareGo-connect-live |
| Frontend Live URL | https://itadmincarego-hash.github.io/CareGo-connect-live/ |
| Backend API Live URL | https://carego-api-213384839991.europe-west2.run.app |
| Cloud Shell User | itadmincarego |
| Backend Working Directory | ~/carego_clean |

---

## 3. Architecture Overview

```
Browser / Mobile App
      ↓ HTTPS
GitHub Pages (Frontend — React / Vite / TanStack Router)
      ↓ REST API calls
Google Cloud Run (Backend — Python / Flask API v1.0.0)
      ↓ Cloud SQL Auth Proxy Socket
Google Cloud SQL (MySQL 8.0 — carego-db)
```

### Technology Stack

| Layer | Technology | Hosting |
|---|---|---|
| Frontend | React, Vite, TanStack Router, TypeScript | GitHub Pages |
| Backend API | Python 3.11, Flask 3.0.3, gunicorn | Google Cloud Run |
| Database | MySQL 8.0 | Google Cloud SQL |
| Container Registry | Google Artifact Registry | GCP |
| Authentication | Flask-JWT-Extended 4.6.0 | Cloud Run |
| AI / ML (planned) | Vertex AI, Isolation Forest | GCP Vertex AI |
| IoT Ingestion (planned) | Google Cloud Pub/Sub | GCP |

---

## 4. Google Cloud Infrastructure

### 4.1 APIs Enabled

| API | Service Name | Purpose |
|---|---|---|
| Cloud Run | run.googleapis.com | Serverless backend hosting |
| Cloud Build | cloudbuild.googleapis.com | Container build pipeline |
| Artifact Registry | artifactregistry.googleapis.com | Container image storage |
| Cloud SQL Admin | sqladmin.googleapis.com | Managed MySQL database |

### 4.2 IAM Permissions Granted

| Service Account | Role Granted | Reason |
|---|---|---|
| 213384839991-compute@developer.gserviceaccount.com | roles/artifactregistry.writer | Allow Cloud Build to push container images |
| 213384839991-compute@developer.gserviceaccount.com | roles/logging.logWriter | Allow Cloud Build to write build logs |
| 213384839991@cloudbuild.gserviceaccount.com | roles/artifactregistry.writer | Allow Cloud Build service account to push images |

---

## 5. Backend — Cloud Run API

### 5.1 Workspace Setup

**Working directory:** ~/carego_clean  
**Backup file:** app_backup_20260516.py (created 16 May 2026)

### 5.2 Dockerfile

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir PyJWT==2.8.0 && \
    pip install --no-cache-dir -r requirements.txt
COPY app.py .
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers", "1", "app:app"]
```

### 5.3 requirements.txt (Pinned Versions)

```
Flask==3.0.3
flask-cors==4.0.1
Flask-JWT-Extended==4.6.0
Flask-Login==0.6.3
Flask-SQLAlchemy==3.1.1
gunicorn==22.0.0
Werkzeug==3.0.3
PyJWT==2.8.0
pymysql==1.1.1
cloud-sql-python-connector[pymysql]==1.12.0
```

### 5.4 Cloud Run Service Configuration

| Setting | Value |
|---|---|
| Service Name | carego-api |
| Region | europe-west2 |
| Authentication | Allow unauthenticated (public API) |
| Cloud SQL Instance | project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db |
| Port | 8080 |
| API Version | 1.0.0 |

### 5.5 Deploy Command

```bash
cd ~/carego_clean
gcloud run deploy carego-api \
  --source . \
  --region europe-west2 \
  --allow-unauthenticated \
  --add-cloudsql-instances project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db \
  --set-env-vars SQLALCHEMY_DATABASE_URI='mysql+pymysql://carego_user:CareGo_DB2024!@/carego?unix_socket=/cloudsql/project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db'
```

### 5.6 User Roles (Action ID 12 — Completed 16 May 2026)

| Role | Level | Access Description |
|---|---|---|
| super_admin | Platform | Full system — all companies, billing, all users |
| carego_admin | Platform | Manage companies, support tickets, no billing |
| company_admin | Company | Manage own company profile, add/remove staff |
| staff_supervisor | Company | View/manage assigned residents, approve care logs |
| general_staff | Company | View assigned residents only, log activities |
| customer | Individual | Own profile, check-ins, medications, companion |
| customer_guardian | Individual | View linked customer profile and alerts only |

### 5.7 Database Tables (Action ID 12 — Completed 16 May 2026)

| Table | Status | Purpose |
|---|---|---|
| roles | Done | 7 user roles seeded on startup |
| companies | Done | Care home and business accounts |
| users | Done | All user accounts with role and company links |
| user_profiles | Done | Extended details — phone, DOB, address, emergency contact |
| companions | Done | AI companion assigned to each customer |
| companion_interactions | Done | Log of every chat and check-in with companion |
| user_devices | Done | Devices registered per user |
| guardian_links | Done | Links guardian accounts to customer accounts |

### 5.8 API Endpoints (All Tested 16 May 2026)

| Endpoint | Method | Auth Required | Status | Purpose |
|---|---|---|---|---|
| / | GET | No | ✅ Tested | Health check |
| /api/health | GET | No | ✅ Tested | Health check v2 |
| /api/register | POST | No | ✅ Tested | Create new user account |
| /api/login | POST | No | ✅ Tested | Login and get JWT token |
| /api/profile | GET | JWT | ✅ Tested | View own profile |
| /api/profile | PUT | JWT | ✅ Tested | Update own profile |
| /api/companion | GET | JWT | ✅ Tested | View companion details |
| /api/companion | POST | JWT | ✅ Tested | Create companion |
| /api/companion | PUT | JWT | ✅ Tested | Update companion |

### 5.9 Local Development

```bash
# Start locally
cd ~/carego_clean
python3 app.py > /tmp/carego.log 2>&1 & sleep 4 && curl -s http://localhost:8080/

# Kill local app
pkill -f "python3 app.py"
```

---

## 6. Database — Cloud SQL MySQL

### 6.1 Instance Configuration

| Setting | Value |
|---|---|
| Instance Name | carego-db |
| Database Version | MySQL 8.0 |
| Tier | db-f1-micro (~£6/month) |
| Region | europe-west2-a |
| Primary IP | 34.89.0.24 |
| Storage | 10 GB SSD |
| Connection Name | project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db |
| Database Name | carego |
| App User | carego_user |
| Connection Method | Unix socket via Cloud SQL Auth Proxy |

### 6.2 Connection String

```
mysql+pymysql://carego_user:CareGo_DB2024!@/carego
  ?unix_socket=/cloudsql/project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db
```

---

## 7. Frontend — Website

### 7.1 Repository Details

| Item | Value |
|---|---|
| Repository | CareGo-connect-live |
| GitHub Account | itadmincarego-hash |
| GitHub URL | https://github.com/itadmincarego-hash/CareGo-connect-live |
| Live URL | https://itadmincarego-hash.github.io/CareGo-connect-live/ |
| Framework | React + Vite + TanStack Router (TypeScript) |
| Built With | Lovable (AI website builder) |
| Deployment | GitHub Actions to GitHub Pages |

### 7.2 Frontend Test User Credentials

| Role | Email | Password |
|---|---|---|
| Family / Customer | family@carego.com | CareGo2026! |
| Care Provider | provider@carego.com | CareGo2026! |
| Business / Care Home | business@carego.com | CareGo2026! |
| CareGo Admin | admin@carego.com | CareGo2026! |

### 7.3 Known Issues Resolved

| Issue | Root Cause | Fix Applied |
|---|---|---|
| Pages freezing | bg-gradient-hero and shadow-glow CSS infinite repaint | Replaced with standard hex values in styles.css |
| Auth state lost on navigation | Zustand persist blocked by GitHub Pages sandbox | Switched to in-memory Zustand store |
| Role selector buttons visible | Old UI pattern in login form | Replaced with smart email detection routing |
| Contact page unresponsive | Heavy CSS animation class on mobile | Replaced with inline hex styles |
| Site showing CareWise branding | Residual Lovable template text in 4 files | Updated all instances to CareGo |

---

## 8. Module Build Registry

### Phase 1 — Core Modules

| ID | Module | Status | Platform | Priority |
|---|---|---|---|---|
| 12 | User Auth & Profiles | ✅ Backend Complete (16 May 2026) | Cloud Run + Cloud SQL | Critical |
| 13 | AI Companion Engine | To Do | Cloud Run + Vertex AI | Critical |
| 14 | Isolation Forest Baseline Model | To Do | Vertex AI / Python ML | Critical |
| 15 | Risk Scoring & Triage (Tier 1/2/3) | To Do | Cloud Run + Vertex AI | Critical |
| 16 | IoT Device Data Ingestion | To Do | Cloud Pub/Sub + Cloud Run | High |
| 17 | Emergency Escalation Engine | To Do | Cloud Run + Twilio/SendGrid | High |
| 18 | Family Dashboard API | To Do | Cloud Run + Cloud SQL | Medium |
| 19 | Phase 1 Integration Test | To Do | All above | Critical |

### Phase 2 — Compliance & Verification APIs

| ID | Module | Status | API / Service |
|---|---|---|---|
| 20 | CQC Registration Check | To Do | CQC public REST API |
| 21 | Welsh Gov Care Inspectorate | To Do | Care Inspectorate Wales API |
| 22 | Right to Work Verification | To Do | Home Office Employer Checking Service |
| 23 | DVLA Licence & Points | To Do | DVLA Motor Enquiry Service API |
| 24 | DBS Check Integration | To Do | DBS eBulkPlus API |
| 25 | Phase 2 Integration Test | To Do | All Phase 2 APIs |

### Phase 3 — B2B & Public Health

| ID | Module | Status | Platform |
|---|---|---|---|
| 26 | HR/Payroll Integration | To Do | BreatheHR, Sage, Xero APIs |
| 27 | Staff Marketplace Engine | To Do | Cloud Run + Cloud SQL |
| 28 | Commissioner Analytics Dashboard | To Do | BigQuery + Looker Studio |
| 29 | Full System UAT | To Do | All modules |

---

## 9. Compliance Considerations

| Regulation | Requirement | Status |
|---|---|---|
| GDPR / UK GDPR | Data stored in UK region (europe-west2 London) | Compliant by design |
| CQC Registration | Required for domiciliary care services | Planned — Phase 2 |
| MHRA AIMD / SaMD | AI companion may require medical device classification | Assessment planned |
| Cyber Essentials | Certification within 6 months of launch | Planned |
| Care Inspectorate Wales | Welsh provider registration | Phase 2 API integration |

---

## 10. Useful Commands Reference

```bash
# Set project (run at start of every Cloud Shell session)
gcloud config set project project-e8dbad65-d08d-4ae7-b3f

# Start app locally for testing
cd ~/carego_clean
python3 app.py > /tmp/carego.log 2>&1 & sleep 4 && curl -s http://localhost:8080/

# Kill local app
pkill -f "python3 app.py"

# View live Cloud Run logs
gcloud run services logs read carego-api --region europe-west2 --limit 30

# Test live API
curl https://carego-api-213384839991.europe-west2.run.app/

# Connect to Cloud SQL
gcloud sql connect carego-db --user=carego_user --database=carego

# Check Cloud Run services
gcloud run services list --region europe-west2

# Check Cloud SQL status
gcloud sql instances describe carego-db --format="value(state)"
```

---

## 11. Decision Log

| Date | Decision | Reason |
|---|---|---|
| 11 May 2026 | Used Dockerfile instead of auto-buildpack | Auto-buildpack failing silently |
| 11 May 2026 | Pinned PyJWT==2.8.0 | System jwt.types lacked Options class |
| 11 May 2026 | Selected db-f1-micro for Cloud SQL | Lowest cost for development |
| 11 May 2026 | Used Unix socket for DB connection | More secure than TCP/IP |
| 11 May 2026 | Chose europe-west2 (London) region | UK data residency, GDPR compliance |
| 12 May 2026 | In-memory Zustand auth on frontend | GitHub Pages blocks localStorage |
| 12 May 2026 | Smart email detection for login routing | Cleaner UX than role selector buttons |
| 16 May 2026 | Build modules locally first, deploy after testing | Avoid live API disruption during development |
| 16 May 2026 | Defined 7 roles with full permission matrix | Role-based access required for multi-tenant care platform |
| 16 May 2026 | Added companions table inside User Auth module | Companion is core to user identity in CareGo |
| 16 May 2026 | Used file upload instead of terminal paste for large files | Cloud Shell character limit breaks large paste blocks |

---

## 12. Next Actions (As of 16 May 2026)

| Priority | Action | Owner |
|---|---|---|
| Now | Connect GitHub Pages frontend login to live Cloud Run API | Shervin |
| Now | Deploy updated app.py to Cloud Run (Action ID 12 go-live) | Shervin |
| Next | Design AI Companion Engine architecture (Module ID 13) | Shervin |
| Next | Build company and staff management endpoints | Shervin |
| Soon | Build customer guardian linking endpoints | Shervin |

---

*Update this document every time a module status changes or a new technical decision is made.*
