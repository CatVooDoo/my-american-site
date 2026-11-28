import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Services — richcorp",
  description:
    "Custom web design, 24/7 AI lead agents, and workflow automation for growing businesses.",
};

export default function FeaturesPage() {
  return (
    <TemplatePage
      badge="Services"
      title="What We Build"
      subtitle="Everything you need to look credible online, respond to leads in seconds, and keep your calendar full."
      blocks={[
        {
          title: "Custom Web Design",
          description:
            "Conversion-focused websites tailored to your brand, built for clarity, trust, and effortless mobile browsing.",
        },
        {
          title: "AI Lead & Chat Agents",
          description:
            "24/7 AI assistants that answer visitor questions, qualify prospects in seconds, and book appointments directly onto your calendar.",
        },
        {
          title: "Workflow & CRM Automation",
          description:
            "Automated follow-ups, instant lead routing, and seamless CRM syncing that save your team hours of manual admin every week.",
        },
        {
          title: "Ongoing Optimization",
          description:
            "Continuous refinements to your messaging, booking flows, and automations as your business scales.",
        },
      ]}
    />
  );
}
