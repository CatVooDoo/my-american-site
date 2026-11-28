"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 border-b bg-white/80 backdrop-blur-md transition-colors duration-200 dark:bg-black/80 ${
        scrolled
          ? "border-black/[.08] dark:border-white/[.12]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold leading-none tracking-tight text-black dark:text-white"
          >
            richcorp
          </Link>

          <nav className="hidden items-center gap-6 text-sm leading-none text-zinc-600 dark:text-zinc-400 md:flex">
            <Link
              href="/#cases"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Work
            </Link>
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
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-9 items-center justify-center rounded-md border border-black/[.08] px-3.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-white/[.14] dark:hover:bg-zinc-900 sm:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/get-started"
            className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
