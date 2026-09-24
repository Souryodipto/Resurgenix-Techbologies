# Resurgenix Analytics, Measurement & CRM Lifecycle Plan

This document establishes the privacy-respecting telemetry architecture, Google Analytics 4 (GA4) configuration, Google Search Console integration steps, CRM pipeline mapping, and core commercial Key Performance Indicators (KPIs) for Resurgenix Technologies.

---

## 1. Privacy-First Measurement Architecture

1. **Consent-Governed Activation:**
   - GA4 is loaded dynamically via `NEXT_PUBLIC_GA_ID` **only** after the visitor provides explicit consent via the on-site `CookieNotice` component.
   - If consent is declined or `NEXT_PUBLIC_GA_ID` is omitted, zero analytics scripts or third-party tracking tags are loaded into the browser DOM.
2. **Zero Personally Identifiable Information (PII):**
   - In accordance with India's Digital Personal Data Protection (DPDP) Act, 2023, telemetry payloads strictly scrub user names, work emails, personal phone numbers, and free-form messages before event dispatch.
3. **Data Localization & Anonymization:**
   - IP anonymization is permanently enabled (`anonymize_ip: true`).
   - Secure cookie attributes (`SameSite=None;Secure`) are enforced.

---

## 2. Telemetry Event Registry & GA4 Conversions

All custom events are dispatched via `window.gtag("event", eventName, payload)` and mirrored to `window.dataLayer`.

| Event Name | Trigger Condition | Event Parameters | Marked as Conversion in GA4? | Commercial Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `page_view` | Next.js route change (after interactive consent) | `page_path`, `page_title` | No | Track content consumption and navigation velocity. |
| `cta_click` | Any primary or secondary `<LinkButton>` click | `label`, `location`, `href` | No | Measure intent and button effectiveness across sections. |
| `demo_request` | Successful submission of `/request-demo` form | `organizationType`, `cameraCount` | **YES (Key Conversion)** | Primary inbound enterprise sales qualification signal. |
| `pilot_request` | Successful submission of `/request-pilot` form | `organizationType`, `cameraCount`, `architecture` | **YES (Key Conversion)** | High-intent evaluation conversion for controlled 14-day trials. |
| `contact_submit` | Successful submission of `/contact` form | `subject` | **YES (Conversion)** | General business and institutional inbound conversion. |
| `partner_submit` | Successful submission of `/partners` form | `partnerType` | **YES (Conversion)** | System Integrator and distributor channel recruitment signal. |
| `form_start` | First user focus/interaction with form inputs | `formId`, `formType` | No | Measure form abandonment and start-to-completion rates. |
| `form_error` | Client or server validation failure | `formId`, `errorMessage` | No | Diagnose UX friction and field validation bottlenecks. |
| `whatsapp_click` | Click on floating or inline WhatsApp contact triggers | `location`, `platform: "other"` | **YES (Conversion)** | Fast-path mobile inbound conversations for Indian enterprise leads. |
| `phone_click` | Click on `tel:+916290985464` links | `location` | **YES (Conversion)** | Direct telephone enquiry tracking. |
| `email_click` | Click on `mailto:admin@resurgenixtechnologies.com` | `location` | No | Inbound corporate email initiation. |
| `video_play` | Video player playback begins | `videoTitle` | No | Measure engagement with technical product walkthrough. |
| `video_complete` | Video player reaches conclusion | `videoTitle` | No | Measure high-intent video completion rate. |
| `resource_download` | Pilot Readiness Checklist PDF download | `resourceTitle`, `fileType: "pdf"` | **YES (Micro-Conversion)** | Middle-funnel technical buyer evaluation signal. |
| `assessment_complete`| CCTV AI Readiness Assessment score generated | `score`, `category` | **YES (Micro-Conversion)** | High-value technical qualification and self-audit data. |
| `outbound_click` | Click on official LinkedIn or Instagram links | `platform`, `destinationUrl` | No | Track social authority and employer branding engagement. |

---

## 3. First-Touch Attribution & UTM Preservation

As implemented in `lib/attribution.ts` and `components/forms/`:
- Inbound parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) and first landing page URL are cached in `sessionStorage` upon first site touch.
- When any lead form (`/request-demo`, `/request-pilot`, `/contact`, `/partners`) is submitted, these attribution parameters are silently merged into the payload and sent to `/api/leads`.
- This ensures 100% of pipeline revenue can be attributed back to specific organic articles, LinkedIn founder posts, or referral channels without losing campaign context.

---

## 4. Google Search Console & Webmaster Setup

To establish organic indexation and monitor search performance:

1. **Ownership Verification:**
   - Deploy DNS TXT record verification on domain registrar (or HTML tag method in Next.js metadata).
2. **Sitemap Submission:**
   - Submit canonical XML sitemap: `https://resurgenixtechnologies.com/sitemap.xml`.
   - Verify that all 63 indexable static URLs are discovered and 0 errors are reported.
3. **Bing Webmaster Tools:**
   - Import verified site from Google Search Console into Bing Webmaster Tools.
   - Verify indexation of `https://resurgenixtechnologies.com/sitemap.xml`.
4. **URL Inspection & Live Testing:**
   - Inspect key landing pages (`/`, `/solutions/ai-video-analytics`, `/industries/manufacturing`, `/resources/ai-video-analytics-guide`).
   - Confirm Schema.org rich entities (`Organization`, `Service`, `BlogPosting`) are recognized without critical warnings.

---

## 5. CRM Lead Lifecycle & Stage Mapping

All leads captured via `/api/leads` are categorized into a standardized 6-stage sales pipeline:

```
[1. New Inbound]
       │
       ▼
[2. Marketing Qualified Lead (MQL)]
       │
       ▼
[3. Sales Qualified Demo (SQD)]
       │
       ▼
[4. Technical Stream Assessment]
       │
       ▼
[5. Controlled 14-Day On-Site Pilot]
       │
       ▼
[6. Enterprise Customer / Commercial Rollout]
```

### Stage Definitions & Qualification Criteria:

1. **New Inbound (Stage 1):**
   - *Trigger:* Lead record created via Demo, Pilot, Partner, or Contact form.
   - *Automated Actions:* Lead stored in MongoDB/fallback log, email notification dispatched via Resend to `admin@resurgenixtechnologies.com`, UTM parameters mapped.
2. **Marketing Qualified Lead - MQL (Stage 2):**
   - *Criteria:* Verified business email (corporate domain), organization operates >10 CCTV cameras, identified operational pain point (unauthorized entry, ANPR, perimeter fencing, manufacturing safety).
   - *Action:* Direct personal outreach from Founder (Souryodipto Debnath) within 24 business hours to arrange discovery call.
3. **Sales Qualified Demo - SQD (Stage 3):**
   - *Criteria:* 20-minute discovery call completed; Chief Security Officer, Plant Head, or IT Director attends live simulated stream demonstration.
4. **Technical Stream Assessment (Stage 4):**
   - *Criteria:* Customer shares camera inventory and sample RTSP stream feeds or hosts an on-site stream feasibility audit (Kolkata / Eastern India).
5. **Controlled 14-Day Pilot (Stage 5):**
   - *Criteria:* Resurgenix Edge Appliance deployed on 3 to 5 priority streams at customer facility. Acceptance criteria benchmarked (false positive reduction, detection latency <80ms).
6. **Enterprise Customer (Stage 6):**
   - *Criteria:* Pilot successfully accepted; commercial agreement signed for software licenses, edge appliances, and annual maintenance contract (AMC).

---

## 6. Core Website Commercial KPIs

| Metric / KPI | Benchmark Target | Monitoring Frequency | Business Objective |
| :--- | :--- | :--- | :--- |
| **Top Organic Landing Pages** | High-intent solution & comparison pages account for >60% of search entrances. | Weekly (Search Console) | Validate that content attracts commercial buyers rather than casual informational traffic. |
| **Overall Site Conversion Rate (CVR)** | >2.8% of unique site visits result in a conversion event (Demo, Pilot, Assessment, WhatsApp). | Monthly (GA4) | Ensure traffic converts effectively through frictionless forms and clear CTAs. |
| **Qualified Lead Rate (MQL %)** | >65% of submitted inquiries meet enterprise criteria (B2B email, >10 cameras). | Monthly (CRM) | Maintain high lead quality and minimize spam or student project requests. |
| **Pilot Conversion Rate** | >35% of qualified demos advance to an on-site or remote pilot trial. | Quarterly (CRM) | Prove platform feasibility and optical compatibility on real customer feeds. |
| **Readiness Self-Assessment Velocity** | >100 assessments completed per month on `/resources/cctv-ai-readiness-assessment`. | Monthly (GA4) | Build proprietary pipeline of pre-audited enterprise camera networks. |
