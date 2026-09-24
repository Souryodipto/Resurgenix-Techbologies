"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Card } from "@/components/ui/Card";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IconBox } from "@/components/ui/IconBox";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { Table } from "@/components/ui/Table";
import { StatBlock } from "@/components/ui/StatBlock";
import { StepFlow } from "@/components/ui/StepFlow";
import { Callout } from "@/components/ui/Callout";
import { Modal } from "@/components/ui/Modal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FormField, Input, Select, Textarea, Checkbox } from "@/components/ui/FormField";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { IllustrativeDashboard } from "@/components/ui/IllustrativeDashboard";

export default function DesignSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleTableColumns = [
    { header: "Capability", accessorKey: "name" as const },
    { header: "Deployment", accessorKey: "deployment" as const },
    { header: "Status", accessorKey: "status" as const },
  ];

  const sampleTableData = [
    { name: "AI Video Analytics", deployment: "On-Premise / Edge", status: "Pilot Available" },
    {
      name: "Restricted Zone Alerting",
      deployment: "Local Edge Server",
      status: "Pilot Available",
    },
    { name: "ANPR Plate Recognition", deployment: "Edge Inference", status: "In Development" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1F2937] py-12">
      <Container size="lg">
        {/* Header Notice */}
        <div className="mb-10 pb-6 border-b border-[#E2E8F0]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold mb-3">
            <span>DEV ONLY &bull; NOINDEX</span>
          </div>
          <h1 className="text-fluid-h1 font-bold text-[#0B1F3A]">
            Design System &amp; Component Kit
          </h1>
          <p className="mt-3 text-base text-[#5B6B7F] prose-optimal">
            Resurgenix enterprise white theme design tokens, typography scale, accessible
            interactive components, and brand graphics.
          </p>
        </div>

        {/* 1. Design Tokens Table */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">1. Design Tokens</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-[12px] border border-[#E2E8F0] bg-white">
              <div className="h-8 w-full bg-white border border-[#E2E8F0] rounded mb-2" />
              <div className="font-bold text-[#0B1F3A]">Background White</div>
              <div className="text-[#5B6B7F]">#FFFFFF</div>
            </div>
            <div className="p-4 rounded-[12px] border border-[#E2E8F0] bg-white">
              <div className="h-8 w-full bg-[#F7F9FC] border border-[#E2E8F0] rounded mb-2" />
              <div className="font-bold text-[#0B1F3A]">Background Soft</div>
              <div className="text-[#5B6B7F]">#F7F9FC</div>
            </div>
            <div className="p-4 rounded-[12px] border border-[#E2E8F0] bg-white">
              <div className="h-8 w-full bg-[#0B1F3A] rounded mb-2" />
              <div className="font-bold text-[#0B1F3A]">Text Navy</div>
              <div className="text-[#5B6B7F]">#0B1F3A</div>
            </div>
            <div className="p-4 rounded-[12px] border border-[#E2E8F0] bg-white">
              <div className="h-8 w-full bg-[#2563EB] rounded mb-2" />
              <div className="font-bold text-[#0B1F3A]">Primary Blue</div>
              <div className="text-[#5B6B7F]">#2563EB</div>
            </div>
          </div>
        </section>

        {/* 2. Buttons & LinkButtons */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">2. Buttons &amp; Actions</h2>
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-[12px] border border-[#E2E8F0] bg-[#F7F9FC]">
            <Button variant="primary" size="md">
              Primary Action
            </Button>
            <Button variant="secondary" size="md">
              Secondary Action
            </Button>
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <Button variant="whatsapp" size="md">
              WhatsApp us
            </Button>
            <Button variant="primary" size="md" isLoading>
              Loading State
            </Button>
            <LinkButton href="/request-demo" variant="primary" size="md">
              LinkButton Demo
            </LinkButton>
          </div>
        </section>

        {/* 3. Badges & Status Badges */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            3. Status &amp; General Badges
          </h2>
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-[12px] border border-[#E2E8F0] bg-white">
            <StatusBadge status="pilot" />
            <StatusBadge status="in-development" />
            <StatusBadge status="roadmap" />
            <Badge variant="blue" showDot>
              Feature Highlight
            </Badge>
            <Badge variant="cyan" showDot>
              Active Detection
            </Badge>
            <Badge variant="neutral">Generic Chip</Badge>
          </div>
        </section>

        {/* 4. Breadcrumbs */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">4. Breadcrumbs</h2>
          <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white">
            <Breadcrumbs
              items={[{ label: "Solutions", href: "/solutions" }, { label: "AI Video Analytics" }]}
            />
          </div>
        </section>

        {/* 5. Cards & FeatureCards */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">5. Cards &amp; IconBox</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Restricted Zone Detection"
              description="Virtual spatial boundaries that detect unauthorized entry into sensitive rooms in sub-second latency."
              icon="🛡️"
              iconVariant="blue"
              badge={<StatusBadge status="pilot" size="sm" />}
              href="/solutions/restricted-zone-unauthorized-entry-detection"
            />
            <FeatureCard
              title="ANPR &amp; Vehicle Logs"
              description="Deep learning OCR for standard Indian license plate formats and automated gate barrier triggers."
              icon="🚗"
              iconVariant="cyan"
              badge={<StatusBadge status="in-development" size="sm" />}
              href="/solutions/anpr-vehicle-intelligence"
            />
            <Card variant="soft">
              <h3 className="font-bold text-[#0B1F3A] mb-2">Standard Soft Card</h3>
              <p className="text-xs text-[#5B6B7F]">
                12px border radius, subtle border, and clean typography container.
              </p>
            </Card>
          </div>
        </section>

        {/* 6. Accordion & Tabs */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            6. Interactive Tabs &amp; Accordion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white">
              <h3 className="font-bold text-sm text-[#0B1F3A] mb-4">Interactive Tabs</h3>
              <Tabs
                tabs={[
                  {
                    id: "edge",
                    label: "Edge Architecture",
                    content: (
                      <p className="text-xs text-[#5B6B7F]">
                        Processes video feeds on localized GPU appliances without cloud dependence.
                      </p>
                    ),
                  },
                  {
                    id: "cloud",
                    label: "Central Console",
                    content: (
                      <p className="text-xs text-[#5B6B7F]">
                        Aggregates metadata alerts across multiple buildings into a single web view.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white">
              <h3 className="font-bold text-sm text-[#0B1F3A] mb-4">Accessible Accordion</h3>
              <Accordion
                items={[
                  {
                    question: "Do existing cameras need to be replaced?",
                    answer:
                      "No. The system connects directly to standard RTSP/ONVIF streams from existing IP cameras.",
                  },
                  {
                    question: "Can it operate offline in air-gapped facilities?",
                    answer:
                      "Yes. All computer vision models can run locally on an on-premise edge server.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* 7. Tables & StatBlocks */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            7. Table &amp; Truth StatBlock
          </h2>
          <div className="space-y-6">
            <Table columns={sampleTableColumns} data={sampleTableData} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatBlock
                value="< 1000ms"
                label="Alert Latency"
                supportingText="Localized edge inference notification speed on compatible RTSP feeds."
                citationSource="Internal Benchmarking"
              />
              <StatBlock
                value="7"
                label="Transformation Stages"
                supportingText="See > Understand > Detect > Analyze > Alert > Record > Respond."
              />
              <StatBlock value="" label="Enterprise Customer Metrics" isVerified={false} />
            </div>
          </div>
        </section>

        {/* 8. StepFlow & Callouts */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            8. StepFlow &amp; Callouts
          </h2>
          <StepFlow
            steps={[
              {
                number: "01",
                title: "Stream Audit",
                description: "Verify existing camera RTSP streams and resolution.",
              },
              {
                number: "02",
                title: "Edge Setup",
                description: "Deploy localized compute appliance on facility network.",
              },
              {
                number: "03",
                title: "Zone Mapping",
                description: "Define virtual boundary polygons and intrusion rules.",
              },
              {
                number: "04",
                title: "Active Alerts",
                description: "Receive real-time push alerts on security workstations.",
              },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Callout type="Note" title="Technical Compatibility">
              Compatible with standard H.264/H.265 RTSP streams across major brands.
            </Callout>
            <Callout type="Assumption" title="Assumed Parameter">
              Default pilot duration is estimated at 14–30 days pending founder confirmation.
            </Callout>
            <Callout type="Compliance" title="DPDP Alignment">
              Workforce verification operates on an explicit consent-first model.
            </Callout>
          </div>
        </section>

        {/* 9. Modal Dialog Trigger */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">9. Modal Dialog</h2>
          <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white">
            <Button onClick={() => setIsModalOpen(true)}>Open Sample Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Camera Compatibility Assessment"
            >
              <p className="text-xs text-[#5B6B7F] mb-4">
                This modal component features automatic focus trapping, Escape key listener, and
                focus restoration to the trigger button upon closing.
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
                <Button size="sm" onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
              </div>
            </Modal>
          </div>
        </section>

        {/* 10. FormField Suite */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">10. Form Field Suite</h2>
          <div className="max-w-xl p-6 rounded-[12px] border border-[#E2E8F0] bg-white space-y-4">
            <FormField
              id="demo-name"
              label="Full Name"
              required
              hint="Enter your corporate identity"
            >
              {(fieldProps) => <Input {...fieldProps} placeholder="Vikram Sharma" />}
            </FormField>

            <FormField id="demo-industry" label="Industry Sector" required>
              {(fieldProps) => (
                <Select {...fieldProps}>
                  <option value="mfg">Manufacturing &amp; Industrial</option>
                  <option value="corp">Corporate &amp; Enterprise</option>
                  <option value="health">Healthcare &amp; Hospitals</option>
                </Select>
              )}
            </FormField>

            <FormField
              id="demo-notes"
              label="Operational Problem"
              error="Please enter at least 10 characters"
            >
              {(fieldProps) => (
                <Textarea
                  {...fieldProps}
                  placeholder="Describe the security challenge..."
                  rows={2}
                />
              )}
            </FormField>

            <Checkbox
              id="demo-consent"
              label="I agree to receive communications regarding technical assessments."
            />
          </div>
        </section>

        {/* 11. IconBox & VideoPlayer */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            11. IconBox &amp; Video Player
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white space-y-4">
              <h3 className="text-sm font-bold text-[#0B1F3A]">IconBox Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <IconBox variant="blue" size="md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </IconBox>
                <IconBox variant="cyan" size="md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </IconBox>
                <IconBox variant="neutral" size="md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </IconBox>
              </div>
            </div>

            <div className="p-6 rounded-[12px] border border-[#E2E8F0] bg-white space-y-4">
              <h3 className="text-sm font-bold text-[#0B1F3A]">Accessible Video Player</h3>
              <VideoPlayer
                poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><rect width='640' height='360' fill='%230B1F3A'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFFFFF' font-family='sans-serif' font-size='18'>Architecture &amp; Edge Integration Overview</text></svg>"
                title="Resurgenix Edge Architecture Demonstration"
              />
            </div>
          </div>
        </section>

        {/* 12. Section Layout Component Example */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-4">
            12. Section Container System
          </h2>
          <div className="border border-[#E2E8F0] rounded-[12px] overflow-hidden">
            <Section
              background="soft"
              eyebrow="RHYTHM &amp; STRUCTURE"
              heading="Standardized White / Soft Sections"
              lead="Strict 80-112px desktop vertical rhythm maintaining WCAG AA contrast against clean light backgrounds."
              align="center"
              className="py-12 md:py-16"
            >
              <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] max-w-md mx-auto text-center text-xs text-[#5B6B7F]">
                Standard container slot with auto-constrained line length.
              </div>
            </Section>
          </div>
        </section>

        {/* 13. Brand Visual Components */}
        <section className="mb-16">
          <h2 className="text-fluid-h3 font-bold text-[#0B1F3A] mb-6">
            13. Brand Visual Components
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-3">Pipeline Diagram</h3>
              <PipelineDiagram />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-3">
                Illustrative Event Dashboard Mockup
              </h3>
              <IllustrativeDashboard />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
