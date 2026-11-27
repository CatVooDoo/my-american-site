import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Features — richcorp",
  description: "Overview of richcorp platform and engineering features.",
};

export default function FeaturesPage() {
  return (
    <TemplatePage
      badge="Features"
      title="Features"
      subtitle="Template page for richcorp core capabilities, edge performance, and engineering standards."
      blocks={[
        {
          title: "Instant Edge Delivery",
          description:
            "Static generation and global CDN caching for sub-second response times worldwide.",
        },
        {
          title: "Minimalist Design System",
          description:
            "Crisp borders, balanced contrast, and adaptive light and dark themes.",
        },
        {
          title: "Modular Architecture",
          description:
            "Cleanly structured components ready to scale with new routes and integrations.",
        },
        {
          title: "Built-in Analytics & Consent",
          description:
            "Lightweight analytics integration paired with transparent cookie preferences.",
        },
      ]}
    />
  );
}
