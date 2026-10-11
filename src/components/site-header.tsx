"use client";

import Link from "next/link";
import { useProgress } from "@/components/progress-context";

export function SiteHeader() {
  const { progress } = useProgress();
  const weakCount = progress ? Object.keys(progress.weak).length : 0;

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-persimmon font-jp text-lg text-paper">
            す
          </span>
          <span>
            <span className="block font-jp text-lg leading-none text-ink">스쿠스쿠</span>
            <span className="text-xs tracking-wide text-ink/60">일본어 독학 첫걸음</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="rounded-full px-3 py-1.5 hover:bg-card">
            단원
          </Link>
          <Link href="/review" className="rounded-full px-3 py-1.5 hover:bg-card">
            약점 복습
            {weakCount > 0 ? (
              <span className="ml-1 rounded-full bg-persimmon px-1.5 py-0.5 text-xs text-paper">
                {weakCount}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
