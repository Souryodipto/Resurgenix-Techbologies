# Resurgenix Technologies — Enterprise Corporate Website

Official corporate web platform for **Resurgenix Technologies Pvt. Ltd.** (brand: **Resurgenix**).

> **Positioning:** An AI-powered video intelligence company building the intelligence layer for existing surveillance infrastructure.  
> _"Your cameras already see. Resurgenix helps them understand."_

---

## 1. Project Overview & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (Strict White Theme: white/slate-50 backgrounds, deep navy/charcoal typography, electric blue primary actions, subtle cyan accents)
- **Rendering Model:** Static Site Generation (SSG) by default for optimal SEO, Core Web Vitals, and crawlability
- **Code Quality:** ESLint 9 (Flat config) + Prettier

---

## 2. Directory Structure

```text
├── app/                  # Next.js App Router pages, layouts, and route handlers
├── components/           # Modular component library
│   ├── ui/               # Reusable UI primitives (StatusBadge, Buttons, etc.)
│   ├── layout/           # Header, Footer, Navigation, WhatsApp floating button
│   ├── sections/         # Page sections (Hero, ProblemSolution, Capabilities, etc.)
│   ├── forms/            # Demo, Pilot, and Lead qualification forms
│   └── seo/              # JSON-LD Schema generators, OpenGraph, Canonical tags
├── content/              # Single source of truth content configs
│   ├── site.config.ts    # Company constants, contact numbers, social URLs, site URL
│   └── capabilities.ts   # Platform capabilities & life-cycle status definitions
├── docs/                 # Project documentation & governance
│   ├── PROJECT_BRIEF.md  # Verbatim project brief and truth guardrails
│   ├── OPEN_ITEMS.md     # Assumptions and items awaiting founder confirmation
│   └── PROGRESS.md       # 14-step implementation progress log
├── lib/                  # Shared utilities and helpers
├── public/               # Static assets
│   ├── images/           # Curated diagrams, product UI mockups, icons
│   ├── video/            # Product video assets
│   └── docs/             # Public downloadable whitepapers / briefs
├── .env.example          # Environment variable template
└── README.md             # Project documentation (this file)
```

---

## 3. Environment Variables

Create a `.env.local` file by copying the example template:

```bash
cp .env.example .env.local
```

| Variable                        | Description                           | Default / Example                          |
| ------------------------------- | ------------------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`          | Base public canonical URL             | `https://resurgenixtechnologies.com`       |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics ID          | `G-XXXXXXXXXX`                             |
| `LEAD_DISPATCH_SERVICE_URL`     | Optional external FastAPI/CRM webhook | None (uses internal Next.js route handler) |

---

## 4. Development & Build Commands

### Install Dependencies

```bash
npm install
```

### Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Build

```bash
npm run build
```

### Run Production Server

```bash
npm run start
```

### Linting & Formatting

```bash
# Check code style with ESLint
npm run lint

# Format code with Prettier
npm run format

# Verify formatting without modifying files
npm run format:check
```

---

## 5. Guardrails & Content Governance

1. **White Theme Mandatory:** Deep navy/charcoal text, white/light-grey backgrounds, electric blue CTA, subtle cyan accents. No dark-mode default, no black hero, no neon.
2. **Truth Rules:** Never fabricate customers, logos, metrics, certifications, or partnerships. Proof items must be logged in `docs/OPEN_ITEMS.md` and approved by the founder before public display.
3. **Capability Life-Cycle:** Every capability is tagged with a status (`pilot`, `in-development`, or `roadmap`) defined in `/content/capabilities.ts` and displays a visible badge on the website.
4. **Existing CCTV Compatibility:** State clearly that Resurgenix integrates with existing compatible IP/RTSP cameras; never claim universal compatibility.
