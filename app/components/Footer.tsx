import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/[.08] bg-white dark:border-white/[.12] dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-black dark:text-white"
          >
            richcorp
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="/features"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/architecture"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Process
          </Link>
          <Link
            href="/docs"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            About
          </Link>
          <span
            aria-hidden="true"
            className="hidden h-3 w-px bg-black/[.1] dark:bg-white/[.15] sm:inline-block"
          />
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookie-policy"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
