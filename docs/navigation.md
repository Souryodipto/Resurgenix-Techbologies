# Navigation Architecture & Information Hierarchy

This document specifies the information architecture and interaction patterns for global navigation components across desktop, tablet, and mobile viewports.

---

## 1. Desktop Header Navigation

### Layout & Placement

- **Position:** Sticky top with subtle bottom border (`border-b border-slate-200 bg-white/95 backdrop-blur-sm z-50`).
- **Brand Element (Left):** Resurgenix monogram + brand text ("Resurgenix Technologies") linking to `/`.
- **Navigation Links (Center):**
  1. **Solutions** (Hover/Click Mega Menu)
  2. **Industries** (Dropdown Menu)
  3. **How It Works** (Direct Link: `/how-it-works`)
  4. **Resources** (Dropdown Menu)
  5. **About** (Dropdown Menu)
- **Direct Conversion Triggers (Right):**
  - **WhatsApp Direct Action:** `WhatsApp us` button opening prefilled chat (`+91 6290985464`).
  - **Primary CTA:** `Request a Demo` button (`/request-demo`, electric blue, high-contrast).

---

### Solutions Mega Menu Architecture

The Solutions mega menu organizes the 9 platform capabilities into logical functional tiers:

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ SOLUTIONS MEGA MENU                                                                         │
├──────────────────────────────┬──────────────────────────────┬──────────────────────────────┤
│ 1. CORE ANALYTICS            │ 2. ACCESS & BOUNDARIES       │ 3. ENTERPRISE & PUBLIC       │
│ • AI Video Analytics [PILOT] │ • AI Attendance & Workforce  │ • Enterprise Security        │
│   Real-time multi-camera       [PILOT] Consent-based logs     [IN-DEV] Multi-site monitoring│
│   person/object detection    • Restricted Zone &            • Centralized Video Intel      │
│ • ANPR & Vehicle Intel         Unauthorized Entry [PILOT]     [IN-DEV] Multi-site console  │
│   [IN-DEV] Plate recognition   Virtual spatial alerts       • Smart City Video Intel       │
│   and vehicle logging        • Defence & Security           • Border Surveillance          │
│                                [ROADMAP] Air-gapped modules   [ROADMAP] Long-range perimeter│
├──────────────────────────────┴──────────────────────────────┴──────────────────────────────┤
│ BOTTOM STRIP: "Evaluate on your existing CCTV cameras without rip-and-replace."             │
│ → Request a Controlled Pilot Program (/request-pilot)                                       │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Industries Dropdown Menu

- **Corporate & Enterprise** (`/industries/corporate-enterprise`)
- **Manufacturing & Industrial** (`/industries/manufacturing`)
- **Government & Public Safety** (`/industries/government-public-safety`)
- **Logistics & Warehousing** (`/industries/logistics-warehousing`)
- **Healthcare & Hospitals** (`/industries/healthcare`)
- **Retail & Commercial** (`/industries/retail`)
- **Hospitality & Hotels** (`/industries/hospitality`)
- _Cross-Link Banner:_ "Looking for Smart City or Defence Intelligence? View Smart City (`/solutions/smart-city-video-intelligence`) & Defence (`/solutions/defence-security`)."

---

### Resources Dropdown Menu

- **Knowledge Base Hub** (`/resources`)
- **Technical Guides:**
  - Connecting AI to Existing CCTV (`/resources/how-ai-video-analytics-works`)
  - DPDP Act & CCTV Compliance Guide (`/resources/cctv-dpdp-act-compliance-guide`)
  - Video Analytics Pilot Evaluation Checklist (`/resources/evaluating-video-analytics-pilots`)
- **Architectural Comparisons:**
  - AI CCTV vs. Traditional CCTV (`/compare/ai-cctv-vs-traditional-cctv`)
  - On-Premise vs. Cloud Video Analytics (`/compare/on-premise-vs-cloud-video-analytics`)
  - Edge AI vs. Centralized VMS (`/compare/edge-ai-vs-centralized-vms`)
- **Reference Tools:**
  - Surveillance AI Glossary (`/glossary`)
  - FAQ Hub (`/faq`)

---

### About Dropdown Menu

- **About the Company** (`/about`)
- **Security, Privacy & Governance** (`/security-and-privacy`)
- **System Integrator & Partner Program** (`/partners`)
- **Kolkata & Eastern India Regional Hub** (`/locations/kolkata-eastern-india`)
- **Contact Us** (`/contact`)

---

## 2. Mobile Navigation & Sticky Bar

### Mobile Drawer (Slide-Over Panel)

- Clean hamburger toggle on mobile viewports (`< 768px`).
- Expandable accordions for Solutions, Industries, Resources, and Company.
- Direct quick-links to `/how-it-works`, `/request-pilot`, and `/contact`.
- Full contact details: clickable phone, email, and WhatsApp buttons.

### Mobile Sticky Conversion Bar

- Affixed to the bottom of the screen on mobile devices.
- Left half: `WhatsApp us` button (green outline, prefilled link).
- Right half: `Request a Demo` button (solid electric blue).
- Hidden automatically when viewing the `/request-demo` or `/request-pilot` form pages to eliminate cognitive friction.

---

## 3. Global Footer Architecture

Organized into 5 distinct informational columns:

```text
Column 1: Platform Solutions
• AI Video Analytics (Pilot)
• AI Attendance & Workforce (Pilot)
• Restricted Zone Detection (Pilot)
• Enterprise Security
• ANPR & Vehicle Intelligence
• Centralized Video Console
• Smart City Intelligence
• Defence & Border Surveillance
• View All Solutions →

Column 2: Industries
• Corporate Campuses
• Manufacturing & Industrial
• Logistics & Warehousing
• Healthcare & Hospitals
• Retail Chains
• Hospitality & Hotels
• Government & Public Safety
• Smart City Projects
• Defence Installations

Column 3: Resources & Insights
• Technical Architecture
• AI CCTV vs Traditional CCTV
• On-Premise vs Cloud Analytics
• Edge AI vs Centralized VMS
• DPDP Act Compliance Guide
• Video Analytics Pilot Checklist
• Surveillance AI Glossary
• Frequently Asked Questions

Column 4: Company & Trust
• About Resurgenix
• Founder & Engineering Story
• Security & Privacy Governance
• System Integrator Partnerships
• Kolkata & Eastern India Hub
• Request a Demo
• Request a Pilot Program
• Contact Operations

Column 5: Regional Presence & Contact
• Headquarters: Kolkata, West Bengal, India
• Operational Focus: Kolkata, Kalyani, Eastern India
• Email: admin@resurgenixtechnologies.com
• Phone: +91 6290985464
• Direct Inquiries: WhatsApp Chat
• LinkedIn: Official Company Profile
• Instagram: @resurgenix.official
```

### Bottom Sub-Footer

- Copyright: `© [Year] Resurgenix Technologies Pvt. Ltd. All rights reserved.`
- Tagline: _"Your cameras already see. Resurgenix helps them understand."_
- Legal Links: Privacy Policy (`/privacy-policy`) &bull; Terms of Service (`/terms`) &bull; Security Overview (`/security-and-privacy`).

---

## 4. Breadcrumb Navigation Rules

1. **Schema.org BreadcrumbList:** Every breadcrumb must render valid JSON-LD metadata for search engine indexing.
2. **Path Hierarchy:**
   - Solutions: `Home > Solutions > [Solution Name]`
   - Industries: `Home > Industries > [Industry Name]`
   - Resources: `Home > Resources > [Article Title]`
   - Comparisons: `Home > Resources > Comparisons > [Comparison Title]`
   - Company: `Home > About > [Subpage Title]`
3. **Exclusions:** Breadcrumbs are omitted on the Homepage (`/`), conversion thank-you pages, and 404 pages.
4. **Current Page Behavior:** The final item in the breadcrumb is plain text (not a link) and carries `aria-current="page"`.
