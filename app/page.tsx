import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/[.08] bg-white/80 backdrop-blur-md dark:border-white/[.12] dark:bg-black/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center">
              <Image
                className="h-5 w-[100px] dark:invert"
                src="/next.svg"
                alt="Logo"
                width={100}
                height={20}
                priority
              />
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
              <a
                href="#features"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Возможности
              </a>
              <a
                href="#architecture"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Архитектура
              </a>
              <a
                href="#docs"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Документация
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden h-9 items-center justify-center rounded-md border border-black/[.08] px-3.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-white/[.14] dark:hover:bg-zinc-900 sm:inline-flex"
            >
              Связаться
            </a>
            <a
              href="#start"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Начать
            </a>
          </div>
        </div>
      </header>

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
                fill="transparent"
                stroke="url(#richcorp-stroke)"
                strokeWidth="2.5"
                className="font-sans text-[150px] font-bold tracking-[0.14em]"
              >
                RICHCORP
              </text>
            </svg>

            <h1 className="relative z-10 -mt-10 text-4xl font-bold tracking-tight text-black [text-shadow:0_-12px_28px_rgba(255,255,255,0.95),0_-4px_12px_rgba(255,255,255,1)] dark:text-white dark:[text-shadow:0_-12px_32px_rgba(0,0,0,1),0_-4px_14px_rgba(0,0,0,0.95)] sm:-mt-14 sm:text-6xl">
              digital agency
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-xl sm:leading-8">
            Чистая архитектура, мгновенная загрузка со статического CDN и
            аккуратный дизайн, вдохновлённый лучшими инженерными практиками.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
            >
              Начать работу
            </a>
            <a
              href="#architecture"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-black/[.1] bg-white px-7 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-white/[.15] dark:bg-black dark:hover:bg-zinc-900 sm:w-auto"
            >
              Узнать больше
            </a>
          </div>
        </section>

        {/* Feature Grid */}
        <section
          id="features"
          className="grid gap-px overflow-hidden rounded-2xl border border-black/[.08] bg-black/[.08] dark:border-white/[.12] dark:bg-white/[.12] sm:grid-cols-3"
        >
          <div className="flex flex-col justify-between bg-white p-8 dark:bg-black">
            <div>
              <span className="font-mono text-xs text-zinc-500">01 / SPEED</span>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Мгновенный отклик
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Статическая генерация и доставка контента через глобальную сеть
                Cloudflare без лишних задержек.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white p-8 dark:bg-black">
            <div>
              <span className="font-mono text-xs text-zinc-500">02 / DESIGN</span>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Инженерная эстетика
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Тонкие границы, моноширинные акценты, сетка и сбалансированный
                контраст в светлой и тёмной темах.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white p-8 dark:bg-black">
            <div>
              <span className="font-mono text-xs text-zinc-500">03 / SCALE</span>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Готов к росту
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Легко расширяется новыми страницами, формами, анимациями и
                интеграциями по мере развития проекта.
              </p>
            </div>
          </div>
        </section>

        <div className="h-24" />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-black/[.08] bg-white dark:border-white/[.12] dark:bg-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              className="h-4 w-[80px] dark:invert"
              src="/next.svg"
              alt="Logo"
              width={80}
              height={16}
            />
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Возможности
            </a>
            <a
              href="#architecture"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Архитектура
            </a>
            <a
              href="#docs"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Документация
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
