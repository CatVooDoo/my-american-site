import type { Metadata } from "next";
import { TemplatePage } from "../components/TemplatePage";

export const metadata: Metadata = {
  title: "Contact — richcorp",
  description: "Get in touch with the richcorp team.",
};

export default function ContactPage() {
  return (
    <TemplatePage
      badge="Contact"
      title="Contact"
      subtitle="Template contact page for project inquiries, partnerships, and support."
      blocks={[
        {
          title: "General Inquiries",
          description:
            "Reach out to our team at hello@richcorp.example for project discussions.",
        },
        {
          title: "Technical Support",
          description:
            "Questions about deployments or integrations: support@richcorp.example.",
        },
        {
          title: "Privacy & Legal",
          description:
            "Data and compliance requests can be sent to privacy@richcorp.example.",
        },
        {
          title: "Response Time",
          description:
            "We typically respond to all incoming messages within one business day.",
        },
      ]}
    />
  );
}
