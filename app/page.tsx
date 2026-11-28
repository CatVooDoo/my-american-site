import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />

      {/* Main */}
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        {/* Hero */}
        <section className="flex flex-col items-center py-24 text-center sm:py-32">
          <div className="relative flex w-full max-w-5xl flex-col items-center">
            <svg
              viewBox="0 0 1100 190"
              className="w-full select-none overflow-visible"
              aria-label="RICHCORP"
            >
              <defs>
                <linearGradient
                  id="richcorp-stroke"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="65%" stopColor="#2563eb" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="150"
                textAnchor="middle"
                stroke="url(#richcorp-stroke)"
                strokeWidth="4.5"
                strokeLinejoin="round"
                paintOrder="stroke"
                className="fill-white font-sans text-[150px] font-bold tracking-[0.14em] dark:fill-black"
              >
                RICHCORP
              </text>
            </svg>

            <h1 className="relative z-10 -mt-10 text-4xl font-bold tracking-tight text-black [text-shadow:0_-20px_48px_rgba(255,255,255,1),0_-10px_24px_rgba(255,255,255,1),0_-4px_10px_rgba(255,255,255,1)] dark:text-white dark:[text-shadow:0_-22px_54px_rgba(0,0,0,1),0_-12px_28px_rgba(0,0,0,1),0_-4px_12px_rgba(0,0,0,1)] sm:-mt-14 sm:text-6xl">
              digital agency
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-xl sm:leading-8">
            Richcorp is a two-person studio building custom websites paired with
            practical AI workflows for growing businesses. Capture and qualify
            leads 24/7, book more calls automatically, and save hours of manual
            work.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/get-started"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
            >
              Book a Free 15-Min Call
            </a>
            <a
              href="#features"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-black/[.1] bg-white px-7 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-white/[.15] dark:bg-black dark:hover:bg-zinc-900 sm:w-auto"
            >
              Explore Services
            </a>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="grid gap-6 sm:grid-cols-3">
          <a
            href="/features"
            className="group flex min-h-[210px] flex-col justify-between rounded-xl border border-black/[.08] bg-white p-6 transition-colors hover:border-black/25 dark:border-white/[.12] dark:bg-black dark:hover:border-white/25"
          >
            <svg
              className="h-7 w-7 text-black dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div>
              <h2 className="flex items-center gap-1.5 text-base font-semibold tracking-tight text-black dark:text-white">
                Custom Web Design
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Conversion-focused websites tailored to your brand, built for
                clarity, trust, and effortless mobile browsing.
              </p>
            </div>
          </a>

          <a
            href="/features"
            className="group flex min-h-[210px] flex-col justify-between rounded-xl border border-black/[.08] bg-white p-6 transition-colors hover:border-black/25 dark:border-white/[.12] dark:bg-black dark:hover:border-white/25"
          >
            <svg
              className="h-7 w-7 text-black dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M9 3v18" />
              <path d="M3 9h18" />
            </svg>
            <div>
              <h2 className="flex items-center gap-1.5 text-base font-semibold tracking-tight text-black dark:text-white">
                AI Lead &amp; Chat Agents
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                24/7 AI assistants that answer visitor questions, qualify
                prospects in seconds, and book appointments onto your calendar.
              </p>
            </div>
          </a>

          <a
            href="/features"
            className="group flex min-h-[210px] flex-col justify-between rounded-xl border border-black/[.08] bg-white p-6 transition-colors hover:border-black/25 dark:border-white/[.12] dark:bg-black dark:hover:border-white/25"
          >
            <svg
              className="h-7 w-7 text-black dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <div>
              <h2 className="flex items-center gap-1.5 text-base font-semibold tracking-tight text-black dark:text-white">
                Workflow &amp; CRM Automation
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Automated follow-ups, instant lead routing, and seamless CRM
                syncing that save your team hours of manual admin every week.
              </p>
            </div>
          </a>
        </section>

        {/* Case Studies (3D Rotating Book Cards - nextjs.org/learn style) */}
        <section id="cases" className="mt-24">
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">
              Selected Work
            </h2>
            <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              Interactive website and AI booking prototypes. Full live demos are
              launching soon.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 py-8 sm:justify-between">
            {[
              {
                href: "#case-1",
                title: "Client Portal & AI Intake",
                category: "Demo — Launching Soon",
              },
              {
                href: "#case-2",
                title: "B2B Lead Qualification",
                category: "Demo — Launching Soon",
              },
              {
                href: "#case-3",
                title: "Automated Follow-Up",
                category: "Demo — Launching Soon",
              },
              {
                href: "#case-4",
                title: "AI Booking Workflow",
                category: "Demo — Launching Soon",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="bookPerspective"
              >
                <div className="bookRotateWrapper">
                  <div className="book flex flex-row items-stretch justify-start">
                    <div className="bookBind" />
                    <div className="bookCover flex flex-1 flex-col items-stretch justify-between">
                      <div className="space-y-2">
                        <p className="text-[15px] font-medium leading-[22px] tracking-[-0.01em] text-[var(--book-text)]">
                          {item.title}
                        </p>
                        <p className="text-[13px] leading-[18px] text-[var(--book-subtitle)]">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bookSide" />
                  <div className="bookBack" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="h-24" />
      </main>

      <Footer />
    </div>
  );
}
