import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Book a Call — richcorp",
  description: "Book a free 15-minute discovery call with Richcorp.",
};

export default function GetStartedPage() {
  return (
    <TemplatePage
      badge="Book a Call"
      title="Book a Free 15-Min Call"
      subtitle="No hard sell. Let's discuss your website and automation goals and see if we're a good fit."
      blocks={[
        {
          title: "1. Share Your Goals",
          description:
            "Tell us about your current website, how leads find you, and where manual follow-up is slowing you down.",
        },
        {
          title: "2. Get a Clear Roadmap",
          description:
            "We'll outline the highest-impact website updates and AI booking workflows for your business.",
        },
        {
          title: "3. Fast 2-Week Turnaround",
          description:
            "Projects start from $1,500 with direct collaboration from kickoff to launch.",
        },
        {
          title: "Direct Contact",
          description:
            "Prefer email? Reach us anytime at hello@richcorp.online.",
        },
      ]}
    />
  );
}
