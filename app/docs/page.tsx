import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "About — richcorp",
  description: "About Richcorp, a two-person web design and AI automation studio.",
};

export default function DocsPage() {
  return (
    <TemplatePage
      badge="About"
      title="About Richcorp"
      subtitle="A two-person boutique web design and AI automation studio focused on measurable business outcomes."
      blocks={[
        {
          title: "Design Meets Automation",
          description:
            "We pair senior UI/web design with full-stack AI automation so your site looks sharp and actively books calls.",
        },
        {
          title: "Built for Speed",
          description:
            "Every inquiry is answered and qualified in seconds—even after hours—so warm prospects never go cold.",
        },
        {
          title: "Transparent Pricing",
          description:
            "Projects start from $1,500 with clear scope, fixed timelines, and zero bloated agency retainers.",
        },
        {
          title: "Practical AI Only",
          description:
            "No gimmicks—just reliable chat assistants, lead qualification, and calendar/CRM workflows that save hours every week.",
        },
      ]}
    />
  );
}
