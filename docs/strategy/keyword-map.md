# Comprehensive Keyword-to-Page Mapping Architecture

This keyword mapping system connects real buyer search intent to specific pages on the Resurgenix website. Each page has **one primary target keyword** to prevent keyword cannibalization, supported by tightly grouped secondary keywords.

> **Geographic Boundary Guardrail:** Location-based keywords are strictly restricted to locations where Resurgenix genuinely operates: **Kolkata, Kalyani, West Bengal, and Eastern India**. No artificial doorway pages are created for unserved geographies.

---

## Master Keyword Map Table

| Search Intent                   | Primary Keyword                                     | Funnel Stage | Target Page URL                                  | Secondary Keywords & Search Intent Notes                                                                                                               |
| ------------------------------- | --------------------------------------------------- | ------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Commercial / Core**           | **AI video analytics platform**                     | BOFU         | `/` (Homepage)                                   | _AI CCTV software, intelligent video surveillance, AI surveillance system, video analytics for CCTV._ Core brand & platform positioning.               |
| **Commercial / Geo**            | **AI video analytics India**                        | BOFU         | `/about`                                         | _AI surveillance company India, Indian computer vision security company, Make in India video analytics._ Establishes domestic engineering credentials. |
| **Commercial / High-Intent**    | **AI video analytics pilot program**                | BOFU         | `/request-pilot`                                 | _CCTV AI pilot testing, video analytics trial deployment, test AI on existing CCTV._ High-intent evaluation page for qualified security heads.         |
| **Commercial / High-Intent**    | **enterprise video analytics demo**                 | BOFU         | `/request-demo`                                  | _AI surveillance demo, book video analytics demonstration, CCTV intelligence software demo._ Primary sales conversation converter.                     |
| **Problem / Capability**        | **restricted zone detection**                       | BOFU / MOFU  | `/solutions/restricted-zone-detection`           | _unauthorized entry detection, virtual boundary alert CCTV, sensitive area monitoring._ Targets intrusion and unauthorized access queries.             |
| **Problem / Capability**        | **AI CCTV video analytics**                         | BOFU / MOFU  | `/solutions/ai-video-analytics`                  | _real-time person detection CCTV, multi-camera tracking software, automated object classification._ Core analytics capability page.                    |
| **Problem / Capability**        | **AI attendance system CCTV**                       | BOFU / MOFU  | `/solutions/ai-attendance-workforce`             | _workforce monitoring CCTV, automated attendance camera, consent-based visual verification._ Replaces manual biometric turnstiles.                     |
| **Problem / Capability**        | **ANPR system India**                               | BOFU / MOFU  | `/solutions/anpr-vehicle-intelligence`           | _automatic number plate recognition, vehicle entry exit camera, commercial ANPR software._ Targets gate and parking security managers.                 |
| **Problem / Capability**        | **perimeter intrusion detection system**            | BOFU / MOFU  | `/solutions/virtual-fence-perimeter`             | _virtual fence CCTV, line crossing detection camera, night-time intrusion alert._ High-security perimeter breach protection.                           |
| **Problem / Capability**        | **centralized video intelligence dashboard**        | BOFU / MOFU  | `/solutions/centralized-dashboard`               | _multi-camera management dashboard, CCTV stream health monitoring, centralized security console._ For multi-site security operators.                   |
| **Industry / Commercial**       | **AI CCTV for manufacturing**                       | BOFU         | `/industries/manufacturing`                      | _AI security for industrial facilities, factory worker safety CCTV, industrial perimeter protection._ Targets plant heads and EHS managers.            |
| **Industry / Commercial**       | **enterprise security AI video analytics**          | BOFU         | `/industries/corporate-enterprise`               | _AI CCTV for corporate offices, commercial campus surveillance, multi-site office security._ Targets corporate CSOs and IT heads.                      |
| **Industry / Institutional**    | **smart city video analytics India**                | BOFU / MOFU  | `/industries/smart-cities`                       | _urban surveillance analytics, municipal CCTV intelligence, crowd management software._ Targets municipal authorities and urban consultants.           |
| **Industry / Institutional**    | **government CCTV video analytics**                 | BOFU / MOFU  | `/industries/government-public-safety`           | _public safety video surveillance, ICCC analytics layer, municipal command center AI._ Tenders and government security directives.                     |
| **Industry / Institutional**    | **defence surveillance video analytics**            | BOFU / MOFU  | `/industries/defence-security`                   | _border surveillance AI analytics, air-gapped CCTV analytics, military installation perimeter._ Generic, publicly shareable capabilities only.         |
| **Industry / Commercial**       | **hospital CCTV video analytics**                   | BOFU / MOFU  | `/industries/healthcare`                         | _hospital restricted area monitoring, patient safety CCTV, healthcare facility surveillance._ Targets medical superintendents and COOs.                |
| **Industry / Commercial**       | **warehouse CCTV video analytics**                  | BOFU / MOFU  | `/industries/logistics-warehousing`              | _logistics yard surveillance, loading dock monitoring, vehicle movement tracking._ Targets supply chain and logistics facility heads.                  |
| **Location / Genuine Presence** | **AI video analytics Kolkata**                      | BOFU         | `/locations/kolkata`                             | _AI surveillance company Kolkata, CCTV analytics West Bengal, video analytics Eastern India, Kalyani tech._ Genuine local presence & support anchor.   |
| **Comparison / Evaluation**     | **AI CCTV vs traditional CCTV**                     | MOFU         | `/resources/ai-cctv-vs-traditional-cctv`         | _difference between AI camera and normal CCTV, why upgrade CCTV to AI, passive recording vs real-time alerts._ Educational comparison.                 |
| **Comparison / Evaluation**     | **on-premise vs cloud video analytics**             | MOFU         | `/resources/on-premise-vs-cloud-video-analytics` | _air gapped CCTV analytics, edge AI vs cloud surveillance, bandwidth requirements for video analytics._ Technical infrastructure evaluation.           |
| **Informational / How-To**      | **how AI video analytics works with existing CCTV** | TOFU / MOFU  | `/resources/how-ai-video-analytics-works`        | _RTSP video stream analytics, connecting AI to NVR DVR, do I need to replace cameras for AI._ Resolves top customer technical objection.               |
| **Informational / Regulatory**  | **CCTV surveillance and DPDP Act India**            | TOFU / MOFU  | `/resources/cctv-dpdp-act-compliance-guide`      | _video surveillance privacy laws India, employee consent CCTV, face recognition legal framework India._ Authoritative legal/compliance guide.          |
| **Commercial / Partner**        | **video analytics system integrator partner India** | BOFU         | `/partners`                                      | _CCTV AI software distributor, security system integrator partnership, Make in India CCTV analytics OEM._ B2B channel partner recruitment.             |

---

## Strategic Keyword Mapping Rules

1. **Strict 1:1 Mapping:** No two pages target the exact same primary keyword to prevent cannibalization in Google and Perplexity rankings.
2. **Intent-Driven Page Hierarchy:**
   - **BOFU Pages** (`/request-demo`, `/request-pilot`, `/solutions/*`, `/industries/*`): Focus on specific capabilities, technical architectures, compatibility, and conversion forms.
   - **MOFU Pages** (`/resources/*-vs-*`): Provide balanced, factual comparisons to help technical committees make informed architectural decisions.
   - **TOFU Pages** (`/resources/how-*`): Deliver clear, answer-first explanations optimized for generative engine citation (ChatGPT Search, Perplexity, Gemini).
3. **Local SEO Integrity:** Geographic pages are exclusively reserved for Kolkata, Kalyani, and Eastern India where Resurgenix has operational roots and technical staff.
