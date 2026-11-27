import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Docs — richcorp",
  description: "Documentation and guides for richcorp.",
};

export default function DocsPage() {
  return (
    <TemplatePage
      badge="Documentation"
      title="Docs"
      subtitle="Template documentation page for guides, API references, and project conventions."
      blocks={[
        {
          title: "Getting Started",
          description:
            "Step-by-step setup instructions, environment configuration, and local development workflow.",
        },
        {
          title: "Components & UI",
          description:
            "Reusable layout primitives, navigation patterns, and theme guidelines.",
        },
        {
          title: "Deployment",
          description:
            "Build verification, static asset optimization, and edge deployment checklist.",
        },
        {
          title: "Changelog",
          description:
            "Recent updates, structural improvements, and release notes.",
        },
      ]}
    />
  );
}
