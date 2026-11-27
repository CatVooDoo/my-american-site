import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — richcorp",
  description: "Information about how richcorp uses cookies and similar technologies.",
};

const sections: LegalSection[] = [
  {
    title: "1. What Are Cookies?",
    paragraphs: [
      "Cookies are small text files stored on your device by your web browser when you visit a website. They help websites remember your preferences, maintain functionality, and understand how visitors interact with pages.",
    ],
  },
  {
    title: "2. Types of Cookies We Use",
    paragraphs: [
      "We use a minimal set of cookies and browser storage to keep the site functional and measure general performance:",
    ],
    items: [
      "Essential storage: Remembers your cookie consent choice so the banner does not reappear on every page load.",
      "Analytics cookies: Helps us understand aggregate traffic, page views, and performance metrics via Google Analytics.",
    ],
  },
  {
    title: "3. Managing Your Preferences",
    paragraphs: [
      "You can accept or decline non-essential cookies using the cookie consent banner when you first visit the site. You can also clear or block cookies at any time through your browser settings.",
    ],
  },
  {
    title: "4. Updates to This Policy",
    paragraphs: [
      "We may revise this Cookie Policy periodically to reflect changes in technology, legal requirements, or our practices. Any updates will be posted on this page with an updated revision date.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="This template explains how richcorp uses cookies and similar browser storage technologies."
      lastUpdated="November 27, 2026"
      sections={sections}
    />
  );
}
