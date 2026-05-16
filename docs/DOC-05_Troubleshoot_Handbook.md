# DOC-05 — CareGo Troubleshoot Handbook

**Project:** CareGo — DS Living Solutions Limited  
**Document Owner:** Shervin Croner  
**Last Updated:** 16 May 2026  
**Version:** 2.0  
**Review Frequency:** Add a new entry every time a new issue is diagnosed and resolved

---

## How to Use This Handbook

Find the symptom below and follow the numbered steps. Every entry includes what caused it and exactly how it was fixed. Add new entries at the bottom every time a new issue is found and resolved.

---

## Section 1 — Google Cloud Build Failures

### Issue 1.1 — Permission denied: artifactregistry.repositories.uploadArtifacts

**Symptom:** `denied: Permission 'artifactregistry.repositories.uploadArtifacts' denied`

**Root Cause:** Cloud Build service account lacks write permission to Artifact Registry.

**Fix:**

```bash
gcloud projects add-iam-policy-binding project-e8dbad65-d08d-4ae7-b3f \
  --member="serviceAccount:213384839991-compute@developer.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding project-e8dbad65-d08d-4ae7-b3f \
  --member="serviceAccount:213384839991@cloudbuild.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"
```

Then redeploy.

---

### Issue 1.2 — ImportError: cannot import name 'Options' from 'jwt.types'

**Symptom:** `ImportError: cannot import name 'Options' from 'jwt.types'`

**Root Cause:** System PyJWT version conflicts with flask-jwt-extended 4.6.0.

**Fix:** In Dockerfile, install PyJWT first before all other packages:

```dockerfile
RUN pip install --upgrade pip && \
    pip install --no-cache-dir PyJWT==2.8.0 && \
    pip install --no-cache-dir -r requirements.txt
```

And in requirements.txt add: `PyJWT==2.8.0`

---

### Issue 1.3 — Build fails silently with no log output

**Root Cause:** Service account lacks logging.logWriter role.

**Fix:**

```bash
gcloud projects add-iam-policy-binding project-e8dbad65-d08d-4ae7-b3f \
  --member="serviceAccount:213384839991-compute@developer.gserviceaccount.com" \
  --role="roles/logging.logWriter"

# Stream full output live:
gcloud builds submit --tag gcr.io/project-e8dbad65-d08d-4ae7-b3f/carego-api 2>&1
```

---

### Issue 1.4 — Build fails from old workspace

**Root Cause:** Old cache or corrupted .gcloudignore in ~/carego_app/Backend.

**Fix:** Always deploy from `~/carego_clean` only.

---

## Section 2 — Cloud Run API Issues

### Issue 2.1 — Health check 200 but /api/register returns 500

**Root Cause:** Root endpoint has no DB dependency. Register endpoint writes to DB which is not connected or tables not created.

**Diagnose:**

```bash
gcloud run services logs read carego-api --region europe-west2 --limit 30
```

Look for: `sqlalchemy.exc.OperationalError`, `Table 'carego.users' doesn't exist`, `Access denied for user`

---

### Issue 2.2 — Cloud Shell loses project setting

**Symptom:** `ERROR: The required property [project] is not currently set.`

**Fix (run at start of every Cloud Shell session):**

```bash
gcloud config set project project-e8dbad65-d08d-4ae7-b3f
```

---

### Issue 2.3 — Port 8080 already in use

**Symptom:** `OSError: [Errno 98] Address already in use`

**Fix:**

```bash
ps aux | grep python3
kill -9 <PID>
# OR force clear:
fuser -k 8080/tcp
```

---

### Issue 2.4 — App stops immediately when run with &

**Symptom:** `[1]+ Stopped    python3 app.py`

**Root Cause:** Cloud Shell suspends background jobs when terminal is active.

**Fix:** Use this combined command:

```bash
python3 app.py > /tmp/carego.log 2>&1 & sleep 4 && curl -s http://localhost:8080/
```

---

### Issue 2.5 — Terminal stuck on > prompt

**Symptom:** Terminal shows `>` and won't accept commands.

**Root Cause:** Large paste cut off mid-command leaving an open heredoc.

**Fix:** Press `Ctrl + C`, then run `echo "ready"` to confirm terminal is back.

---

## Section 3 — Database Issues

### Issue 3.1 — Cannot connect to Cloud SQL from Cloud Shell

**Fix:**

```bash
gcloud sql connect carego-db --user=carego_user --database=carego
```

If access denied, reset password:

```bash
gcloud sql users set-password carego_user --instance=carego-db --password=NEW_PASSWORD_HERE
```

Then update Cloud Run env var:

```bash
gcloud run services update carego-api --region europe-west2 \
  --set-env-vars SQLALCHEMY_DATABASE_URI='mysql+pymysql://carego_user:NEW_PASSWORD@/carego?unix_socket=/cloudsql/project-e8dbad65-d08d-4ae7-b3f:europe-west2:carego-db'
```

---

### Issue 3.2 — sed fails with "event not found" for special characters

**Symptom:** `-bash: !@/carego: event not found`

**Root Cause:** Bash history expansion interprets `!` in double-quoted strings.

**Fix:** Use Python instead:

```bash
python3 -c "
content = open('app.py').read()
old = 'old string here'
new = 'new string with special chars like ! @ #'
content = content.replace(old, new)
open('app.py', 'w').write(content)
print('Done!')
"
```

---

### Issue 3.3 — Large file paste gets cut off in Cloud Shell

**Symptom:** Only part of the code is pasted. File is broken or incomplete.

**Root Cause:** Cloud Shell has a character limit for paste operations.

**Fix:**
1. Download the file from the Perplexity chat
2. Click the three-dot menu in Cloud Shell and select **Upload file**
3. Move it: `mv ~/app.py ~/carego_clean/app.py`
4. Verify: `cat ~/carego_clean/app.py | head -20`

---

## Section 4 — Frontend Website Issues

### Issue 4.1 — All pages freeze or become unresponsive

**Root Cause:** CSS classes `bg-gradient-hero` and `shadow-glow` trigger infinite browser repaint loop.

**Fix:** Replace with standard hex-based equivalents in `src/styles.css`.

---

### Issue 4.2 — Login works but navigating logs user out

**Root Cause:** Zustand persist middleware silently fails — GitHub Pages blocks localStorage.

**Fix:** Replace `zustand/persist` with a plain in-memory store (no persist middleware).

---

### Issue 4.3 — Site assets return 404 after deployment

**Root Cause:** `base` value in `vite.config.ts` does not match the repository name exactly.

**Fix:** In `vite.config.ts`: `base: '/CareGo-connect-live/'` (must exactly match GitHub repo name)

---

### Issue 4.4 — Shared link shows CareWise instead of CareGo

**Root Cause:** Residual Lovable template branding in multiple files.

**Fix:** Update `<title>` and `<meta og:title>` in `index.html` and `src/routes/index.tsx`.

---

### Issue 4.5 — Contact page causes browser freeze

**Root Cause:** Same as Issue 4.1 — `bg-gradient-hero` CSS class on contact page.

**Fix:** Replace CSS class references with inline hex style values.

---

## Section 5 — General Diagnostic Commands

```bash
# Check Cloud Run service status
gcloud run services list --region europe-west2

# View last 30 API log lines
gcloud run services logs read carego-api --region europe-west2 --limit 30

# Test live API health
curl https://carego-api-213384839991.europe-west2.run.app/

# Check Cloud SQL status
gcloud sql instances describe carego-db --format="value(state)"

# Check running Python processes (local dev)
ps aux | grep python3

# Start and test local app in one command
cd ~/carego_clean && python3 app.py > /tmp/carego.log 2>&1 & sleep 4 && curl -s http://localhost:8080/

# Check enabled APIs
gcloud services list --enabled | grep -E "run|build|sql|registry"
```

---

## Section 6 — Escalation Path

1. Check Google Cloud Status: https://status.cloud.google.com
2. Search exact error in Google Cloud documentation
3. Check Cloud Build logs: https://console.cloud.google.com/cloud-build/builds
4. Open GCP support ticket if on a paid support plan

---

*Add a new entry every time a new issue is identified and resolved. Include symptom, root cause, and exact fix commands.*
