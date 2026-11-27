"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const CONSENT_KEY = "richcorp_cookie_consent";
const CONSENT_EVENT = "richcorp-cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot(): boolean {
  try {
    return !window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return true;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
      window.dispatchEvent(new Event(CONSENT_EVENT));
    } catch {
      // Ignore storage errors (e.g. private browsing restrictions)
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-2xl border border-black/[.08] bg-white/95 px-6 py-6 shadow-lg backdrop-blur-md dark:border-white/[.12] dark:bg-zinc-950/95 sm:inset-x-6 sm:bottom-6 sm:px-8 sm:py-7"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="pr-4 sm:pr-0">
          <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white sm:text-xl">
            Cookie Preferences
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
            We use essential storage and analytics cookies to improve your
            experience. Read our{" "}
            <Link
              href="/cookie-policy"
              className="underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-black/[.1] bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-white/[.14] dark:bg-black dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            aria-label="Close cookie banner"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
