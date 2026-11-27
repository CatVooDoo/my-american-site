import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Get Started — richcorp",
  description: "Start building your next digital product with richcorp.",
};

export default function GetStartedPage() {
  return (
    <TemplatePage
      badge="Onboarding"
      title="Get Started"
      subtitle="Template onboarding page to kick off a new project or explore our workflow."
      blocks={[
        {
          title: "1. Discovery & Scope",
          description:
            "Define goals, technical requirements, and target milestones for your product.",
        },
        {
          title: "2. Architecture & Design",
          description:
            "Establish the component system, routing structure, and visual direction.",
        },
        {
          title: "3. Build & Iterate",
          description:
            "Rapid implementation with continuous previews and automated quality checks.",
        },
        {
          title: "4. Launch on Edge",
          description:
            "Production deployment to a global static CDN with monitoring enabled.",
        },
      ]}
    />
  );
}
