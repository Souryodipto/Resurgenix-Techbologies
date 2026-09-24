"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { trackEvent, AnalyticsEventType } from "@/lib/analytics";
import { siteConfig } from "@/content/site.config";

interface NextStepItem {
  number: string;
  title: string;
  description: string;
}

interface ThankYouProps {
  type: "demo" | "pilot" | "contact" | "partner";
  title: string;
  subtitle: string;
  nextSteps: NextStepItem[];
  conversionEvent: AnalyticsEventType;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function ThankYouTemplate({
  type,
  title,
  subtitle,
  nextSteps,
  conversionEvent,
  primaryAction,
  secondaryAction,
}: ThankYouProps) {
  useEffect(() => {
    trackEvent(conversionEvent, { leadType: type });
  }, [conversionEvent, type]);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Main Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 sm:p-12 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            ✓
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            Request Received
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            {title}
          </h1>

          <p className="text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* Structured Next Steps */}
          <div className="text-left bg-slate-50/70 border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
              What Happens Next
            </h2>

            <div className="space-y-6">
              {nextSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900 mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Direct Channels */}
          <div className="border-t border-slate-100 pt-6 mb-8 text-xs text-slate-500">
            <p className="mb-2">Need an urgent response or immediate technical consultation?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5"
              >
                <span>💬 WhatsApp Quick Chat</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {siteConfig.contact.email}
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-slate-700 hover:text-slate-900 font-semibold"
              >
                {siteConfig.contact.displayPhone}
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryAction.href}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-sm font-semibold rounded-lg transition-colors"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
