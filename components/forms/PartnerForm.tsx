"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { PartnerLeadSchema, PartnerLeadInput } from "@/lib/leads/schema";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

export function PartnerForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("partner-form");
    if (el) el.dataset.renderedAt = String(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PartnerLeadInput>({
    resolver: zodResolver(PartnerLeadSchema),
    defaultValues: {
      leadType: "partner",
      fullName: "",
      workEmail: "",
      organization: "",
      jobTitle: "",
      phone: "",
      partnerType: "system-integrator",
      coverageRegion: "Eastern India (West Bengal, Odisha, Jharkhand)",
      annualCameraInstallBase: "500-2000 cameras",
      message: "",
      consent: true,
      honeypot: "",
      renderedAt: 0,
    },
  });

  const handleStartInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_start", { formId: "partner-form", formType: "partner" });
    }
  };

  const onSubmit = async (data: PartnerLeadInput) => {
    setServerError(null);
    trackEvent("form_submit", { formId: "partner-form", formType: "partner" });

    const el = document.getElementById("partner-form");
    const renderedAt = el?.dataset.renderedAt ? parseInt(el.dataset.renderedAt, 10) : 0;

    const attribution = getAttributionData();
    const payload: PartnerLeadInput = {
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

      router.push("/thank-you/partner");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(msg);
      trackEvent("form_error", { formId: "partner-form", errorMessage: msg });
    }
  };

  return (
    <form
      id="partner-form"
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleStartInteraction}
      noValidate
      className="space-y-5 bg-white p-6 sm:p-8 border border-slate-200 rounded-2xl shadow-xs"
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
            htmlFor="pt-fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-fullName"
            type="text"
            autoComplete="name"
            placeholder="Your name"
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
            htmlFor="pt-workEmail"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-workEmail"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
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
            htmlFor="pt-organization"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Company / Firm Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-organization"
            type="text"
            autoComplete="organization"
            placeholder="System integration or technology firm"
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
            htmlFor="pt-jobTitle"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Role / Designation <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="e.g., Managing Director, Presales Lead"
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

      {/* Row 3: Phone & Partner Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="pt-phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Direct Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="pt-partnerType"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Partnership Model <span className="text-red-500">*</span>
          </label>
          <select
            id="pt-partnerType"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("partnerType")}
          >
            <option value="system-integrator">Security System Integrator (SI)</option>
            <option value="channel-partner">Value-Added Channel Reseller</option>
            <option value="technology-partner">VMS / Hardware Technology Partner</option>
            <option value="distributor">Regional Distributor</option>
            <option value="other">Other Commercial Alliance</option>
          </select>
        </div>
      </div>

      {/* Row 4: Coverage Region & Annual Camera Install Base */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="pt-coverageRegion"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Geographic Coverage <span className="text-red-500">*</span>
          </label>
          <input
            id="pt-coverageRegion"
            type="text"
            placeholder="e.g., West Bengal & Eastern India"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.coverageRegion
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.coverageRegion ? "true" : "false"}
            {...register("coverageRegion")}
          />
          {errors.coverageRegion && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.coverageRegion.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="pt-annualCameraInstallBase"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Annual Camera Install Base{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(approx)</span>
          </label>
          <select
            id="pt-annualCameraInstallBase"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("annualCameraInstallBase")}
          >
            <option value="under-500">Under 500 cameras / year</option>
            <option value="500-2000">500 – 2,000 cameras / year</option>
            <option value="2000-5000">2,000 – 5,000 cameras / year</option>
            <option value="5000+">5,000+ cameras / year</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="pt-message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Upcoming Tender or Client Opportunity{" "}
          <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="pt-message"
          rows={3}
          placeholder="Briefly describe any active enterprise tender or upcoming client installation where you need an indigenous AI video analytics layer..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          {...register("message")}
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
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
            . We treat all commercial partnerships confidentially.
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
            Submitting Partner Application...
          </>
        ) : (
          "Apply to Partner Program"
        )}
      </button>
    </form>
  );
}
