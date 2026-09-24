"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DemoLeadSchema,
  DemoLeadInput,
  OrganizationTypes,
  CameraCountRanges,
  SiteCountRanges,
  CurrentSetupOptions,
  EvaluationTimelineOptions,
  SolutionNeedsList,
} from "@/lib/leads/schema";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

export function DemoForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("demo-form");
    if (el) el.dataset.renderedAt = String(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DemoLeadInput>({
    resolver: zodResolver(DemoLeadSchema),
    defaultValues: {
      leadType: "demo",
      fullName: "",
      workEmail: "",
      organization: "",
      jobTitle: "",
      phone: "",
      orgType: "enterprise",
      cameraCount: "11-50",
      siteCount: "1 site",
      currentSetup: "Has existing NVR/DVR",
      currentSetupBrand: "",
      mainNeeds: ["ai-video-analytics"],
      timeline: "within-3-months",
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
      trackEvent("form_start", { formId: "request-demo-form", formType: "demo" });
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

  const onSubmit = async (data: DemoLeadInput) => {
    setServerError(null);

    const el = document.getElementById("demo-form");
    const renderedAt = el?.dataset.renderedAt ? parseInt(el.dataset.renderedAt, 10) : 0;

    // Inject attribution parameters and render timestamp
    const attribution = getAttributionData();
    const payload: DemoLeadInput = {
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

      trackEvent("demo_request", {
        organizationType: data.orgType,
        cameraCount: data.cameraCount,
      });

      router.push("/thank-you/demo");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(msg);
      trackEvent("form_error", { formId: "request-demo-form", errorMessage: msg });
    }
  };

  return (
    <form
      id="demo-form"
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
            htmlFor="fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g., Rajesh Sharma"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="workEmail"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="workEmail"
            type="email"
            autoComplete="email"
            placeholder="rajesh@organization.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.workEmail
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.workEmail ? "true" : "false"}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            {...register("workEmail")}
          />
          {errors.workEmail && (
            <p id="workEmail-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.workEmail.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Organization & Job Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Organization <span className="text-red-500">*</span>
          </label>
          <input
            id="organization"
            type="text"
            autoComplete="organization"
            placeholder="Company or facility name"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.organization
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.organization ? "true" : "false"}
            aria-describedby={errors.organization ? "organization-error" : undefined}
            {...register("organization")}
          />
          {errors.organization && (
            <p id="organization-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.organization.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="jobTitle"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            id="jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="e.g., Head of Physical Security"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.jobTitle
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.jobTitle ? "true" : "false"}
            aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
            {...register("jobTitle")}
          />
          {errors.jobTitle && (
            <p id="jobTitle-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.jobTitle.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Phone (Optional) & Organization Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Direct Phone{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("phone")}
          />
        </div>

        <div>
          <label
            htmlFor="orgType"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Organization Sector <span className="text-red-500">*</span>
          </label>
          <select
            id="orgType"
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
            htmlFor="cameraCount"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Approximate Camera Count <span className="text-red-500">*</span>
          </label>
          <select
            id="cameraCount"
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
            htmlFor="siteCount"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Number of Sites <span className="text-red-500">*</span>
          </label>
          <select
            id="siteCount"
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
            htmlFor="currentSetup"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Current CCTV Infrastructure <span className="text-red-500">*</span>
          </label>
          <select
            id="currentSetup"
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
            htmlFor="currentSetupBrand"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Camera / NVR Brand{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(if known)</span>
          </label>
          <input
            id="currentSetupBrand"
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
          Primary Capabilities Needed <span className="text-red-500">*</span>
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
                  onChange={() => {}} // Handled by label click
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

      {/* Row 7: Timeline */}
      <div>
        <label
          htmlFor="timeline"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Implementation Timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          {...register("timeline")}
        >
          {EvaluationTimelineOptions.map((tl) => (
            <option key={tl} value={tl}>
              {tl === "exploring"
                ? "Exploring capabilities / Early stage"
                : tl === "within-3-months"
                  ? "Active evaluation (within 3 months)"
                  : tl === "within-6-months"
                    ? "Planned project (within 6 months)"
                    : "Approved initiative / Ready to pilot"}
            </option>
          ))}
        </select>
      </div>

      {/* Row 8: Optional Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Additional Context or Specific Objectives{" "}
          <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Describe your facility layout, specific perimeter concerns, or integration objectives..."
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
            Submitting Demo Request...
          </>
        ) : (
          "Request Enterprise Demonstration"
        )}
      </button>
    </form>
  );
}
