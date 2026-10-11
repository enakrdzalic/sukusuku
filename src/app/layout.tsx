import type { ReactNode } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Zen_Maru_Gothic } from "next/font/google";
import { ProgressProvider } from "@/components/progress-context";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const plex = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

const zen = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "스쿠스쿠 | 일본어 독학 첫걸음",
  description: "스쿠스쿠 일본어 1권의 12단원을 단어 카드, 독해, 확인 문제 순서로 공부합니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${plex.variable} ${zen.variable}`}>
      <body className="min-h-full antialiased">
        <ProgressProvider>
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        </ProgressProvider>
      </body>
    </html>
  );
}
