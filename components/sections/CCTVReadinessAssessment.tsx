"use client";

import React, { useState } from "react";
import { LinkButton } from "@/components/ui/LinkButton";

interface QuestionOption {
  label: string;
  score: number; // 0 (poor), 1 (acceptable), 2 (ideal)
  note: string;
}

interface Question {
  id: string;
  title: string;
  description: string;
  options: QuestionOption[];
}

const questions: Question[] = [
  {
    id: "cameraType",
    title: "1. Camera Hardware Type",
    description: "What type of surveillance cameras are currently installed at your facility?",
    options: [
      {
        label: "IP Network Cameras (Hikvision, Dahua, CP Plus, Axis, Bosch, etc.)",
        score: 2,
        note: "Ideal: Standard IP cameras support direct RTSP streaming over the local network.",
      },
      {
        label: "Mixed Network: IP cameras in key zones, analog cameras elsewhere",
        score: 1,
        note: "Good: IP camera zones can be upgraded immediately; analog streams evaluated via DVR.",
      },
      {
        label: "Analog Cameras connected to modern DVR / XVR recorders",
        score: 1,
        note: "Feasible: Many modern DVRs/XVRs expose network RTSP streams for analytics.",
      },
      {
        label: "Legacy standalone analog cameras without network connectivity",
        score: 0,
        note: "Requires Upgrade: Will require network video encoders or IP camera additions.",
      },
    ],
  },
  {
    id: "resolution",
    title: "2. Native Video Resolution",
    description: "What is the typical resolution of the cameras in your high-priority zones?",
    options: [
      {
        label: "1080p Full HD (2 Megapixels) or higher (3MP, 4MP, 4K)",
        score: 2,
        note: "Ideal: Provides ample pixel density for spatial detection, facial verification, and ANPR.",
      },
      {
        label: "720p HD (1 Megapixel)",
        score: 1,
        note: "Acceptable: Sufficient for general person/vehicle perimeter detection; limited for distant ANPR.",
      },
      {
        label: "Standard Definition (D1, 4CIF, 480p analog)",
        score: 0,
        note: "Sub-optimal: Lower resolution limits detection range and small-target recognition.",
      },
      {
        label: "Uncertain / Mixed resolutions across buildings",
        score: 1,
        note: "To be verified: Camera resolutions will be cataloged during our technical assessment.",
      },
    ],
  },
  {
    id: "network",
    title: "3. Local Network Topology",
    description: "How are your surveillance cameras connected to your network?",
    options: [
      {
        label: "Dedicated surveillance VLAN or physical security network switches",
        score: 2,
        note: "Ideal: Segregated security network ensures isolated bandwidth and robust cybersecurity.",
      },
      {
        label: "Shared corporate Ethernet network with standard Gigabit switches",
        score: 2,
        note: "Good: Local edge appliances consume zero external WAN bandwidth on the local LAN.",
      },
      {
        label: "Completely air-gapped network with zero external internet access",
        score: 2,
        note: "Supported: Our on-premise edge appliances operate 100% offline in air-gapped environments.",
      },
      {
        label: "Cameras are standalone with local SD cards or isolated NVRs",
        score: 0,
        note: "Requires Cabling: Analytics requires cameras to connect to an Ethernet switch.",
      },
    ],
  },
  {
    id: "illumination",
    title: "4. Lighting & Night-Time Environment",
    description: "What are the optical lighting conditions in your priority surveillance areas?",
    options: [
      {
        label: "Well-lit indoor areas or outdoor zones with active infrared (IR) night vision",
        score: 2,
        note: "Ideal: Clear visual contrast enables 24/7 neural network detection.",
      },
      {
        label: "Moderate ambient lighting with occasional shadows or glare",
        score: 1,
        note: "Good: Camera exposure and WDR settings can be calibrated during pilot setup.",
      },
      {
        label: "Pitch black outdoor areas with zero ambient light and no IR illuminators",
        score: 0,
        note: "Action Needed: Requires adding external IR illuminators or supplemental floodlights.",
      },
    ],
  },
  {
    id: "useCase",
    title: "5. Primary Operational Priority",
    description: "What is the primary operational outcome you want to achieve with AI?",
    options: [
      {
        label: "Perimeter Virtual Fencing & Intrusion Detection (Fences, Gates, Walls)",
        score: 2,
        note: "High Impact: Eliminates nuisance false alarms and detects incursions in real time.",
      },
      {
        label: "Restricted Zone & Safety Monitoring (Hazardous Areas, Server Rooms)",
        score: 2,
        note: "High Impact: Enforces virtual exclusion envelopes and after-hours access rules.",
      },
      {
        label: "Automated Gate ANPR & Logistics Dock Turnaround Tracking",
        score: 2,
        note: "High Impact: Automates vehicle logging and barrier access for commercial traffic.",
      },
      {
        label: "Workforce Attendance & Contactless Floor Intelligence",
        score: 2,
        note: "High Impact: Streamlines shift muster reporting via consent-based verification.",
      },
    ],
  },
];

export function CCTVReadinessAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelect = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 2; // 10
    return { totalScore, maxScore };
  };

  const { totalScore } = calculateResult();
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="space-y-10">
      {!isCompleted ? (
        <div className="space-y-8">
          {questions.map((q, qIdx) => (
            <div
              key={q.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs"
            >
              <div className="mb-4">
                <span className="text-xs font-mono font-bold text-[#2563EB] block mb-1">
                  Question {qIdx + 1} of {questions.length}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A]">{q.title}</h3>
                <p className="text-xs text-[#5B6B7F] mt-1">{q.description}</p>
              </div>

              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.score)}
                      className={`w-full text-left p-4 rounded-xl border transition cursor-pointer select-none ${
                        isSelected
                          ? "bg-blue-50/50 border-[#2563EB] ring-1 ring-[#2563EB]"
                          : "bg-[#F7F9FC] border-[#E2E8F0] hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-4 h-4 rounded-full border mt-0.5 flex-shrink-0 flex items-center justify-center ${
                            isSelected ? "border-[#2563EB] bg-[#2563EB]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-[#0B1F3A] block">
                            {opt.label}
                          </span>
                          <span className="text-[11px] text-[#5B6B7F] block mt-0.5">{opt.note}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setIsCompleted(true)}
              className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-xs transition cursor-pointer"
            >
              Calculate AI Readiness Score &rarr;
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Qualitative Assessment Summary
            </span>

            {totalScore >= 8 ? (
              <div>
                <h3 className="text-2xl font-extrabold text-emerald-800 mb-3 flex items-center gap-2">
                  <span>✓</span> High Technical Readiness for AI Video Analytics
                </h3>
                <p className="text-sm text-[#1F2937] leading-relaxed mb-4">
                  Based on your responses, your facility infrastructure shows <strong>strong technical compatibility</strong> for
                  deploying an AI video intelligence layer. Your IP camera network, 1080p resolution, and network
                  infrastructure can support real-time edge computer vision without replacing your existing camera hardware.
                </p>
                <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-[#5B6B7F] space-y-1">
                  <p>
                    <strong>Recommended Next Step:</strong> Conduct a controlled 14-day on-site pilot on 3 to 5
                    priority streams to validate optical vantage points and tune alert rules.
                  </p>
                </div>
              </div>
            ) : totalScore >= 5 ? (
              <div>
                <h3 className="text-2xl font-extrabold text-blue-800 mb-3 flex items-center gap-2">
                  <span>ℹ️</span> Feasible with Minor Operational Calibration
                </h3>
                <p className="text-sm text-[#1F2937] leading-relaxed mb-4">
                  Your current surveillance infrastructure is <strong>viable for AI analytics</strong>, but certain
                  streams may require minor calibration (such as adjusting night illumination, verifying DVR stream
                  encoding, or tuning camera angles) to achieve maximum detection precision.
                </p>
                <div className="p-4 rounded-xl bg-white border border-blue-200 text-xs text-[#5B6B7F] space-y-1">
                  <p>
                    <strong>Recommended Next Step:</strong> Schedule a stream feasibility audit with our Kolkata
                    engineering team to inspect sample feeds and network switch capacity.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-extrabold text-amber-800 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Infrastructure Requires Hardware / Network Adaptation
                </h3>
                <p className="text-sm text-[#1F2937] leading-relaxed mb-4">
                  Your surveillance infrastructure features legacy analog connections or low optical resolution that
                  will limit direct computer vision performance. However, targeted upgrades—such as adding IP video
                  encoders or installing a small number of dedicated IP lane cameras in priority zones—can unlock AI
                  capabilities without replacing your entire system.
                </p>
                <div className="p-4 rounded-xl bg-white border border-amber-200 text-xs text-[#5B6B7F] space-y-1">
                  <p>
                    <strong>Recommended Next Step:</strong> Consult with our technical team on minimal-cost network
                    encoder adapters and strategic camera placement.
                  </p>
                </div>
              </div>
            )}

            {/* Permanent Indicative Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-[11px] text-[#5B6B7F] italic">
              <strong>Indicative Notice:</strong> This self-assessment provides an indicative technical estimation
              based on typical enterprise parameters. Definite optical compatibility, angle suitability, and network
              headroom are formally verified during our on-site technical engineering assessment.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-extrabold text-white mb-1">
                Confirm Compatibility on Your Active Feeds
              </h4>
              <p className="text-xs text-slate-300">
                Request an on-site or remote engineering assessment of your active camera streams.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <LinkButton href="/request-pilot" variant="primary" size="md">
                Request an Assessment
              </LinkButton>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setIsCompleted(false);
                }}
                className="px-4 py-2 rounded-xl border border-slate-600 text-xs font-semibold text-white hover:bg-slate-800 transition cursor-pointer"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
