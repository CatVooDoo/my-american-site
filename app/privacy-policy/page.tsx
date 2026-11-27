import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — richcorp",
  description: "How richcorp collects, uses, and protects your information.",
};

const sections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect information that you provide directly to us, as well as limited technical data automatically collected when you visit our website.",
    ],
    items: [
      "Contact details you voluntarily submit (such as name, email address, or project inquiry details).",
      "Usage and analytics data (such as pages visited, browser type, device information, and referring URLs).",
      "Cookie preferences stored locally in your browser.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use the collected information to operate, maintain, and improve our digital products and services:",
    ],
    items: [
      "Respond to inquiries and provide requested information or support.",
      "Monitor website performance, reliability, and traffic patterns.",
      "Protect against abuse, fraud, and security incidents.",
    ],
  },
  {
    title: "3. Data Sharing & Third Parties",
    paragraphs: [
      "We do not sell your personal information. We may share limited data with trusted service providers (such as hosting, edge delivery, and analytics providers) strictly as necessary to operate this website and comply with applicable laws.",
    ],
  },
  {
    title: "4. Data Retention & Your Rights",
    paragraphs: [
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy. Depending on your jurisdiction, you may request access to, correction of, or deletion of your personal data.",
    ],
  },
  {
    title: "5. Contact",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at privacy@richcorp.example.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="This template outlines how richcorp collects, uses, and safeguards your information when you visit our website."
      lastUpdated="November 27, 2026"
      sections={sections}
    />
  );
}
