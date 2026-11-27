import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — richcorp",
  description: "Terms and conditions governing the use of richcorp services.",
};

const sections: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using the richcorp website and related services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, please discontinue use of the site.",
    ],
  },
  {
    title: "2. Use of the Website",
    paragraphs: [
      "You agree to use this website solely for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of this site by, any third party.",
    ],
    items: [
      "Do not attempt to gain unauthorized access to our systems or infrastructure.",
      "Do not scrape, overload, or interfere with the normal operation of the site.",
      "Do not use content from this site in a misleading or unlawful manner.",
    ],
  },
  {
    title: "3. Intellectual Property",
    paragraphs: [
      "All trademarks, logos, visual designs, source code, and written materials published on this website are the property of richcorp or its licensors and are protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "4. Disclaimer & Limitation of Liability",
    paragraphs: [
      "This website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind. To the fullest extent permitted by law, richcorp shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site.",
    ],
  },
  {
    title: "5. Changes to Terms",
    paragraphs: [
      "We may update these Terms of Service from time to time. Continued use of the website following any changes constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These template terms govern your access to and use of the richcorp website and services."
      lastUpdated="November 27, 2026"
      sections={sections}
    />
  );
}
