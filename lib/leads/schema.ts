import { z } from "zod";

export const OrganizationTypes = [
  "enterprise",
  "manufacturing",
  "logistics",
  "healthcare",
  "education",
  "retail",
  "hospitality",
  "government",
  "defence-security",
  "smart-city",
  "system-integrator",
  "other",
] as const;

export const CameraCountRanges = ["1-10", "11-50", "51-200", "201-500", "500+"] as const;

export const SiteCountRanges = ["1 site", "2-5 sites", "6-20 sites", "20+ sites"] as const;

export const CurrentSetupOptions = [
  "Has existing NVR/DVR",
  "Direct IP cameras without NVR",
  "Mixed analog & IP infrastructure",
  "Not sure / evaluating new installation",
] as const;

export const EvaluationTimelineOptions = [
  "exploring",
  "within-3-months",
  "within-6-months",
  "planned-project",
] as const;

export const DeploymentPreferenceOptions = ["edge", "on-premise", "cloud", "not-sure"] as const;

export const SolutionNeedsList = [
  { id: "ai-video-analytics", label: "Core AI Video Analytics" },
  { id: "ai-attendance-workforce-intelligence", label: "AI Attendance & Workforce Intelligence" },
  {
    id: "restricted-zone-unauthorized-entry-detection",
    label: "Restricted Zone & Unauthorized Entry",
  },
  { id: "enterprise-security", label: "Enterprise Security & Multi-Site" },
  { id: "anpr-vehicle-intelligence", label: "ANPR & Vehicle Intelligence" },
  { id: "centralized-video-intelligence", label: "Centralized Video Management" },
  { id: "smart-city-video-intelligence", label: "Smart City & Traffic Intelligence" },
  { id: "defence-security", label: "Defence & Critical Infrastructure" },
  { id: "border-surveillance", label: "Long-Range Border Surveillance" },
] as const;

// Base attribution schema
const AttributionSchema = z.object({
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
  utm_term: z.string().max(100).optional(),
  utm_content: z.string().max(100).optional(),
  landing_page: z.string().max(500).optional(),
  referrer: z.string().max(500).optional(),
  page_url: z.string().max(500).optional(),
});

// Common security verification fields
const SecurityVerificationSchema = z.object({
  honeypot: z.string().max(0, { message: "Bot submission detected" }).optional().or(z.literal("")),
  renderedAt: z.number().refine((val) => val > 0, { message: "Invalid render timestamp" }),
  turnstileToken: z.string().max(2048).optional(),
});

// 1. Request Demo Schema
export const DemoLeadSchema = z
  .object({
    leadType: z.literal("demo"),
    fullName: z
      .string()
      .trim()
      .min(2, { message: "Please enter your full name (at least 2 characters)" })
      .max(100, { message: "Name is too long (maximum 100 characters)" }),
    workEmail: z
      .string()
      .trim()
      .email({ message: "Please enter a valid business email address" })
      .max(150),
    organization: z
      .string()
      .trim()
      .min(2, { message: "Please enter your organization name" })
      .max(120),
    jobTitle: z.string().trim().min(2, { message: "Please enter your job title" }).max(100),
    phone: z.string().trim().max(25).optional().or(z.literal("")),
    orgType: z.enum(OrganizationTypes, {
      error: "Please select your organization type",
    }),
    cameraCount: z.enum(CameraCountRanges, {
      error: "Please select your approximate camera count",
    }),
    siteCount: z.enum(SiteCountRanges, {
      error: "Please select number of sites",
    }),
    currentSetup: z.enum(CurrentSetupOptions, {
      error: "Please select current CCTV setup",
    }),
    currentSetupBrand: z.string().trim().max(100).optional().or(z.literal("")),
    mainNeeds: z
      .array(z.string())
      .min(1, { message: "Please select at least one solution capability you need" }),
    timeline: z.enum(EvaluationTimelineOptions, {
      error: "Please select your implementation timeline",
    }),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
    consent: z.literal(true, {
      error: "You must accept the privacy policy to submit this request",
    }),
  })
  .merge(AttributionSchema)
  .merge(SecurityVerificationSchema);

export type DemoLeadInput = z.infer<typeof DemoLeadSchema>;

// 2. Request Pilot Schema (Extends Demo with evaluation zones and deployment preference)
export const PilotLeadSchema = z
  .object({
    leadType: z.literal("pilot"),
    fullName: z
      .string()
      .trim()
      .min(2, { message: "Please enter your full name (at least 2 characters)" })
      .max(100),
    workEmail: z
      .string()
      .trim()
      .email({ message: "Please enter a valid business email address" })
      .max(150),
    organization: z
      .string()
      .trim()
      .min(2, { message: "Please enter your organization name" })
      .max(120),
    jobTitle: z.string().trim().min(2, { message: "Please enter your job title" }).max(100),
    phone: z.string().trim().max(25).optional().or(z.literal("")),
    orgType: z.enum(OrganizationTypes, {
      error: "Please select your organization type",
    }),
    cameraCount: z.enum(CameraCountRanges, {
      error: "Please select your approximate camera count",
    }),
    siteCount: z.enum(SiteCountRanges, {
      error: "Please select number of sites",
    }),
    currentSetup: z.enum(CurrentSetupOptions, {
      error: "Please select current CCTV setup",
    }),
    currentSetupBrand: z.string().trim().max(100).optional().or(z.literal("")),
    mainNeeds: z
      .array(z.string())
      .min(1, { message: "Please select at least one solution capability you need" }),
    timeline: z.enum(EvaluationTimelineOptions, {
      error: "Please select your evaluation timeline",
    }),
    evaluationZones: z
      .string()
      .trim()
      .min(5, {
        message:
          "Please describe which physical zones or use cases you would like to evaluate in the pilot",
      })
      .max(1500),
    preferredDeployment: z.enum(DeploymentPreferenceOptions, {
      error: "Please select your preferred deployment architecture",
    }),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
    consent: z.literal(true, {
      error: "You must accept the privacy policy to submit this request",
    }),
  })
  .merge(AttributionSchema)
  .merge(SecurityVerificationSchema);

export type PilotLeadInput = z.infer<typeof PilotLeadSchema>;

// 3. Contact Form Schema
export const ContactLeadSchema = z
  .object({
    leadType: z.literal("contact"),
    fullName: z.string().trim().min(2, { message: "Please enter your name" }).max(100),
    email: z.string().trim().email({ message: "Please enter a valid email address" }).max(150),
    phone: z.string().trim().max(25).optional().or(z.literal("")),
    organization: z.string().trim().max(120).optional().or(z.literal("")),
    inquiryType: z.enum(["general", "sales", "partnership", "technical", "press"], {
      error: "Please select an inquiry type",
    }),
    message: z
      .string()
      .trim()
      .min(10, { message: "Please enter a message with at least 10 characters" })
      .max(2000),
    consent: z.literal(true, {
      error: "You must accept the privacy policy to submit this enquiry",
    }),
  })
  .merge(AttributionSchema)
  .merge(SecurityVerificationSchema);

export type ContactLeadInput = z.infer<typeof ContactLeadSchema>;

// 4. Partner Inquiry Schema
export const PartnerLeadSchema = z
  .object({
    leadType: z.literal("partner"),
    fullName: z.string().trim().min(2, { message: "Please enter your name" }).max(100),
    workEmail: z
      .string()
      .trim()
      .email({ message: "Please enter a valid business email address" })
      .max(150),
    organization: z
      .string()
      .trim()
      .min(2, { message: "Please enter your company / firm name" })
      .max(120),
    jobTitle: z.string().trim().min(2, { message: "Please enter your role or title" }).max(100),
    phone: z
      .string()
      .trim()
      .min(7, { message: "Please enter a valid direct contact number" })
      .max(25),
    partnerType: z.enum(
      ["system-integrator", "channel-partner", "technology-partner", "distributor", "other"],
      {
        error: "Please select your partnership type",
      }
    ),
    coverageRegion: z
      .string()
      .trim()
      .min(2, {
        message: "Please specify your geographic coverage area (e.g., Eastern India, Pan-India)",
      })
      .max(150),
    annualCameraInstallBase: z.string().trim().max(100).optional().or(z.literal("")),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
    consent: z.literal(true, {
      error: "You must accept the privacy policy to submit this partnership inquiry",
    }),
  })
  .merge(AttributionSchema)
  .merge(SecurityVerificationSchema);

export type PartnerLeadInput = z.infer<typeof PartnerLeadSchema>;

// Discriminated union for API verification
export const AnyLeadSchema = z.discriminatedUnion("leadType", [
  DemoLeadSchema,
  PilotLeadSchema,
  ContactLeadSchema,
  PartnerLeadSchema,
]);

export type AnyLeadInput = z.infer<typeof AnyLeadSchema>;
