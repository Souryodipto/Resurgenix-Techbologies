"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  PilotLeadSchema,
  PilotLeadInput,
  OrganizationTypes,
  CameraCountRanges,
  SiteCountRanges,
  CurrentSetupOptions,
  EvaluationTimelineOptions,
  DeploymentPreferenceOptions,
  SolutionNeedsList,
} from "@/lib/leads/schema";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

export function PilotForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("pilot-form");
    if (el) el.dataset.renderedAt = String(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PilotLeadInput>({
    resolver: zodResolver(PilotLeadSchema),
    defaultValues: {
      leadType: "pilot",
      fullName: "",
      workEmail: "",
      organization: "",
      jobTitle: "",
      phone: "",
      orgType: "manufacturing",
      cameraCount: "11-50",
      siteCount: "1 site",
      currentSetup: "Has existing NVR/DVR",
      currentSetupBrand: "",
      mainNeeds: ["restricted-zone-unauthorized-entry-detection"],
      timeline: "within-3-months",
      evaluationZones: "",
      preferredDeployment: "edge",
      message: "",
      consent: true,
      honeypot: "",
      renderedAt: 0,
    },
  });

  const selectedNeeds = watch("mainNeeds") || [];

  const handleStartInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_start", { formId: "request-pilot-form", formType: "pilot" });
    }
  };

  const toggleSolutionNeed = (id: string) => {
    handleStartInteraction();
    if (selectedNeeds.includes(id)) {
      if (selectedNeeds.length > 1) {
        setValue(
          "mainNeeds",
          selectedNeeds.filter((item) => item !== id),
          { shouldValidate: true }
        );
      }
    } else {
      setValue("mainNeeds", [...selectedNeeds, id], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: PilotLeadInput) => {
    setServerError(null);

    const el = document.getElementById("pilot-form");
    const renderedAt = el?.dataset.renderedAt ? parseInt(el.dataset.renderedAt, 10) : 0;

    const attribution = getAttributionData();
    const payload: PilotLeadInput = {
      ...data,
      ...attribution,
      renderedAt: renderedAt || 1,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      trackEvent("pilot_request", {
        organizationType: data.orgType,
        cameraCount: data.cameraCount,
        architecture: data.preferredDeployment,
      });

      router.push("/thank-you/pilot");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(msg);
      trackEvent("form_error", { formId: "request-pilot-form", errorMessage: msg });
    }
  };

  return (
    <form
      id="pilot-form"
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleStartInteraction}
      noValidate
      className="space-y-6 bg-white p-6 sm:p-8 border border-slate-200 rounded-2xl shadow-xs"
    >
      {/* Honeypot hidden bot field */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-lg"
        >
          <strong>Unable to submit:</strong> {serverError}
        </div>
      )}

      {/* Row 1: Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="p-fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g., Anirban Mukherjee"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p-workEmail"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="p-workEmail"
            type="email"
            autoComplete="email"
            placeholder="anirban@plant.in"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.workEmail
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.workEmail ? "true" : "false"}
            {...register("workEmail")}
          />
          {errors.workEmail && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Organization & Job Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-organization"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Organization <span className="text-red-500">*</span>
          </label>
          <input
            id="p-organization"
            type="text"
            autoComplete="organization"
            placeholder="Manufacturing plant or facility name"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.organization
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.organization ? "true" : "false"}
            {...register("organization")}
          />
          {errors.organization && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.organization.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p-jobTitle"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            id="p-jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="e.g., Plant Head / Safety Director"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.jobTitle
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.jobTitle ? "true" : "false"}
            {...register("jobTitle")}
          />
          {errors.jobTitle && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.jobTitle.message}</p>
          )}
        </div>
      </div>

      {/* Row 3: Phone (Optional) & Organization Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Direct Phone{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="p-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("phone")}
          />
        </div>

        <div>
          <label
            htmlFor="p-orgType"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Organization Sector <span className="text-red-500">*</span>
          </label>
          <select
            id="p-orgType"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("orgType")}
          >
            {OrganizationTypes.map((type) => (
              <option key={type} value={type}>
                {type
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Camera Count & Site Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-cameraCount"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Approximate Camera Count <span className="text-red-500">*</span>
          </label>
          <select
            id="p-cameraCount"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("cameraCount")}
          >
            {CameraCountRanges.map((range) => (
              <option key={range} value={range}>
                {range} cameras
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="p-siteCount"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Number of Sites <span className="text-red-500">*</span>
          </label>
          <select
            id="p-siteCount"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("siteCount")}
          >
            {SiteCountRanges.map((sites) => (
              <option key={sites} value={sites}>
                {sites}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Current CCTV Setup & Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-currentSetup"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Current CCTV Infrastructure <span className="text-red-500">*</span>
          </label>
          <select
            id="p-currentSetup"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("currentSetup")}
          >
            {CurrentSetupOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="p-currentSetupBrand"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Camera / NVR Brand{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(if known)</span>
          </label>
          <input
            id="p-currentSetupBrand"
            type="text"
            placeholder="e.g., Hikvision, CP Plus, Dahua, Axis"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("currentSetupBrand")}
          />
        </div>
      </div>

      {/* Row 6: Main Need (Multi-Select Checkboxes) */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Capabilities for Pilot Evaluation <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {SolutionNeedsList.map((item) => {
            const isChecked = selectedNeeds.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => toggleSolutionNeed(item.id)}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? "bg-blue-50 border-blue-300 text-blue-900 font-medium"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="leading-tight">{item.label}</span>
              </label>
            );
          })}
        </div>
        {errors.mainNeeds && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.mainNeeds.message}</p>
        )}
      </div>

      {/* Pilot-Specific Field 1: Evaluation Zones */}
      <div>
        <label
          htmlFor="p-evaluationZones"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Designated Zones or Scenarios to Evaluate <span className="text-red-500">*</span>
        </label>
        <textarea
          id="p-evaluationZones"
          rows={3}
          placeholder="e.g., Plant perimeter fence line (2 cameras), Stamping machine bay safety zone (2 cameras), Main truck gate ANPR (1 camera)..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.evaluationZones
              ? "border-red-500 focus:ring-red-500"
              : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
          }`}
          aria-invalid={errors.evaluationZones ? "true" : "false"}
          {...register("evaluationZones")}
        />
        {errors.evaluationZones && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.evaluationZones.message}</p>
        )}
      </div>

      {/* Pilot-Specific Field 2: Preferred Deployment & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="p-preferredDeployment"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Preferred Deployment Architecture <span className="text-red-500">*</span>
          </label>
          <select
            id="p-preferredDeployment"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("preferredDeployment")}
          >
            {DeploymentPreferenceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt === "edge"
                  ? "Local Edge Appliance (On-site)"
                  : opt === "on-premise"
                    ? "On-Premise Server (Internal Data Center)"
                    : opt === "cloud"
                      ? "Private Cloud / Hybrid"
                      : "Not sure / Recommendation needed"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="p-timeline"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Pilot Timeline <span className="text-red-500">*</span>
          </label>
          <select
            id="p-timeline"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("timeline")}
          >
            {EvaluationTimelineOptions.map((tl) => (
              <option key={tl} value={tl}>
                {tl === "exploring"
                  ? "Exploring options / Planning"
                  : tl === "within-3-months"
                    ? "Within 3 months"
                    : tl === "within-6-months"
                      ? "Within 6 months"
                      : "Immediate / Active initiative"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional Message */}
      <div>
        <label
          htmlFor="p-message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Special Environmental or Hardware Constraints{" "}
          <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="p-message"
          rows={2}
          placeholder="e.g., Air-gapped network, industrial dust, low light conditions..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          {...register("message")}
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            {...register("consent")}
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I agree to the processing of this information in accordance with Resurgenix&apos;s{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
              Privacy Policy
            </Link>
            . We respect your confidentiality and never share contact details.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.consent.message}</p>
        )}
      </div>

      {/* Pricing Notice */}
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 text-center">
        Contact us for enterprise pricing.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting Pilot Request...
          </>
        ) : (
          "Submit Pilot Evaluation Request"
        )}
      </button>
    </form>
  );
}
