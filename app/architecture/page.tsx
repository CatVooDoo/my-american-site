import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Architecture — richcorp",
  description: "Technical architecture behind richcorp digital products.",
};

export default function ArchitecturePage() {
  return (
    <TemplatePage
      badge="Architecture"
      title="Architecture"
      subtitle="Template page describing the technical stack, deployment pipeline, and edge infrastructure."
      blocks={[
        {
          title: "Next.js App Router",
          description:
            "Server-first rendering and static prerendering for predictable, fast page loads.",
        },
        {
          title: "Cloudflare Edge Runtime",
          description:
            "Deployed via OpenNext for low-latency global distribution with zero cold-start overhead.",
        },
        {
          title: "Type-Safe Foundation",
          description:
            "End-to-end TypeScript and strict linting to keep the codebase reliable as it grows.",
        },
        {
          title: "Utility-First Styling",
          description:
            "Tailwind CSS v4 tokens and responsive layouts across desktop and mobile viewports.",
        },
      ]}
    />
  );
}
