"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";

interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

const checklistItems: ChecklistItem[] = [
  // 1. Camera Hardware & Protocols
  {
    id: "cam-1",
    category: "1. Camera Hardware & Protocols",
    title: "Standard RTSP Stream Capability",
    description: "Existing IP cameras or NVRs support standard RTSP streaming (H.264 or H.265 compression).",
  },
  {
    id: "cam-2",
    category: "1. Camera Hardware & Protocols",
    title: "1080p (2 MP) Resolution Baseline",
    description: "Target camera streams support a native resolution of 1920x1080 at 10 to 15 frames per second.",
  },
  {
    id: "cam-3",
    category: "1. Camera Hardware & Protocols",
    title: "Clean Optical Lenses & Enclosures",
    description: "Camera dome or bullet enclosures are physically cleaned of spiderwebs, dust, and watermark streaks.",
  },
  {
    id: "cam-4",
    category: "1. Camera Hardware & Protocols",
    title: "Mounting Angle Under 45°",
    description: "Cameras are positioned with a downward tilt under 45 degrees, avoiding extreme steep bird-eye angles.",
  },

  // 2. Network & Bandwidth
  {
    id: "net-1",
    category: "2. Local Network & Infrastructure",
    title: "Dedicated Surveillance Switch / VLAN",
    description: "Camera feeds run on an isolated security VLAN or dedicated local switch with Gigabit ports.",
  },
  {
    id: "net-2",
    category: "2. Local Network & Infrastructure",
    title: "LAN Bandwidth Headroom (2-4 Mbps/cam)",
    description: "Switch uplinks have sufficient headroom to handle 2 to 4 Mbps per stream without frame drops.",
  },
  {
    id: "net-3",
    category: "2. Local Network & Infrastructure",
    title: "Static or DHCP-Reserved IP Addresses",
    description: "Target cameras have static IP addresses or DHCP reservations to prevent connection drops.",
  },
  {
    id: "net-4",
    category: "2. Local Network & Infrastructure",
    title: "Edge Compute Placement Identified",
    description: "Physical space, power, and a switch port are available in the server room or security control office.",
  },

  // 3. Physical Environment & Lighting
  {
    id: "env-1",
    category: "3. Environment & Optical Illumination",
    title: "Night-Time Infrared or Ambient Light",
    description: "Target boundary zones have active IR illumination or white floodlights ensuring optical contrast.",
  },
  {
    id: "env-2",
    category: "3. Environment & Optical Illumination",
    title: "Backlighting & Glare Shielding",
    description: "Lenses are shielded from direct oncoming vehicle headlights or intense sunrise/sunset reflection.",
  },
  {
    id: "env-3",
    category: "3. Environment & Optical Illumination",
    title: "Vegetation & Foliage Clearance",
    description: "Tree branches and high shrubs near boundary fence lines are trimmed back to prevent physical occlusion.",
  },
  {
    id: "env-4",
    category: "3. Environment & Optical Illumination",
    title: "Weather Sheltering for Outdoor Nodes",
    description: "Cameras hold an IP66/IP67 weather resistance rating for monsoon rain and industrial dust exposure.",
  },

  // 4. Operational Governance & Scope
  {
    id: "ops-1",
    category: "4. Operational Scope & Workflow",
    title: "3 to 5 High-Priority Feeds Selected",
    description: "Specific operational camera locations identified (e.g. 1 gate, 1 perimeter wall, 1 server room).",
  },
  {
    id: "ops-2",
    category: "4. Operational Scope & Workflow",
    title: "Clear Operational Detection Rules Defined",
    description: "Specific trigger conditions defined (e.g. person crossing fence line, vehicle dwell over 15 minutes).",
  },
  {
    id: "ops-3",
    category: "4. Operational Scope & Workflow",
    title: "Control Room Operator Alignment",
    description: "Security shift supervisors briefed on receiving and acknowledging automated visual alerts.",
  },
  {
    id: "ops-4",
    category: "4. Operational Scope & Workflow",
    title: "Data Governance & Notice Compliance",
    description: "Surveillance notice signs in place and corporate data retention policies confirmed under DPDP Act.",
  },
];

export function PilotChecklistClient() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [workEmail, setWorkEmail] = useState<string>("");
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (workEmail.trim().includes("@")) {
      setDownloadSuccess(true);
      // Trigger download
      const link = document.createElement("a");
      link.href = "/docs/ai-cctv-pilot-readiness-checklist.pdf";
      link.download = "ai-cctv-pilot-readiness-checklist.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Group items by category
  const categories = Array.from(new Set(checklistItems.map((item) => item.category)));
  const progressPercent = Math.round((checkedIds.length / checklistItems.length) * 100);

  return (
    <div className="space-y-10">
      {/* Interactive Score Tracker */}
      <div className="p-6 bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
            Readiness Progress
          </span>
          <h2 className="text-lg font-extrabold text-[#0B1F3A]">
            {checkedIds.length} of {checklistItems.length} Checklist Items Verified
          </h2>
          <p className="text-xs text-[#5B6B7F] mt-1">
            Tick the items your facility currently satisfies to evaluate your pilot readiness score.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-28 bg-white border border-[#E2E8F0] rounded-full h-3 overflow-hidden">
            <div
              className="bg-[#2563EB] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-sm font-mono font-bold text-[#0B1F3A]">{progressPercent}%</span>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat} className="border border-[#E2E8F0] rounded-2xl bg-white p-6 shadow-xs">
            <h3 className="text-base font-extrabold text-[#0B1F3A] mb-4 pb-2 border-b border-[#F7F9FC]">
              {cat}
            </h3>
            <div className="space-y-3">
              {checklistItems
                .filter((item) => item.category === cat)
                .map((item) => {
                  const isChecked = checkedIds.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer select-none ${
                        isChecked
                          ? "bg-blue-50/40 border-blue-200"
                          : "bg-white border-[#E2E8F0] hover:bg-[#F7F9FC]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCheck(item.id)}
                        className="mt-1 h-4 w-4 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB]"
                      />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#0B1F3A] block">
                          {item.title}
                        </span>
                        <span className="text-xs text-[#5B6B7F] leading-relaxed block mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </label>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Download Section (Gated with work email, but accessible) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
            Offline PDF Document
          </span>
          <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-2">
            Download the Printable Checklist PDF
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed mb-6">
            Get the full formatted PDF document to share with your facility engineers, IT infrastructure
            teams, and security operations supervisors.
          </p>

          {downloadSuccess ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
              ✓ Thank you! Your PDF download has started. If the download didn&apos;t trigger automatically,{" "}
              <a
                href="/docs/ai-cctv-pilot-readiness-checklist.pdf"
                download
                className="underline font-bold"
              >
                click here to download directly
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleDownloadSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your corporate work email..."
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                className="flex-1 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0B1F3A] placeholder-[#5B6B7F] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs shadow-xs transition whitespace-nowrap cursor-pointer"
              >
                Download PDF Free
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#5B6B7F] mt-3">
            We respect your privacy. No spam. View our{" "}
            <Link href="/privacy-policy" className="underline hover:text-[#2563EB]">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-white mb-1">
            Need an On-Site Engineering Stream Audit?
          </h3>
          <p className="text-xs text-slate-300">
            Our Kolkata engineering team can visit your facility to inspect camera streams and network bandwidth.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <LinkButton href="/request-pilot" variant="primary" size="md">
            Request an On-Site Audit
          </LinkButton>
          <LinkButton
            href="/contact"
            variant="secondary"
            size="md"
            className="text-slate-900 border-slate-300 hover:bg-slate-100"
          >
            Contact Team
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
