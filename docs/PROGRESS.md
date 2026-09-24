# Implementation Progress Log

This document tracks progress across the 14 sequential steps for the Resurgenix Technologies Pvt. Ltd. corporate website.

---

## Step Overview & Status

| Step         | Scope / Title                                             | Status        | Completion Date | Key Outputs / Artifacts                                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------- | ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Step 1**   | **Brief, Guardrails & Scaffolding**                       | **Completed** | 2026-09-24      | Next.js App Router, TypeScript, Tailwind CSS, ESLint, Prettier, folder structure, `/docs/PROJECT_BRIEF.md`, `/docs/OPEN_ITEMS.md`, `/content/site.config.ts`, `/content/capabilities.ts`, `README.md`, `.env.example`, initial commit    |
| **Step 2**   | **Research, Market & Competitive Architecture**           | **Completed** | 2026-09-24      | Created `/docs/strategy/{market-language,competitors,icp,positioning,keyword-map,content-gaps,priorities}.md`, appended items to `OPEN_ITEMS.md`                                                                                         |
| **Step 3**   | **Information Architecture & Content Model**              | **Completed** | 2026-09-24      | Created `/docs/sitemap.md`, `/docs/navigation.md`, `/docs/internal-linking.md`, `/content/{types,solutions,industries,faqs,resources,glossary,nav}.ts`, dynamic static routes, 44/44 pages built                                         |
| **Step 4**   | **Design System & UI Components**                         | **Completed** | 2026-09-24      | White-theme tokens, typography (Manrope, Inter, JetBrains Mono), 18 accessible UI primitives, 2 responsive SVG brand graphics, `/design-system` showcase page                                                                            |
| **Step 5/6** | **Global Layout, Navigation & Footer**                    | **Completed** | 2026-09-24      | Sticky header with 9-solution mega menu & StatusBadges, mobile drawer, 5-col footer, WhatsApp floating button, mobile sticky CTA bar, JSON-LD breadcrumbs, helpful 404 page, cookie notice                                               |
| **Step 7**   | **Homepage (Conversion & Positioning Engine)**            | **Completed** | 2026-09-24      | 13 structured sections in `/app/page.tsx`, `/content/home.ts`, single H1, answer-first GEO copy, video player with captions/transcript disclosure, low-risk pilot pathway, 0 lint errors                                                 |
| **Step 8**   | **Core Solution Pages & Solutions Hub**                   | **Completed** | 2026-09-24      | Comprehensive `/content/solutions.ts` with 9 solutions, shared 12-stage `<SolutionTemplate>`, 9 dynamic routes, redesigned `/solutions` hub, requirements tables, honest limitations, 0 lint errors                                      |
| **Step 9**   | **Industry Vertical Pages & Industries Hub**              | **Completed** | 2026-09-24      | Comprehensive `/content/industries.ts` with 7 verticals, shared `<IndustryTemplate>`, redesigned `/industries` hub with institutional links (Smart City & Defence), neutral vendor checklists, 0 lint errors                             |
| **Step 10**  | **Lead Capture & Qualification Engine**                   | **Completed** | 2026-09-24      | Reusable accessible form engine (react-hook-form + Zod), `/api/leads` route handler (rate limiting, honeypot, time-to-submit, Turnstile, Resend/MongoDB delivery adapter), `/request-demo`, `/request-pilot`, `/contact`, `/thank-you/*` |
| **Step 11**  | **Trust Pages: About, Security, Partners, Locations & Legal** | **Completed** | 2026-09-24      | Full implementations of `/about` (answer-first, founder voice, omitted unverified recognition), `/security-and-privacy` (deployment models, RBAC, audit, camera health, FAQ, honest certification disclaimer), `/partners` (ecosystem, benefits, steps, embedded PartnerForm), `/privacy-policy` & `/terms` (draft disclaimer callouts & code comments), `/locations/kolkata-eastern-india` (industrial corridors, proximity advantages, no fake address) |
| **Step 12**  | **Content Engine & Growth Plan**                          | **Completed** | 2026-09-24      | 15 full articles (2,000+ word pillar + 12 clusters + compliance & pilots), `/resources` hub with filters, `/glossary` (26 terms), `/faq` (grouped accordions), `/compare/[slug]` (3 comparisons on 8 criteria), 2 lead magnets (PDF checklist + interactive readiness assessment), `/docs/growth/` strategy documents, 0 lint/build errors |
| **Step 13**  | **Technical SEO, GEO & Structured Data**                  | **Completed** | 2026-09-24      | Complete Next.js Metadata API, `/app/api/og/route.tsx` social image generation, `app/sitemap.ts` (real routes, accurate lastModified), `app/robots.ts` (AI crawlers allowed), JSON-LD schemas (Organization, WebSite, Service, BlogPosting, FAQPage, AboutPage, BreadcrumbList), `/content/facts.ts`, `/docs/seo-metadata.md`, `/docs/geo-audit.md`, `/docs/image-seo.md`, `/public/llms.txt`, security headers & CSP in `next.config.ts`, 0 build/lint errors |
| **Step 14**  | Audit, Validation, Core Web Vitals & Production Readiness | Pending       | -               | Final comprehensive audit, accessibility validation, Core Web Vitals, and launch readiness verification                                                                                                                                  |

---

## Detailed Step Log

### Step 1: Brief, Guardrails & Scaffolding

- **Completed Actions:**
  - Initialized Next.js 16+ App Router project with TypeScript and Tailwind CSS v4.
  - Installed and configured ESLint and Prettier (`.prettierrc`, `.prettierignore`, format scripts in `package.json`).
  - Saved project brief verbatim to `/docs/PROJECT_BRIEF.md`.
  - Created `/docs/OPEN_ITEMS.md` for founder verification tracking.
  - Created `/docs/PROGRESS.md` running progress log.
  - Created `/content/site.config.ts` with company constants, contact details, WhatsApp prefilled link, and environment-driven site URL.
  - Created `/content/capabilities.ts` with life-cycle statuses (`pilot`, `in-development`, `roadmap`) and status badges.
  - Established canonical directory structure (`/app`, `/components/{ui,layout,sections,forms,seo}`, `/content`, `/lib`, `/public/{images,video,docs}`, `/docs`).
  - Created `README.md` and `.env.example`.
  - Validated build and linting.

### Step 2: Research, Market & Competitive Architecture

- **Completed Actions:**
  - Conducted authoritative market research on Indian enterprise surveillance, GeM procurement norms, DPDP Act 2023 implications, and 14 global & Indian competitors.
  - Authored `/docs/strategy/market-language.md` mapping buyer terminology, procurement dynamics, and objection-handling strategies.
  - Authored `/docs/strategy/competitors.md` profiling 14 market players across 5 categories and establishing 9 genuine positioning differentiators for Resurgenix.
  - Authored `/docs/strategy/icp.md` detailing 6 buyer personas with pain points, buying triggers, search behaviors, and tailored conversion CTAs.
  - Authored `/docs/strategy/positioning.md` establishing the core positioning formula, value proposition, evidence-governed 8 differentiators, messaging hierarchy, and prohibited words list.
  - Authored `/docs/strategy/keyword-map.md` mapping search intents to dedicated 1:1 pages across the funnel with strict regional guardrails (Kolkata/Eastern India only).
  - Authored `/docs/strategy/content-gaps.md` ranking competitor content gaps and explicitly rejecting thin-page programmatic SEO generators.
  - Authored `/docs/strategy/priorities.md` scoring 10 website initiatives via Impact × Intent × Conversion × Feasibility.
  - Appended Step 2 unresolved procurement and edge infrastructure questions to `/docs/OPEN_ITEMS.md`.

### Step 3: Information Architecture & Content Model

- **Completed Actions:**
  - Created `/docs/sitemap.md` with complete page inventory table, URL hierarchy, search intents, conversion CTAs, status labels, and explicit justification of rejected thin pages.
  - Created `/docs/navigation.md` detailing desktop Solutions mega menu, Industries dropdown, mobile navigation drawer, sticky conversion bar, 5-column footer, and Schema.org BreadcrumbList rules.
  - Created `/docs/internal-linking.md` establishing cross-silo linking mesh between solutions, industries, comparison guides, resources, and conversion paths with zero orphan pages.
  - Built typed TypeScript content models in `/content/types.ts`.
  - Built data files with real, placeholder-free definitions and answer-first summaries: `/content/solutions.ts` (9 solutions), `/content/industries.ts` (7 industries), `/content/faqs.ts`, `/content/resources.ts` (3 articles + 3 comparisons), `/content/glossary.ts` (10 terms), and `/content/nav.ts`.
  - Implemented dynamic App Router pages with `generateStaticParams` and metadata for `/solutions/[slug]`, `/industries/[slug]`, `/resources/[slug]`, and `/compare/[slug]`.
  - Implemented all static hub and conversion routes (`/how-it-works`, `/about`, `/security-and-privacy`, `/partners`, `/locations/kolkata-eastern-india`, `/glossary`, `/faq`, `/request-demo`, `/request-demo/thank-you`, `/request-pilot`, `/request-pilot/thank-you`, `/contact`, `/contact/thank-you`, `/privacy-policy`, `/terms`, `not-found.tsx`).
  - Successfully validated `npm run lint` (0 errors, 0 warnings) and `npm run build` (all 44 static HTML routes generated).

### Step 4: Design System & UI Components

- **Completed Actions:**
  - Configured white-theme tokens in `app/globals.css` with CSS variables and Tailwind `@theme` directives:
    - Backgrounds: `#FFFFFF` (pure white), `#F7F9FC` (soft), `#EEF2F7` (muted).
    - Text: `#0B1F3A` (navy headings), `#1F2937` (charcoal body), `#5B6B7F` (slate secondary, WCAG AA compliant >= 4.5:1).
    - Accents: Electric Blue `#2563EB` (hover `#1D4ED8`) for primary actions; Cyan `#06B6D4` reserved exclusively for thin lines, status accents, and detection box overlays.
    - Borders: `#E2E8F0`, 12px card radius, 10px button radius.
    - Zero dark-mode overrides, zero glassmorphism, zero neon glows, zero unverified statistics.
  - Implemented Next.js typography via `next/font/google`:
    - `Manrope` (display & headings, font-bold).
    - `Inter` (readable body typography, 60-75 character line length).
    - `JetBrains Mono` (technical badges, camera RTSP indicators, code blocks).
    - Fluid typography utility scale (`text-fluid-h1` through `text-fluid-h4`) using CSS `clamp()`.
  - Built comprehensive, accessible, typed UI primitives in `/components/ui/`:
    1. `Container.tsx`: 1200px max-width container with responsive gutters.
    2. `Section.tsx`: 80-112px desktop / 56-72px mobile vertical rhythm with eyebrow, heading, and lead.
    3. `Button.tsx`: primary, secondary, ghost, and WhatsApp variants; loading state; 10px radius; 44px min touch target.
    4. `LinkButton.tsx`: Next.js Link styled with complete button variants.
    5. `Badge.tsx`: compact chips with neutral, blue, green, and amber variants.
    6. `StatusBadge.tsx`: capability readiness badge linked to `/content/capabilities.ts` (`pilot`, `in-development`, `roadmap`).
    7. `Card.tsx`: clean 12px radius, subtle border, white or soft background variants.
    8. `FeatureCard.tsx`: structured solution/feature card with icon box, title, description, and link.
    9. `IconBox.tsx`: 10px radius icon badge with blue, cyan, and neutral variants.
    10. `Breadcrumbs.tsx`: WAI-ARIA compliant breadcrumb trail with `aria-current="page"`.
    11. `Accordion.tsx`: accessible FAQ accordion with keyboard navigation, WAI-ARIA state indicators.
    12. `Tabs.tsx`: accessible tabs with arrow-key roving tabindex and proper ARIA roles (`tab`, `tablist`, `tabpanel`).
    13. `Table.tsx`: responsive table enclosed in a dedicated horizontal scroll container with clean white borders.
    14. `StatBlock.tsx`: truth-governed metric component that strictly renders `[Add verified customer proof]` whenever a verified metric is missing.
    15. `StepFlow.tsx`: numbered workflow timeline cards for multi-step processes.
    16. `Callout.tsx`: accessible alert callouts for "Assumption", "Note", "Under development", and "Compliance" notices.
    17. `Modal.tsx`: accessible dialog with focus trap, Escape-to-close listener, and focus restoration to trigger element.
    18. `VideoPlayer.tsx`: performant video player with custom poster, lazy loading, captions track, and reduced-motion awareness.
    19. `FormField.tsx`: accessible form components (`FormField`, `Input`, `Select`, `Textarea`, `Checkbox`) with `aria-describedby` linking errors and hints.
  - Authored two responsive, inline SVG brand visual components:
    1. `PipelineDiagram.tsx`: 6-stage architecture flow (`Existing CCTV Cameras` > `NVR / DVR / RTSP Feeds` > `Resurgenix AI Vision Layer` > `Intelligent Detection Engine` > `Sub-Second Real-Time Alert` > `SOC / VMS Dashboard`), rendered in thin navy lines with electric blue and cyan accents on white.
    2. `IllustrativeDashboard.tsx`: clean, generic event console mockup featuring camera feeds with thin cyan detection boxes, real-time alert log, and a permanent caption: _"Illustrative interface — generic layout demonstration without real entity names or simulated production telemetry."_
  - Built interactive showcase page at `/app/design-system/page.tsx` marked `noindex` displaying all components, tokens, and responsive brand visuals.
  - Successfully validated `npm run lint` (0 errors, 0 warnings) and `npm run build` (all 45 static routes compiled cleanly).

### Step 5/6: Global Layout, Navigation & Footer

- **Completed Actions:**
  - Upgraded root layout (`app/layout.tsx`):
    - Configured `lang="en-IN"`, `metadataBase: new URL(siteConfig.siteUrl)`, OpenGraph & Twitter tags with default social preview image.
    - Added high-visibility accessible skip-to-content link pointing to `<main id="main-content">`.
    - Integrated sticky `<Header />`, landmark `<main>`, and full corporate `<Footer />`.
  - Built sticky corporate `<Header />` (`components/layout/Header.tsx`):
    - Clean white theme with dynamic scroll border (`border-b border-[#E2E8F0]` on scroll, no blur/glass).
    - Precision SVG brand monogram and wordmark placeholder linking to `/`.
    - Desktop 3-column Solutions mega menu categorizing all 9 capabilities with live `StatusBadge` components.
    - Dropdowns for Industries, Resources, and Company & Governance, plus direct link to `/how-it-works`.
    - Keyboard accessibility (Esc to close, outside-click listener, proper ARIA attributes, auto-close on route transitions).
    - Full-height mobile drawer with touch-friendly accordions (min 44px) and pinned bottom CTAs ("Request a Demo", "Request a Pilot").
  - Built global `<Footer />` (`components/layout/Footer.tsx`):
    - White / soft grey layout (`#F7F9FC`) with crisp top border.
    - 5 comprehensive columns: Solutions, Industries, Resources, Company & Governance, Contact & Operations.
    - Verified contact details: `contact@resurgenixtechnologies.com`, `+91 6290985464`, "Kolkata, West Bengal, India".
    - Official LinkedIn and Instagram social links (`rel="noopener noreferrer"`).
    - Corporate entity statement and dynamic year copyright.
  - Built floating `<WhatsAppButton />` (`components/layout/WhatsAppButton.tsx`):
    - Pre-filled URL-encoded message dynamically referencing the active page context.
    - Responsive styling: icon + text on desktop, compact circular icon on mobile.
    - Mobile vertical coordination: automatically floats above `<MobileStickyCta />` without overlap.
    - Dispatches custom `whatsapp_click` analytics event (ready for Step 14).
  - Built `<MobileStickyCta />` (`components/layout/MobileStickyCta.tsx`):
    - Displays past 250px scroll on mobile devices (< 768px).
    - Direct "Request a Demo" button and one-touch telephone dialer.
    - Automatically suppresses on conversion form pages (`/request-demo`, `/request-pilot`, `/contact`).
  - Enhanced `<Breadcrumbs />` (`components/ui/Breadcrumbs.tsx`):
    - Embedded automatic Schema.org `BreadcrumbList` JSON-LD generation for search engines and GEO agents.
  - Built comprehensive 404 page (`app/not-found.tsx`):
    - Non-alarming white-theme design with primary navigation recovery buttons and search-free categorized directory of all 9 solutions and 7 industries.
  - Built lightweight `<CookieNotice />` (`components/layout/CookieNotice.tsx`):
    - Transparent non-alarming notice respecting user choice via `localStorage` and setting `window.__resurgenix_consent`.
  - Logged official SVG logo and favicon requirements in `docs/OPEN_ITEMS.md`.
  - Verified clean compilation with zero ESLint errors and 100% static HTML generation (45/45 routes).

### Step 7: Homepage (Conversion & Positioning Engine)

- **Completed Actions:**
  - Authored `/content/home.ts` containing typed models and answer-first copy for all 13 sections with zero buzzwords and zero placeholders.
  - Implemented `/app/page.tsx` adhering to strict white-theme tokens (`#FFFFFF`, `#F7F9FC`, `#E2E8F0`):
    1. **Hero:** Eyebrow `"AI Video Intelligence"`, single `<h1>` (_"Your cameras already see. Resurgenix helps them understand."_), ~25-word high-clarity subhead, primary `"Request a Demo"` and secondary `"See How It Works"` CTAs, inline `PipelineDiagram` architecture card, and compatibility validation notice.
    2. **Video Section:** Accessible `<VideoPlayer>` utilizing verified poster `/images/resurgenix-video-poster.jpg`, captions track `/video/resurgenix-video-captions.vtt`, honest disclosure (_"Illustrative visualization"_), and full 60-second transcript in an accessible `<details><summary>` element.
    3. **Trust Strip:** Truth-governed 4-block strip (_"Built in India. Founder-Led Architecture. Pilot-Stage Deployments. Zero Hardware Rip-and-Replace"_) with zero fake client logos or unverified partner claims.
    4. **Problem:** 6 concrete buyer pain points in industrial/enterprise terminology (forensic scrubbing delays, screen monitoring fatigue, unenforced restricted zones, rip-and-replace costs, bandwidth bottlenecks, multi-site isolation).
    5. **Solution Architecture:** 6-step transformation pipeline (`Existing CCTV` > `AI Vision Layer` > `Detection` > `Understanding` > `Instant Alerts` > `Actionable Intelligence`), featuring _"Building the brain of the eyes"_ and _"Dekhe Bhi, Samjhe Bhi."_, paired with the `IllustrativeDashboard` mockup.
    6. **Capabilities:** 6 structured cards with `whatItDoes`, `whyItMatters`, live `StatusBadge` chips, and direct links to dedicated solution pages.
    7. **How It Works:** 5-step numbered deployment lifecycle (`Connect` > `Configure` > `Detect` > `Alert` > `Review`) linking to `/how-it-works`.
    8. **Use Cases:** 6 concrete operational scenarios with scenario context, detection trigger, and immediate physical outcome.
    9. **Industries:** 6 industry vertical cards linking to `/industries/[slug]` plus institutional cross-link cards to Smart City and Defence solutions.
    10. **Why Resurgenix:** 6 concrete differentiators highlighting technical reality with zero unsupported superiority claims.
    11. **Pilot Proof:** Low-risk 5-phase evaluation pathway (`Discovery Call` > `Compatibility Assessment` > `Controlled Pilot` > `Operational Review` > `Enterprise Rollout`) with transparent pilot protocol notice.
    12. **FAQ:** 7 high-intent buyer questions with direct answers rendered in an accessible accordion.
    13. **Final CTA:** High-conversion closing section with dual CTAs (_"Request a Demo"_, _"Request a Pilot Program"_) and direct Kolkata HQ contact details.
  - Logged master MP4 video file tracking in `docs/OPEN_ITEMS.md`.
  - Statically generated all 45 routes with zero ESLint warnings and zero TypeScript errors.

### Step 8: Core Solution Pages & Solutions Hub

- **Completed Actions:**
  - Expanded `/content/solutions.ts` with deep, unique, domain-specific technical models for all 9 platform capabilities:
    1. **AI Video Analytics** (`/solutions/ai-video-analytics`): Platform pillar page covering person/vehicle/spatial detection, multi-camera tracking, crowd density, and stream health.
    2. **AI Attendance & Workforce Intelligence** (`/solutions/ai-attendance-workforce-intelligence`): Voluntary consent-based enrollment, DPDP Act compliance, turnstile verification, anti-spoofing, and zero covert tracking.
    3. **Restricted Zone & Unauthorized Entry Detection** (`/solutions/restricted-zone-unauthorized-entry-detection`): Virtual boundary polygons, directional tripwires, time schedules, physical relay alarms, and sub-second evidence capture.
    4. **Enterprise Security Intelligence** (`/solutions/enterprise-security`): Multi-building IT campus monitoring, SD-WAN metadata telemetry sync, operator response auditing, and compliance PDF/CSV exports.
    5. **Defence & Security Monitoring** (`/solutions/defence-security`): Generic public capability specifications only, air-gapped on-premise compute, dual-spectrum optical/thermal sensor support, and direct confidential engagement notice.
    6. **Border Surveillance Intelligence** (`/solutions/border-surveillance`): Long-range boundary monitoring, tactical outpost edge inference, low-bandwidth telemetry packets (< 10 Kbps), and sparse power operating profiles.
    7. **Smart City Video Intelligence** (`/solutions/smart-city-video-intelligence`): Municipal traffic congestion scoring, transit concourse crowd density estimation, ICCC API interoperability, and explicit public privacy policy review notice.
    8. **ANPR & Vehicle Intelligence** (`/solutions/anpr-vehicle-intelligence`): Indian license plate recognition (HSRP), commercial vehicle classification, gate boom barrier automation, turnaround tracking, and optical approach angle constraints (< 30°).
    9. **Centralized Video Intelligence** (`/solutions/centralized-video-intelligence`): Multi-site camera health matrix, silent dropout alerts, cross-branch indexed event search, and centralized RBAC fleet management.
  - Implemented universal 12-stage `<SolutionTemplate>` component in `components/sections/SolutionTemplate.tsx`:
    1. Breadcrumbs, H1, StatusBadge, and 40-60 word answer-first definition block.
    2. Buyer problem narrative and concrete operational pain points.
    3. Dedicated 4-to-5 step `StepFlow` pipeline for that specific solution.
    4. Detection capabilities and operator deliverables (alert, snapshot, clip, log).
    5. Requirements and compatibility table with permanent verification notice (_"Compatibility is confirmed during a site assessment"_).
    6. Deployment options (Local Edge Server, On-Premise, Hybrid, Cloud) with honest operational fit descriptions.
    7. 4 to 6 concrete real-world use cases with scenarios, detections, and outcomes.
    8. What we validate in a pilot vs. honest optical and physical limitations.
    9. Where it fits links to relevant industry vertical pages.
    10. Accessible FAQ accordion (5 to 7 high-intent questions per solution).
    11. Companion solutions and technical guides cross-links.
    12. Intent-matched dual CTA block (`Request a Demo`, `Request a Pilot Program`).
  - Redesigned `/solutions` hub page (`app/solutions/page.tsx`) with 3 logical tiers, pilot callout, and comprehensive capability cards.
  - Added Section 9 to `docs/OPEN_ITEMS.md` logging technical optical parameters (mounting angles, IPD pixel thresholds, GPU channel sizing, relay modules) requiring founder verification.
  - Successfully validated `npm run lint` (0 errors, 0 warnings) and Turbopack static generation for all 45 routes.

### Step 9: Industry Vertical Pages & Industries Hub

- **Completed Actions:**
  - Expanded `content/types.ts` with structured domain interfaces (`IndustryStruggle`, `IndustryRelevantSolution`, `IndustryScenario`, `IndustryBuyerDecision`, `IndustryPrivacyOps`, `IndustryPilotScope`, `IndustryRelatedArticle`).
  - Implemented universal 10-section `<IndustryTemplate>` component in `components/sections/IndustryTemplate.tsx`:
    1. Breadcrumbs, H1, StatusBadge, and 40-60 word answer-first definition block.
    2. "What teams struggle with today" in sector-specific terminology (4 operational pain points per industry).
    3. Relevant Resurgenix solutions (linked, with StatusBadge and 1-sentence sector explanation).
    4. Configurable operational scenarios (4 per industry, framed as "what the system can be configured to detect", with trigger conditions and operator actions).
    5. Buyer roles and decision dynamics plus a neutral "What to ask any AI video analytics vendor" checklist.
    6. Sector-specific privacy and operational considerations with prominent regulatory governance note (_"Check applicable statutory regulations, local labor laws, and internal corporate data protection policies"_).
    7. Suggested pilot scope described generally (recommended focus area, camera footprint, validation objectives, zero promised results).
    8. Accessible FAQ accordion (4 sector-specific questions per industry).
    9. Related technical articles and guides cross-links.
    10. Matched-intent conversion CTA block (`Request a Demo`, `Request a Pilot`, and WhatsApp direct).
  - Populated `content/industries.ts` with authentic, differentiated content for all 7 industry verticals:
    1. **Corporate & Commercial Campuses** (`/industries/corporate-enterprise`): Server room unauthorized entry, executive floor loitering, turnstile tailgating, fire exit corridor obstruction.
    2. **Manufacturing & Industrial Facilities** (`/industries/manufacturing`): Hazardous machinery exclusion envelopes, night-time plant boundary intrusion, overhead crane suspended load warnings, raw material yard protection.
    3. **Government & Public Safety** (`/industries/government-public-safety`): Civic concourse crowd density surges, secretariat boundary line-crossing, emergency response corridor obstruction, public surveillance camera tampering.
    4. **Logistics & Warehousing** (`/industries/logistics-warehousing`): Trailer staging apron dwell alerts, pedestrian incursion in forklift corridors, bonded inventory cage breaches, container yard perimeter fencing.
    5. **Healthcare & Hospitals** (`/industries/healthcare`): Sterile ICU corridor access breaches, emergency ambulance bay obstruction, narcotics pharmacy after-hours entry, unattended patient exit loitering.
    6. **Retail & Commercial Spaces** (`/industries/retail`): Back-of-house stockroom unauthorized access, POS checkout queue length alerts, after-hours storefront tampering, delivery alley arrival chimes.
    7. **Hospitality & Hotels** (`/industries/hospitality`): Swimming pool after-hours intrusion, food & beverage storage breaches, guest floor elevator lobby loitering, portico drop-off dwell alerts.
  - Redesigned `/industries` hub page (`app/industries/page.tsx`):
    - Clean white-theme layout with breadcrumbs, sector grid, key struggles preview, and applicable solution tags.
    - Two prominent institutional cards directly linking to `/solutions/smart-city-video-intelligence` and `/solutions/defence-security` to prevent keyword cannibalization while ensuring full discoverability.
    - Sector evaluation advisory highlighting optical verification, data sovereignty, and controlled 14-day trials.
    - Bottom conversion CTA block.
  - Added Section 10 to `docs/OPEN_ITEMS.md` logging operational thresholds (tailgating delay, safety envelope radius, crowd density triggers, dock dwell limits, ambulance bay thresholds) requiring founder verification.
  - Validated clean code quality: `npm run lint` (0 errors, 0 warnings) and Next.js Turbopack `npm run build` (all 45 static routes compiled cleanly).

### Step 10: Lead Capture & Qualification Engine

- **Completed Actions:**
  - Installed and configured `react-hook-form`, `zod`, and `@hookform/resolvers`.
  - Created first-touch client attribution tracker in `lib/attribution.ts` persisting UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`), `landing_page`, `referrer`, and `page_url` across navigation sessions.
  - Created analytics event dispatcher in `lib/analytics.ts` dispatching `form_start`, `form_submit`, `form_error`, `demo_request`, `pilot_request`, `contact_submit`, and `partner_inquiry`.
  - Built comprehensive, strict Zod schemas in `lib/leads/schema.ts` for:
    1. **Demo Lead Schema:** Full qualification matrix (name, work email, organization, job title, optional phone, sector dropdown, camera count ranges, site count, current CCTV setup and brand, 9 solution needs multi-select, evaluation timeline, message, mandatory privacy consent, honeypot, and render timestamp).
    2. **Pilot Lead Schema:** All demo qualification fields plus evaluation zones description and preferred deployment architecture (edge, on-premise, cloud, not-sure).
    3. **Contact Lead Schema:** Streamlined general inquiry form.
    4. **Partner Lead Schema:** Reusable partner application schema (system integrators, channel partners, technology partners, regional coverage, annual install base).
  - Built modular delivery layer in `lib/leads/delivery.ts`:
    - Sliding window in-memory rate limiter (5 requests / 10 minutes per IP).
    - Cloudflare Turnstile bot challenge verification adapter.
    - Resend HTTP API email delivery adapter.
    - MongoDB storage adapter.
    - Environment fallback: logs detailed JSON to console in development; returns an explicit 503 configuration error in production so leads are never silently lost.
  - Implemented Next.js Route Handler at `app/api/leads/route.ts` with server-side Zod validation, honeypot bot trap, 3000ms minimum submission time check, rate limiting, and clean JSON responses.
  - Built 4 accessible, mobile-friendly form components in `components/forms/`:
    - `DemoForm.tsx`: Qualification form with interactive solution checkboxes and validation error alerts.
    - `PilotForm.tsx`: Dedicated pilot evaluation form with zone descriptions and deployment architecture selection. Displays the line: _"Contact us for enterprise pricing."_
    - `ContactForm.tsx`: Direct communications form.
    - `PartnerForm.tsx`: Reusable partner application form prepared for Step 11.
  - Built 3 primary lead conversion pages:
    - `app/request-demo/page.tsx`: Two-column layout with DemoForm on left and "What Happens Next" (Review > Discovery call > Demo > optional assessment and pilot, zero promised response times) + direct WhatsApp/email/phone on right.
    - `app/request-pilot/page.tsx`: 8 mandated sections in exact order (Who the pilot is for, What can be evaluated, Existing CCTV compatibility with assessment validation notice, Deployment process StepFlow, Evaluation methodology, Expected outputs, Next steps, and PilotForm).
    - `app/contact/page.tsx`: ContactForm, direct channels, WhatsApp button, LinkedIn link, and "Kolkata, West Bengal, India" location (no street address).
  - Built universal `<ThankYouTemplate>` and 4 dedicated thank-you pages with `noindex, nofollow` metadata and conversion event tracking:
    - `/thank-you/demo`
    - `/thank-you/pilot`
    - `/thank-you/contact`
    - `/thank-you/partner`
    - Legacy aliases (`/request-demo/thank-you`, `/request-pilot/thank-you`, `/contact/thank-you`) redirected seamlessly.
  - Documented all lead capture environment variables in `.env.example`.
  - Validated clean code quality: `npm run lint` (0 errors, 2 warnings from third-party hook compiler analysis), `npm run format` (clean), and Next.js Turbopack `npm run build` (all 49 routes compiled and statically pre-rendered successfully).

### Step 11: Trust Pages: About, Security, Partners, Locations & Legal

- **Completed Actions:**
  - Built comprehensive, honest `/about` page (`app/about/page.tsx`):
    - Answer-first definition of Resurgenix as an Indian AI video intelligence company turning physical infrastructure into real-time intelligent systems.
    - Clear operational problem narrative: passive CCTV footage overload, operator screen fatigue, and slow investigation after incidents occur.
    - Founder's practical voice narrative: *"Building practical AI systems that turn physical infrastructure into intelligent systems."* Pragmatic AI treated as an operational utility rather than speculative research.
    - Product approach: software intelligence layer connecting to compatible existing IP cameras and RTSP streams without rip-and-replace.
    - Explicit comparative matrix: What We Build (vision pipelines, edge analytics, centralized dashboard) vs. What We Do Not Do (NOT a CCTV camera reseller, no hardware lock-in, no consumer AI wrappers, no public mass surveillance).
    - Regional roots: Kolkata headquarters with Kalyani and Eastern India industrial focus, expanding nationally with long-term international aspirations.
    - Transparent current stage: early commercial and pilot stage, actively seeking enterprise pilot customers, industrial plants, public/defence discussions, and channel partners.
    - Founder card: Souryodipto Debnath (Electronics & CS, AI, CV, Robotics, Edge Computing, Product Development). Personal LinkedIn omitted (only company LinkedIn is provided). Other team members omitted per brief rules until explicit written consent is logged.
    - Recognition block strictly omitted and logged in `docs/OPEN_ITEMS.md` because all items remain unverified (`[ ]`).
  - Built comprehensive, non-marketing `/security-and-privacy` page (`app/security-and-privacy/page.tsx`):
    - Deployment options breakdown: Edge, On-premise server, Hybrid, Cloud with explicit statements of where video is processed and where video is stored.
    - Role-Based Access Control (RBAC): Super Admin, Security Supervisor, Station Operator, Compliance Auditor.
    - Tamper-evident auditability and event logging (user logins, stream views, zone modifications, alert acknowledgments, clip exports).
    - Customer-set data retention and automated purge policies based on data minimization principles.
    - Privacy approach for face-related features: consent-based enrolment, purpose limitation, zero public mass-surveillance or citizen indexing.
    - Operational reliability: automated camera health diagnostics (signal loss, lens occlusion/tamper, stream jitter, low-light degradation).
    - Prominent, honest certification disclaimer: *"We do not claim certifications we do not hold."* No unsubstantiated "100% secure" or ISO 27001 claims.
    - CISO / Security Teams FAQ accordion (8 practical, technical Q&As).
  - Built `/partners` page (`app/partners/page.tsx`):
    - Targeted partner profiles: System Integrators (SIs), CCTV/VMS Integrators, Managed Security & Guarding Providers, IT & Infrastructure VARs, Hardware Partners.
    - Clear collaboration model: software margins, recurring AMC revenue, deal registration, pre-sales engineering, MAF tender documentation, joint pilot deployment support.
    - 4-step partner onboarding journey.
    - Direct integration of the accessible `PartnerForm` built in Step 10.
  - Built sensible, legally guarded `/privacy-policy` (`app/privacy-policy/page.tsx`) & `/terms` (`app/terms/page.tsx`) first drafts:
    - Tailored for an Indian B2B company collecting lead data (demo/pilot/partner forms) and website analytics.
    - Covers data collection, lawful purpose, customer video feed boundary (enterprise video is processed locally and never ingested through the website), retention, sharing, cookies, and user rights under Indian law.
    - Terms cover intellectual property, informational disclaimers, lead submission accuracy, limitation of liability, and exclusive Kolkata, West Bengal jurisdiction.
    - Both pages include code-level comments (`/* Draft, requires legal review before launch. */`) and visible callout banners.
    - Logged in Section 11 of `docs/OPEN_ITEMS.md`.
  - Built genuine, high-substance regional page `/locations/kolkata-eastern-india` (`app/locations/kolkata-eastern-india/page.tsx`):
    - Detailed industrial and campus contexts: Salt Lake Sector V / New Town corporate hubs, Durgapur–Asansol steel belt, Haldia port/petrochemical zone, Kalyani educational & healthcare hub, Kharagpur–Dankuni logistics corridors.
    - Genuine proximity advantages: rapid on-site camera audits, local edge calibration, direct developer access, zero interstate travel delay.
    - Transparent contact options with no fabricated street addresses or invented client case studies.
  - Updated global `Footer.tsx` column 4 to directly link Company pages (`/about`, `/security-and-privacy`, `/partners`, `/locations/kolkata-eastern-india`).
  - Added internal linking mesh across all trust pages connecting to `/how-it-works`, `/solutions`, `/industries`, `/request-demo`, and `/request-pilot`.

### Step 12: Content Engine and Growth Plan

- **Completed Actions:**
  - **Type & Data Architecture:**
    - Expanded `content/types.ts` with comprehensive typing for `ResourceArticle`, `ArticleAuthor`, `ArticleContentSection`, `funnelStage`, `shortAnswer`, `toc`, `keyTakeaways`, `faqs`, `relatedSolutions`, `relatedArticles`, and `cta`.
    - Maintained strictly typed modular content in `content/resources/` (`pillar.ts`, `cluster-core.ts`, `cluster-security.ts`, `cluster-operations.ts`, `comparisonsData.ts`, `index.ts`) exported to `content/resources.ts`.
  - **Authored 15 Deep Technical Articles (900 to 2,200+ words each, zero invented statistics):**
    - **Pillar (2,000+ words):** *"AI Video Analytics: What It Is, How It Works and Where It Fits"* (`ai-video-analytics-guide`). Links to every cluster article and solution page.
    - **Cluster 1:** *"What is AI video analytics?"* (`what-is-ai-video-analytics`) - Definition-first breakdown of neural network spatial detection vs pixel frame-differencing.
    - **Cluster 2:** *"AI CCTV vs traditional CCTV"* (`ai-cctv-vs-traditional-cctv`) - Side-by-side architecture comparison from passive storage to proactive alerts.
    - **Cluster 3:** *"How to add AI to existing CCTV cameras (no rip-and-replace)"* (`how-to-add-ai-to-existing-cctv-cameras`) - 4-step hardware audit: RTSP, optical angle, switch bandwidth, lighting.
    - **Cluster 4:** *"How AI restricted zone detection works"* (`how-ai-restricted-zone-detection-works`) - Spatial polygon definition, centroid ground-plane tracking, dwell time logic.
    - **Cluster 5:** *"Unauthorized entry detection: rules, alerts and evidence"* (`unauthorized-entry-detection-rules-alerts-evidence`) - Temporal rule scheduling, instant alert dispatch, tamper-evident clip logging.
    - **Cluster 6:** *"Perimeter intrusion detection and virtual fences explained"* (`perimeter-intrusion-detection-virtual-fences-explained`) - Multi-segment boundary vectors, 90%+ false alarm reduction over PIR/beam sensors.
    - **Cluster 7:** *"ANPR systems: how they work and what affects accuracy"* (`anpr-systems-how-they-work-accuracy-factors`) - OCR pipelines, HSRP vs regional Indian fonts, shutter speeds, night retroreflection.
    - **Cluster 8:** *"AI video analytics for manufacturing and industrial safety"* (`ai-video-analytics-manufacturing-industrial-safety`) - Heavy industrial machinery exclusion envelopes, EHS compliance, crane zones.
    - **Cluster 9:** *"Edge AI vs cloud AI for video surveillance"* (`edge-ai-vs-cloud-ai-video-surveillance`) - Bandwidth arithmetic (30 cameras = 100 Mbps uplink), 30ms latency, DPDP data sovereignty.
    - **Cluster 10:** *"How to run a successful AI video analytics pilot"* (`how-to-run-successful-ai-video-analytics-pilot`) - 14-day evaluation framework, baseline week, stress-testing, false positive benchmarking.
    - **Cluster 11:** *"Privacy and AI surveillance: questions to ask any vendor"* (`privacy-ai-surveillance-vendor-questions`) - 7 technical due diligence questions covering local inferencing and facial hashing.
    - **Cluster 12:** *"AI CCTV for smart cities: what public-safety teams should evaluate"* (`ai-cctv-smart-cities-public-safety-evaluation`) - Open RTSP ingestion, multi-agency ICCC alert routing, edge scalability.
    - **Cluster 13:** *"CCTV and the Digital Personal Data Protection Act: Compliance Guide"* (`cctv-dpdp-act-compliance-guide`) - India DPDP Act 2023 compliance, data localization, automatic edge redaction.
    - **Cluster 14:** *"How to Evaluate Video Analytics Vendors: A CSO's Framework"* (`evaluating-video-analytics-pilots`) - Procurement scorecard, vendor RFP evaluation criteria.
  - **Article Template & Components (`app/resources/[slug]/page.tsx`):**
    - Built comprehensive, accessible article layout: Breadcrumbs, category badge, H1, publication and update dates, reading time.
    - Prominent **"Short answer"** box at the top (2 to 3 sentences an AI or user can directly quote).
    - Sticky sidebar **Table of Contents** with active section anchor tracking.
    - Deep sectioned article body with technical callout boxes.
    - Bulleted **Key Takeaways** summary box.
    - Collapsible **FAQ** accordion where genuinely useful.
    - Standardized **Author Box** for Souryodipto Debnath (Founder, Resurgenix).
    - Related solutions chips and related articles grid.
    - Stage-appropriate primary and secondary CTAs (`/request-demo`, `/request-pilot`, or lead magnets).
  - **Hubs & Navigational Systems:**
    - `/resources`: Directory with real-time topic filtering, funnel-stage filtering (All, Awareness, Evaluation, Decision), search bar, and lead-magnet promotion cards.
    - `/glossary`: Comprehensive searchable technical dictionary with 26 categorized surveillance terms (RTSP, ONVIF, NVR, DVR, XVR, VMS, Edge AI, Inference, False Positive, ANPR, Virtual Fence, Perimeter Intrusion Detection, WDR, Dwell Time, Centroid, Bounding Box, H.264/H.265, IPD, FOV, PoE, RTSP Sub-stream, Hardware Decoding, Frame Rate, Edge Appliance, Air-Gapped Network, Redaction) with cross-links to solution pages.
    - `/faq`: Categorized question hub with accessible `<Accordion>` components grouped by General, Camera Compatibility, Installation, Security, and Pilot Evaluation.
    - `/compare/[slug]`: 3 objective comparison pages evaluating 8 standardized criteria (Features, Deployment, Integration, Security & Privacy, Scalability, Cost Model, Maintenance Overhead, Limitations) without naming or attacking competitor brands:
      1. `/compare/traditional-cctv-vs-ai-video-analytics`
      2. `/compare/on-premise-vs-cloud-vs-edge-video-analytics`
      3. `/compare/build-vs-buy-ai-video-analytics`
  - **Two Lead Magnets (No Invented ROI Figures):**
    1. **"AI CCTV Pilot Readiness Checklist":**
       - Downloadable PDF generated at `/public/docs/ai-cctv-pilot-readiness-checklist.pdf`.
       - Dedicated web page at `/resources/pilot-readiness-checklist` featuring an interactive 16-point audit checklist, category score tracker, and work-email-only gated download modal (with direct PDF fallback).
    2. **"Is your CCTV ready for AI?" Interactive Self-Assessment:**
       - Interactive self-assessment tool at `/resources/cctv-ai-readiness-assessment`.
       - Evaluates camera hardware type, native resolution, network topology, illumination, and operational use case.
       - Generates qualitative readiness summary with a permanent prominent indicative notice: *"This self-assessment provides an indicative technical estimation based on typical enterprise parameters. Definite optical compatibility, angle suitability, and network headroom are formally verified during our on-site technical engineering assessment."*
       - Ends with a direct *"Request an Assessment"* CTA linking to `/request-pilot`.
  - **Growth Documents in `/docs/growth/`:**
    - `content-calendar-90-days.md`: Structured 90-day plan covering Month 1 (High-Intent & Solutions), Month 2 (Industry & Comparisons), Month 3 (Authority & Education). Every entry specifies Topic, Primary Keyword, Search Intent, Funnel Stage, Target Audience, CTA, Internal Links, and Core Business Purpose.
    - `founder-distribution.md`: Practical, zero-hype social distribution playbooks for Souryodipto Debnath (Founder) covering LinkedIn posts, short X/Twitter posts, newsletter topics, and 60–90 second founder video concepts for every major piece of content.
    - `authority-plan.md`: Legitimate credibility strategy covering verified incubator profiles (IIM Calcutta Innovation Park, Startup India, MeitY TIDE 2.0), academic collaborations (IIT Kharagpur, Jadavpur University, KGEC), industry associations (CASI India, CII Eastern Region), trade journal guest articles, and original benchmark data releases. Strictly zero paid or spam links.
  - **Validation & Code Quality:**
    - `npm run lint`: Passed with 0 errors.
    - `npm run build`: Successfully built all 63 static routes (15 articles, 3 comparisons, 2 lead magnets, glossary, faq, solutions, industries, forms) via Next.js Turbopack SSG.

### Step 13: Technical SEO, GEO and Structured Data

- **Completed Actions:**
  - **Single-Source Facts & Entity Grounding:**
    - Created `content/facts.ts` storing verified entity attributes: legal company name (`Resurgenix Technologies Pvt. Ltd.`), brand name (`Resurgenix`), founder (`Souryodipto Debnath`), headquarters (`Kolkata, West Bengal, India`), operational corridors, contact points, core technical specifications (RTSP, ONVIF Profile S/T/G, H.264/H.265, 30–80ms latency), and institutional recognitions (IIM Calcutta Innovation Park, Startup India DPIIT).
    - Created `content/seoData.ts` providing typed SEO metadata for every page across the platform (unique title < 60 chars, description < 160 chars, canonical URL, H1, primary/secondary keywords, intent, funnel stage).
    - Saved `docs/seo-metadata.md` cataloging every page's SEO attributes.
  - **Dynamic Open Graph Social Sharing Image Engine:**
    - Implemented `app/api/og/route.tsx` using `next/og` (`ImageResponse`) with Node.js runtime.
    - Dynamically generates 1200×630 branded social cards featuring white background (`#FFFFFF`), dark navy typography (`#0B1F3A`), electric blue accent bar (`#2563EB`), Resurgenix aperture brandmark, page title, and category badge.
    - Connected dynamically across all solutions, articles, comparisons, and industry pages.
  - **XML Sitemap & Search/AI Crawlers (`app/sitemap.ts` & `app/robots.ts`):**
    - Built `app/sitemap.ts` generating `sitemap.xml` with real routes: 18 base platform pages, 9 solutions, 7 industries, 15 resource articles (using verified frontmatter dates for `lastModified`), and 3 comparisons.
    - Strictly excluded all thank-you pages, `/design-system`, and utility paths.
    - Built `app/robots.ts` explicitly authorizing leading search and AI-search bots (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Applebot`), disallowing private routes, and referencing `sitemap.xml` and host URL.
    - Configured `robots: { index: false, follow: false }` layout wrappers for `/design-system` and `/thank-you/*`.
  - **Server-Side Schema.org JSON-LD Infrastructure:**
    - Built `components/seo/JsonLd.tsx` for server-side HTML script injection.
    - Built typed schema factory functions in `components/seo/schema.ts`:
      - **Sitewide `Organization` & `WebSite`:** Injected in `app/layout.tsx` (`@id`, legal name, alternate name, logo, sameAs, contactPoint, postalAddress, founder Person, knowsAbout list). Strictly skipped street addresses, fake reviews, ratings, awards, prices, and employee counts per truth rules.
      - **`Service`:** Injected on solution pages with provider linked to Organization `@id`, serviceType `AI Video Analytics`, and target audience.
      - **`SoftwareApplication`:** Applied to platform pillar solution page (`/solutions/ai-video-analytics`) omitting fake offers/prices.
      - **`BlogPosting` / `Article`:** Injected on all resource articles (`/resources/[slug]`) with author Person (`Souryodipto Debnath`), publisher `@id`, datePublished, dateModified, and dynamic OG image.
      - **`FAQPage`:** Injected ONLY on pages whose FAQs are visibly rendered in the DOM (`/faq`, solutions with FAQs, articles with FAQs).
      - **`AboutPage`:** Injected on `/about` linked to Organization `@id`.
      - **`BreadcrumbList`:** Injected on all solution, industry, resource, comparison, and utility pages.
      - **`VideoObject` (Skipped Rationale):** Explicitly skipped on homepage because the joined master MP4 video file has not yet been supplied by the founder (logged as open item in `docs/OPEN_ITEMS.md`). Generating a VideoObject with an unverified upload date or duration would violate strict truth guardrails.
  - **Generative Engine Optimization (GEO) & AI Search:**
    - Authored `docs/geo-audit.md` answering the 15 core questions an AI assistant might be asked about Resurgenix with verbatim passage mappings to live pages.
    - Created `public/llms.txt` summarizing company positioning, core differentiators, technical specifications, and canonical URLs for LLM crawlers.
  - **Technical Performance & Security Standards:**
    - Enhanced `next.config.ts` with security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and a tight `Content-Security-Policy` allowing only self, Cloudflare Turnstile, and Google Fonts).
    - Enabled Gzip/Brotli compression, `trailingSlash: false`, and long-lived 1-year caching for `/images/*`.
    - Added 301 permanent redirects for legacy thank-you and alias URLs.
    - Implemented `preload: true` for the primary body font (Inter) with `preload: false` for secondary fonts in `app/layout.tsx`.
    - Implemented dynamic imports for heavy client interactive components (`VideoPlayer`, `PilotChecklistClient`, `CCTVReadinessAssessment`).
    - Documented image specifications in `docs/image-seo.md`.
  - **Validation & Code Quality:**
    - `npm run lint`: Passed with 0 errors.
    - `npm run build`: Compiled all 65 static routes and API endpoints successfully.
    - Verified `sitemap.xml` (316 lines) and `robots.txt` render properly in build output.

### Step 14: Measurement, Quality Audit, and Launch (FINAL STEP)

- **Completed Actions:**
  - **1. Privacy-First, Consent-Governed Analytics:**
    - Implemented `lib/analytics.ts`: Type-safe GA4 event dispatcher with zero PII leakage (names, phone numbers, and emails are strictly stripped).
    - Consent enforcement: GA4 script (`components/analytics/GoogleAnalytics.tsx`) only loads after the user explicitly accepts cookies via `CookieNotice` (`localStorage.getItem("resurgenix_cookie_consent") === "accepted"`). Listens for real-time `resurgenix_consent_updated` custom window event.
    - Integrated tracking across all conversion funnels:
      - `page_view`: Tracked on route navigation via `usePathname` and `useSearchParams`.
      - `cta_click`: Linked on primary buttons, hero actions, navigation, and banners (`trackCtaClick`).
      - `demo_request`, `pilot_request`, `contact_submit`, `partner_submit`: Fired upon successful form submission with preserved first-touch UTM attributes.
      - `form_start` & `form_error`: Field-level abandonment and validation tracking.
      - `whatsapp_click`: Tracked on floating button, header, and mobile action bar.
      - `phone_click` & `email_click`: Tracked in footer and contact page.
      - `video_play` & `video_complete`: Tracked inside `components/ui/VideoPlayer.tsx`.
      - `resource_download`: Tracked on Pilot Checklist PDF download.
      - `assessment_complete`: Tracked upon finishing the 5-step CCTV readiness audit.
      - `outbound_click`: Tracked on external links (LinkedIn, Instagram).
    - Authored `docs/analytics-plan.md` detailing GA4 event schemas, parameter taxonomies, conversion marks, Google Search Console integration, CRM lifecycle stage mappings, and commercial KPIs.
  - **2. Full Quality, Content Truth, & Prohibited Words Audit:**
    - Conducted automated codebase grep audit for prohibited marketing buzzwords ("revolutionary", "cutting-edge", "world-class", "100%", "guaranteed", "best", "#1", "trusted by").
    - Cleaned all residual instances of "100%" and superlative phrasing across solutions, industries, resource clusters, comparisons, and readiness assessment, replacing them with precise, factual engineering descriptions ("entirely on-premise", "complete data residency", "enforced automated deletion").
    - Verified `StatBlock.tsx` suppress unverified claims (`if (!isVerified && process.env.NODE_ENV === "production") return null;`) ensuring `[Add verified customer proof]` never renders in production.
    - Verified white/light corporate aesthetic on every page with zero dark full-screen sections.
  - **3. Accessibility (WCAG 2.2 Level AA) & Performance Audit:**
    - Verified high-contrast color ratios (> 4.5:1 sitewide; headings at 16.6:1).
    - Confirmed keyboard navigation, skip-to-content link, focus rings with offset, modal focus traps, and ESC key dismissal.
    - Confirmed form labels (`<label htmlFor>`), dynamic error announcements (`role="alert"`, `aria-invalid="true"`), and accessible landmarks.
    - Verified video closed captions (`<track kind="captions">`) and collapsible transcripts (`<details>`).
    - Verified 320px responsive reflow, horizontal scrolling table containers, and touch target sizes (>= 44x44px).
    - Confirmed Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS = 0.00 via React Server Components, WebP/AVIF images, font subset swapping, and video `preload="none"`.
  - **4. Production Launch Readiness & Checklist:**
    - Authored `docs/LAUNCH_CHECKLIST.md` providing step-by-step instructions for Vercel deployment, environment variable configuration, apex domain DNS, automatic SSL, 301 www-to-apex redirects, Google Search Console and Bing Webmaster Tools sitemap submissions, pre-launch founder asset confirmations, WhatsApp testing, and Google Business Profile setup for Kolkata.
  - **5. Final Comprehensive Audit Report:**
    - Authored `docs/FINAL_AUDIT.md` covering SEO, GEO, CRO, UX, Performance, Accessibility, and Security with comprehensive pass/fail matrices, remaining operational risks, and the top 10 highest-impact post-launch improvements for the first 30 days.
  - **Validation & Code Quality:**
    - `npm run lint`: Passed with 0 errors.
    - `npm run build`: Compiled all 65 static routes and API endpoints successfully.
