import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface TemplateBlock {
  title: string;
  description: string;
}

interface TemplatePageProps {
  badge: string;
  title: string;
  subtitle: string;
  blocks: TemplateBlock[];
}

export function TemplatePage({
  badge,
  title,
  subtitle,
  blocks,
}: TemplatePageProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <header className="mt-8 border-b border-black/[.08] pb-8 dark:border-white/[.12]">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {badge}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </header>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-black/[.08] bg-white p-6 dark:border-white/[.12] dark:bg-black"
            >
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                {block.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {block.description}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
