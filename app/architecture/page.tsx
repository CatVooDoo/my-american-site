import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Process — richcorp",
  description: "How richcorp takes your website and AI automations from discovery to launch.",
};

export default function ArchitecturePage() {
  return (
    <TemplatePage
      badge="Process"
      title="How It Works"
      subtitle="A straightforward, founder-led process from first call to launch."
      blocks={[
        {
          title: "1. Discovery Call",
          description:
            "We review your current website, lead flow, and bottlenecks to map out the highest-impact design and AI automations.",
        },
        {
          title: "2. Design & Build",
          description:
            "We design your custom site and configure your AI booking and CRM workflows—working directly with you at every milestone.",
        },
        {
          title: "3. Launch & Support",
          description:
            "We test every flow end-to-end, go live without disruption, and stay on hand to fine-tune performance as leads come in.",
        },
        {
          title: "Direct Founder Access",
          description:
            "No account managers or handoffs—you work directly with the two-person studio building your system.",
        },
      ]}
    />
  );
}
