# Resurgenix Production Launch Checklist

This document details the production launch procedure, host deployment steps, environment configuration, post-launch verifications, and operational workflows for **Resurgenix Technologies Pvt. Ltd.** (`resurgenixtechnologies.com`).

---

## 1. Hosting & Infrastructure Deployment (Vercel)

### Step 1.1: Repository Connection
1. Import the Git repository to the Vercel Dashboard under the official Resurgenix team account.
2. Set Framework Preset to **Next.js**.
3. Set Root Directory to `./`.
4. Ensure Build Command is `npm run build` and Output Directory is `.next`.

### Step 1.2: Environment Variables Configuration
Configure the following environment variables in Vercel Project Settings > Environment Variables for **Production**, **Preview**, and **Development**:

| Variable Name | Environment | Value / Instructions |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production | `https://resurgenixtechnologies.com` |
| `NEXT_PUBLIC_SITE_URL` | Preview | Leave unset or set to system preview URL |
| `NEXT_PUBLIC_GA_ID` | Production | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). GA4 remains dormant until the visitor accepts cookies. |
| `LEAD_EMAIL_RECIPIENT` | Production | Internal notification inbox (e.g. `leads@resurgenixtechnologies.com` or `souryodipto@resurgenixtechnologies.com`). |
| `RESEND_API_KEY` | Production | Resend transactional email API key (or SendGrid/AWS SES API key if using alternate relay). |
| `CRM_WEBHOOK_URL` | Production | (Optional) Endpoint for HubSpot / Zoho / Pipedrive inbound lead ingestion webhook. |
| `CRM_WEBHOOK_SECRET` | Production | HMAC verification token for lead payload security. |

### Step 1.3: Domain, DNS & SSL Setup
1. In Vercel Project Settings > Domains, add:
   - Primary: `resurgenixtechnologies.com`
   - Secondary / Redirect: `www.resurgenixtechnologies.com` -> configured with permanent 301 redirect to apex (`resurgenixtechnologies.com`).
2. Update DNS Records at Domain Registrar (GoDaddy, Namecheap, Google Domains, etc.):
   - **Apex (`@`):** `A` record pointing to `76.76.21.21`
   - **Subdomain (`www`):** `CNAME` record pointing to `cname.vercel-dns.com`
3. Verify Automatic SSL/TLS Certificate issuance (Let's Encrypt / DigiCert via Vercel Edge).
4. Verify HTTP to HTTPS automatic upgrade and 301 canonical enforcement.

---

## 2. Search Engine & Webmaster Submission

### Step 2.1: Google Search Console (GSC)
1. Add property `https://resurgenixtechnologies.com` via DNS verification (TXT record) or HTML tag.
2. Navigate to **Sitemaps** in GSC.
3. Submit: `https://resurgenixtechnologies.com/sitemap.xml`.
4. Verify indexing status:
   - Ensure all 65 primary canonical routes are discovered.
   - Confirm `/design-system`, thank-you pages, and draft pages are excluded or tagged `noindex`.
5. Run URL Inspection on homepage and top 3 solution pages (`/solutions/ai-video-analytics`, `/solutions/restricted-zone-unauthorized-entry-detection`, `/solutions/ai-attendance-workforce-intelligence`).

### Step 2.2: Bing Webmaster Tools
1. Import property directly from verified Google Search Console account.
2. Submit sitemap: `https://resurgenixtechnologies.com/sitemap.xml`.
3. Verify crawler access for Bingbot and Bing-based generative engines (Copilot).

---

## 3. Pre-Launch Founder Asset Verification

Before announcing the site publicly, complete the following physical asset replacements and verification items:

### 3.1 Brand Identity & Imagery
- [ ] **Official Vector Logo:** Replace the SVG text/monogram placeholder in `components/layout/Header.tsx` and `components/layout/Footer.tsx` with the finalized official Resurgenix brand vector.
- [ ] **Favicon & Web App Icons:** Generate and replace `public/favicon.ico`, `public/icon.svg`, and `public/apple-touch-icon.png` (180x180) from the approved vector brandmark.
- [ ] **Real Product & Dashboard Screenshots:** Replace illustrative mockups in `components/sections/IllustrativeDashboard.tsx` with actual high-resolution screenshots of the Resurgenix analytics interface once UI testing is complete.
- [ ] **Master Video Files:** Join the 8 Gemini explainer video clips (from Step 5) into the 60-second corporate explainer (`public/video/resurgenix-what-resurgenix-can-do.mp4`). Once added, verify video playback and remove the poster-only fallback.

### 3.2 Founder & Legal Approvals (Items in `docs/OPEN_ITEMS.md`)
- [ ] **Confirm Capability Statuses:** Audit `/content/capabilities.ts` with the technical team to ensure "pilot", "in-development", and "roadmap" accurately reflect what can be physically demonstrated today.
- [ ] **Confirm Program & Recognition Wording:** Approve exact factual text for IIM Calcutta Innovation Park, MeitY TIDE 2.0, Techstorm 2026, and JC Bose Science Fair before enabling the recognition block on `/about`.
- [ ] **Team Members Display:** Collect written consent and verify job titles for team members before publishing them beyond the founder profile.
- [ ] **Legal Review:** Have legal counsel review `app/privacy/page.tsx` and `app/terms/page.tsx`, specifically confirming alignment with India's Digital Personal Data Protection (DPDP) Act regarding employee attendance and camera processing.

---

## 4. Operational & Lead Flow End-to-End Testing

Test every interaction path in staging/production before public distribution:

### 4.1 Form Submission Testing
- [ ] **Request a Demo (`/request-demo`):**
  - Submit test lead with valid work email, camera count, and selected solutions.
  - Verify redirect to `/request-demo/thank-you`.
  - Confirm notification email is received with complete UTM attribution metadata.
  - Confirm lead record is logged in CRM or database.
- [ ] **Request a Pilot (`/pilot`):**
  - Submit test deployment scope (sites, camera models, target workflows).
  - Verify redirect to `/pilot/thank-you`.
  - Confirm notification email delivery.
- [ ] **System Integrator & Partner Form (`/partners`):**
  - Submit partnership inquiry. Verify notification delivery.
- [ ] **General Contact Form (`/contact`):**
  - Submit general message. Verify notification delivery.
- [ ] **Spam & Validation Testing:**
  - Fill the invisible honeypot field (`website_hp`) -> Confirm silent rejection (200 OK without dispatch).
  - Submit without required fields -> Confirm accessible inline error states (`role="alert"`, `aria-invalid="true"`).

### 4.2 Interactive Direct Channels
- [ ] **WhatsApp Direct Link:** Click floating button and header link on mobile (iOS and Android) and desktop. Verify it opens WhatsApp chat to `+919073384218` with pre-filled inquiry text: *"Hello Resurgenix team, I would like to enquire about your AI video analytics platform."*
- [ ] **Click-to-Call Phone Links:** Click `+91 90733 84218` in footer and contact page on mobile device. Verify dialer launches correctly.
- [ ] **Click-to-Email Links:** Click `contact@resurgenixtechnologies.com` and `founder@resurgenixtechnologies.com`. Verify email client launches.

---

## 5. Local Presence & Authority (Kolkata)

### 5.1 Google Business Profile Setup
If Resurgenix maintains an eligible registered commercial office or co-working space in Kolkata:
- [ ] Create/claim Google Business Profile for **Resurgenix Technologies Pvt. Ltd.**
- [ ] Category: *Software Company* / *Artificial Intelligence Service* / *Security System Installer*.
- [ ] Service Area: Kolkata, Kalyani, West Bengal, and Pan-India enterprise deployments.
- [ ] Website URL: `https://resurgenixtechnologies.com`
- [ ] Appointment Link: `https://resurgenixtechnologies.com/request-demo`
- [ ] Phone: `+91 90733 84218`
- [ ] Upload exterior/interior facility photos and high-resolution logo.

---

## 6. Post-Launch 24-Hour Sanity Check

Within 24 hours of going live:
1. **Analytics Ingestion:** Verify real-time pageviews and custom conversion events appear in GA4 DebugView upon cookie consent acceptance.
2. **404 Monitoring:** Inspect server logs for unexpected 404 errors or missing asset requests.
3. **Core Web Vitals:** Run Google PageSpeed Insights on mobile and desktop for homepage, solution page, and resource article. Confirm green scores (LCP < 2.5s, CLS < 0.1, INP < 200ms).
4. **Security Headers:** Run `securityheaders.com` scan to verify `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`.
