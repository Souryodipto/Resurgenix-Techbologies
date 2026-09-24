# Open Items (Founder Verification Required)

The following items are assumptions or items awaiting explicit verification by the founder (Souryodipto Debnath). Per project guardrails, these items must never be fabricated, assumed as facts on public pages, or published without verification.

---

## 1. Domain & Site Configuration

- [ ] **Production Domain URL:** Assumed default is `https://resurgenixtechnologies.com` (via `NEXT_PUBLIC_SITE_URL`). Confirm whether this or another domain/subdomain will be the primary canonical URL.
- [ ] **Physical Office Address:** Only city, state, and country (`Kolkata, West Bengal, India`) are currently displayed. Confirm if a full registered office or operational facility street address should be listed on the contact page and schema.

---

## 2. Capability Status Classifications

Verify the current lifecycle status for each platform capability (currently configured as default assumptions in `/content/capabilities.ts`):

### Assumed "pilot" (ready for controlled customer pilot deployments):

- [ ] `ai-video-analytics` — AI Video Analytics (Person, vehicle, object detection and multi-camera stream processing)
- [ ] `ai-attendance-workforce` — AI Attendance & Workforce Intelligence (Automated attendance, personnel movement logs)
- [ ] `restricted-zone-detection` — Restricted Zone & Unauthorized Entry Detection (Real-time boundary breach and intrusion alerting)

### Assumed "in-development" (active engineering & internal validation):

- [ ] `anpr-vehicle-intelligence` — ANPR & Vehicle Intelligence (License plate recognition, vehicle classification)
- [ ] `face-verification-workflows` — Face Verification Workflows (Consent-based verification workflows with privacy safeguards)
- [ ] `virtual-fence-perimeter` — Virtual Fence & Perimeter Intrusion Detection (Line-crossing and perimeter tripwire alerting)
- [ ] `smart-city-analytics` — Smart City Video Intelligence (Crowd density, traffic flow monitoring, public infrastructure analytics)
- [ ] `centralized-dashboard` — Centralized Video Intelligence Dashboard (Multi-camera management, camera health, audit logs)

### Assumed "roadmap" (strategic architectural planning):

- [ ] `border-surveillance` — Border Surveillance Intelligence (Long-range monitoring, night movement detection)
- [ ] `defence-security-monitoring` — Defence-Specific Surveillance Modules (Isolated on-premise deployments, hardened operational security)

---

## 3. Traction, Recognition & Proof Claims

Participation in an event or incubation program must never imply government procurement, military deployment, official endorsement, or partnership. Confirm exact approved wording and supporting documentation for:

- [ ] **IIM Calcutta Innovation Park / MeitY TIDE 2.0:** Confirm exact nature of engagement (pre-incubation, incubation, grant recipient, or program participant).
- [ ] **Techstorm Innovation Challenge 2026:** Confirm finalist status and project name.
- [ ] **JC Bose Science Fair:** Confirm award/recognition title for Autonomous Disaster Drone project.
- [ ] **SIGNASS-2026:** Confirm participation context and approved public summary.
- [ ] **Smart Irrigation AI Research:** Confirm publication or institutional affiliation details if relevant to computer vision credibility.
- [x] _Step 11 Implementation Log (About Page Recognition Block):_ Because none of the recognition or program items above have been marked as approved with verified wording, the "Recognition and programs" block on `/about` currently renders nothing, adhering strictly to the rule: "If none are approved yet, render nothing and log it."
- [ ] _Note on Customer Proof:_ Until verified customer case studies are approved, trust sections will use a clearly marked placeholder (`[Add verified customer proof]`) that is excluded from production builds.

---

## 4. Team Members & Public Display

Per brief rules, team members cannot be publicly displayed until role and explicit written consent are confirmed.

- [ ] **Founder:** Souryodipto Debnath (Approved for display: Electronics & Computer Science, AI, Computer Vision, Robotics, Edge Computing).
- [ ] **Anushka Mukherjee:** Role title and consent to display publicly on the website.
- [ ] **Syed Md Farhan E Azam:** Role title and consent to display publicly on the website.
- [ ] **Mayank Bhardwaj:** Role title and consent to display publicly on the website.
- [ ] **Ayush Kumar Das:** Role title and consent to display publicly on the website.

---

## 5. Compliance & Security Claims

- [ ] Confirm any formal certifications (e.g. ISO 27001, SOC2, CE, BIS). _Guardrail: none are claimed on the website currently._
- [ ] Confirm privacy guidelines regarding Digital Personal Data Protection (DPDP) Act alignment for consent-based enterprise facial verification workflows.

---

## 6. Commercial, Infrastructure & Procurement Questions (From Step 2 Research)

- [ ] **Startup & GeM Registration:** Does Resurgenix currently possess a DPIIT Startup Recognition number and/or an active Government e-Marketplace (GeM) OEM profile? This determines whether GeM-specific procurement tags and Make in India (MII) preference badges can be displayed on tender/government pages.
- [ ] **Recommended Edge Hardware Baseline:** For on-premise edge deployments, what are the recommended minimum hardware specifications (e.g., standard workstation with NVIDIA RTX GPU vs. edge industrial box such as Jetson / x86 edge server) to list in technical compatibility guides?
- [ ] **Standard Pilot Evaluation Parameters:** Confirm whether describing a typical pilot as "3 to 5 high-priority camera streams for 14 to 30 days" aligns with operational delivery bandwidth, or if wording should remain strictly open-ended.
- [ ] **Kalyani Operational Footprint:** Confirm whether Kalyani should be described as an R&D/academic collaboration center or an operational branch alongside the Kolkata headquarters.
- [ ] **System Integrator Channel Policy:** Confirm whether Resurgenix provides formal Manufacturer Authorization Forms (MAF) and lead protection for regional security system integrators bidding on enterprise and public RFPs.

---

## 7. Brand Assets Required from Founder (From Step 6)

- [ ] **Official Master Vector Logo:** High-resolution SVG file of the official Resurgenix brandmark and wordmark. (Currently using an inline SVG optical aperture monogram and typography placeholder in `/components/layout/Header.tsx`).
- [ ] **Favicon & Web App Icons:** Master `favicon.ico`, `icon.svg`, and `apple-touch-icon.png` (180x180) based on the approved brandmark. (Currently using default Next.js icon assets until supplied).

---

## 8. Video Production Assets (From Step 7)

- [ ] **Master Explainer Video (`/public/video/resurgenix-what-resurgenix-can-do.mp4`):** Final joined 60-second MP4 video combining the 8 generated scene clips with voice-over audio and logo card.
  - _Current Fallback:_ The `VideoPlayer` component renders with the verified poster frame (`/images/resurgenix-video-poster.jpg`), `.vtt` captions, and an accessible `<details>` transcript disclosure without faking an MP4 file. `VideoObject` Schema JSON-LD will be injected once the video file is present.

---

## 9. Technical Specifications & Optical Thresholds (From Step 8)

The following operational engineering guidelines are stated on the solution pages as baseline compatibility parameters and need founder confirmation:

- [ ] **ANPR Optical Thresholds:** Confirm that "mounting angle under 30 degrees", "vehicle approach speed under 25 km/h at gates", and "minimum 150 pixels across the license plate" match internal optical testing benchmarks.
- [ ] **Attendance Inter-Pupillary Distance (IPD):** Confirm that "minimum 80 pixels between eye centers at 1080p resolution" is the recommended baseline for contactless optical attendance verification.
- [ ] **Edge GPU Channel Capacities:** Confirm recommended channel sizing per edge workstation (e.g., 8 streams on RTX 3060 vs. 16/32 streams on RTX 4080 / A2000 industrial edge boxes) before publishing a dedicated hardware compatibility matrix.
- [ ] **Relay Output Support:** Confirm the specific network I/O relay modules (e.g., Advantech ADAM / generic Modbus TCP relays) currently validated for triggering physical sirens, strobe lights, and boom barrier closures.

---

## 10. Industry Vertical Operational Scenarios & Thresholds (From Step 9)

The following operational rules, temporal thresholds, and integration points were included in the industry pages as realistic baseline configurations and require founder verification:

- [ ] **Corporate Turnstile Tailgating Logic:** Confirm that "two distinct bounding boxes within 1.2 seconds of single badge authorization" matches planned access control integration logic.
- [ ] **Manufacturing Safety Exclusion Envelopes:** Confirm that dynamic 2-meter virtual exclusion envelopes around stamping presses/robotic arms and direct relay beacon triggering reflect current pilot configurations.
- [ ] **Government & Smart City Crowd Thresholds:** Confirm that "3 persons per square meter" is the default trigger threshold for civic transit concourse density alerts, and that REST/MQTT schema matches common Smart Cities Mission ICCC standards.
- [ ] **Logistics Loading Dock Dwell Timing:** Confirm that 45-minute dock dwell alerts and pedestrian exclusion warnings in active forklift aisles reflect target warehouse pilot workflows.
- [ ] **Healthcare Ambulance Bay Dwell Limits:** Confirm that 2-minute stationary vehicle alert thresholds for emergency drop-off bays and silent visual alerts on nursing stations reflect intended hospital operations.
- [ ] **Retail Checkout Queue Alert Parameters:** Confirm that "queue count exceeding 5 people for more than 90 seconds" is the recommended operational alert threshold for retail store managers.
- [ ] **Hospitality Pool After-Hours Safety:** Confirm that time-scheduled virtual boundaries (e.g., 22:00 to 06:00) with silent security dispatch match standard hotel deployment practices.

---

## 11. Legal Documents Review (From Step 11)

- [ ] **Privacy Policy (`/privacy-policy`) & Terms of Service (`/terms`):** Draft, requires legal review before launch. Must be reviewed by qualified Indian corporate legal counsel for formal compliance under the Digital Personal Data Protection (DPDP) Act, 2023, Information Technology Act, 2000, and Indian Contract Act, 1872.

