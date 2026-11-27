import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface LegalSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <header className="mt-8 border-b border-black/[.08] pb-8 dark:border-white/[.12]">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Last updated: {lastUpdated}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
