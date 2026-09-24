"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ContactLeadSchema, ContactLeadInput } from "@/lib/leads/schema";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact-form");
    if (el) el.dataset.renderedAt = String(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactLeadInput>({
    resolver: zodResolver(ContactLeadSchema),
    defaultValues: {
      leadType: "contact",
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      inquiryType: "general",
      message: "",
      consent: true,
      honeypot: "",
      renderedAt: 0,
    },
  });

  const handleStartInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_start", { formId: "contact-form", formType: "contact" });
    }
  };

  const onSubmit = async (data: ContactLeadInput) => {
    setServerError(null);
    trackEvent("form_submit", { formId: "contact-form", formType: "contact" });

    const el = document.getElementById("contact-form");
    const renderedAt = el?.dataset.renderedAt ? parseInt(el.dataset.renderedAt, 10) : 0;

    const attribution = getAttributionData();
    const payload: ContactLeadInput = {
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

      router.push("/thank-you/contact");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(msg);
      trackEvent("form_error", { formId: "contact-form", errorMessage: msg });
    }
  };

  return (
    <form
      id="contact-form"
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

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="c-fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="c-fullName"
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
            htmlFor="c-email"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Organization (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="c-phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Phone Number{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("phone")}
          />
        </div>

        <div>
          <label
            htmlFor="c-organization"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Organization{" "}
            <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="c-organization"
            type="text"
            autoComplete="organization"
            placeholder="Company or institution"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            {...register("organization")}
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label
          htmlFor="c-inquiryType"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="c-inquiryType"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          {...register("inquiryType")}
        >
          <option value="general">General Inquiry</option>
          <option value="sales">Sales &amp; Enterprise Solutions</option>
          <option value="partnership">System Integrator / Partner Query</option>
          <option value="technical">Technical Architecture &amp; RTSP Support</option>
          <option value="press">Media &amp; Public Relations</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="c-message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="c-message"
          rows={4}
          placeholder="How can our engineering or solutions team help you?"
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-slate-300 focus:ring-blue-600 focus:border-transparent"
          }`}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.message.message}</p>
        )}
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
            . We respect your confidentiality.
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
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
