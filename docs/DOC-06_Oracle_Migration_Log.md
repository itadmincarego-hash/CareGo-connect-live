# DOC-06 — Google to Oracle Migration Log

**Project:** CareGo — DS Living Solutions Limited  
**Document Owner:** Shervin Croner  
**Last Updated:** 17 July 2026  
**Version:** 1.1  
**Status:** In Progress — Migration Phase 1 Complete

---

## Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 17 Jul 2026 | Shervin Croner | Initial migration session — Phase 1 completed |
| 1.1 | 17 Jul 2026 | Shervin Croner | End-to-end login verified on Oracle, GitHub Actions updated |

---

## 1. Migration Architecture

### Before (Google Cloud)
```
GitHub Pages (frontend)
        ↓ HTTPS
Google Cloud Run (backend API)
        ↓
Google Cloud SQL MySQL (carego-db)
```

### After (Oracle VM)
```
GitHub Pages (frontend)
        ↓ HTTPS
https://carego-api.duckdns.org (Nginx + SSL)
        ↓
Docker container carego-api:oracle-v1 (Gunicorn 127.0.0.1:8080)
        ↓
Oracle MySQL 8.0 (carego_app user)
```

---

## 2. Oracle VM Details

| Field | Value |
|---|---|
| VM Name | vcn-carego-prod |
| Public IP | 143.47.227.4 |
| OS | Ubuntu 22.04 LTS |
| SSH User | ubuntu |
| SSH Key | ssh-key-2026-07-17.key |
| Backend Port | 8080 (internal only) |
| Web Server | Nginx 1.18.0 |
| Frontend Path | /home/ubuntu/CareGo-connect-live/dist |
| Backend Container | carego-api:oracle-v1 |
| Database User | carego_app |
| Cost | Free Forever (Oracle Free Tier) |

---

## 3. Domain & SSL

| Field | Value |
|---|---|
| Domain Provider | DuckDNS (free) |
| Domain | carego-api.duckdns.org |
| Points To | 143.47.227.4 |
| SSL Provider | Let's Encrypt (Certbot 5.7.0) |
| SSL Certificate Path | /etc/letsencrypt/live/carego-api.duckdns.org/ |
| SSL Expiry | 2026-10-15 (auto-renews) |
| HTTPS URL | https://carego-api.duckdns.org |
| Status | ✅ Live |

> ⚠️ Domain pending review — may upgrade to paid domain (carego.co.uk ~£1/month). Do NOT remove DuckDNS until paid domain is fully live and verified.

---

## 4. Nginx Configuration

**Config file:** `/etc/nginx/sites-available/carego`

```nginx
server {
    listen 80;
    server_name carego-api.duckdns.org;
    root /home/ubuntu/CareGo-connect-live/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

> Certbot has automatically added HTTPS (443) block to this file.

---

## 5. GitHub Actions — deploy.yml Changes

| Field | Before | After | Date |
|---|---|---|---|
| VITE_API_URL | `${{ secrets.VITE_API_URL }}` (Google Cloud Run) | `https://carego-api.duckdns.org` | 17 Jul 2026 |
| VITE_GOOGLE_SHEET_URL | `${{ secrets.VITE_GOOGLE_SHEET_URL }}` | Unchanged ✅ | — |

**Commit:** `6ecec7362d95198b9849e4ef53ba854a68560267`

---

## 6. Migration Items — Status Tracker

| Item ID | Category | Action | Priority | Status | Completed |
|---|---|---|---|---|---|
| MIG_GG_OR_FD001 | Frontend | Fix Nginx MIME/base-path bug | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_FD002 | Frontend | Confirm frontend loads on Oracle VM | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_BE001 | Backend | Confirm backend API on Oracle VM | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_BE002 | Backend | Deploy backend Docker on Oracle VM | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_BE003 | Backend | Update frontend API URL to Oracle | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_BE004 | Backend | Update CORS allowed origins | High | 🔲 To Do | — |
| MIG_GG_OR_BE005 | Backend | Verify /health endpoint on Oracle | Medium | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_DB001 | Database | Confirm DB status on Oracle MySQL | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_DB002 | Database | Take Cloud SQL backup/snapshot | Critical | 🔲 To Do | — |
| MIG_GG_OR_DB003 | Database | Export Cloud SQL data (mysqldump) | High | 🔲 To Do | — |
| MIG_GG_OR_DB004 | Database | Import data into Oracle MySQL | High | 🔲 To Do | — |
| MIG_GG_OR_DB005 | Database | Update backend .env DB connection | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_NW001 | Networking | Oracle firewall ports 80/443 open | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_NW002 | Networking | Point domain DNS to Oracle VM IP | High | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_NW003 | Networking | Install SSL certificate (Certbot) | High | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_SE001 | Secrets/Env | Recreate env vars on Oracle VM | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_CI001 | CI/CD | GitHub Actions for Oracle VM deploy | Medium | 🔲 To Do | — |
| MIG_GG_OR_VA001 | Validation | Full end-to-end test on Oracle | Critical | ✅ Done | 17 Jul 2026 |
| MIG_GG_OR_VA002 | Validation | Set up basic logging on Oracle | Medium | 🔲 To Do | — |
| MIG_GG_OR_CM001 | Cost Mgmt | Set GCP budget alert (expires Aug 8) | Medium | 🔲 To Do | — |
| MIG_GG_OR_CM002 | Cost Mgmt | Keep GCP live as rollback until validated | Medium | ✅ Done | 17 Jul 2026 |

---

## 7. End-to-End Verification — 17 Jul 2026

Confirmed in Nginx access log at 21:18 UTC:

```
92.30.163.94 - OPTIONS /api/login - 200  ← CORS preflight ✅
92.30.163.94 - POST /api/login    - 200  ← Login success ✅
Referrer: https://itadmincarego-hash.github.io/  ← from GitHub Pages ✅
```

**Result:** GitHub Pages frontend → Oracle VM backend → Oracle MySQL — fully working chain confirmed.

---

## 8. Remaining Actions (Next Session)

1. **Domain decision** — Keep DuckDNS or upgrade to paid domain (carego.co.uk ~£1/month)
2. **Session persistence** — Fix logged-in user showing Sign In on home page (HttpOnly Cookie)
3. **Cloud SQL backup** — Snapshot before any GCP changes (MIG_GG_OR_DB002)
4. **GCP budget alert** — Free credit £204.74 expires Aug 8, 2026 ⚠️
5. **CORS lockdown** — Update allowed origins to confirmed domain (MIG_GG_OR_BE004)
6. **CI/CD for Oracle** — GitHub Actions deploy script for Oracle VM (MIG_GG_OR_CI001)
7. **Cloud SQL data export** — mysqldump export + import to Oracle MySQL (MIG_GG_OR_DB003/DB004)

---

## 9. Known Issues

| Issue | Status | Notes |
|---|---|---|
| Auth state resets on home page navigation | 🔲 Pending | Fix: HttpOnly Cookie from backend — next session |
| vite.config.ts base still set to /CareGo-connect-live/ | ✅ Handled | Oracle build uses --base=/ override, GitHub Pages unaffected |
| Cloud SQL still running | ✅ Intentional | Kept as rollback until DB migration validated |

---

*Update this document after every development session. Always increment version number.*
