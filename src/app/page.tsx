"use client";

import Link from "next/link";
import { useState } from "react";
import { useProgress } from "@/components/progress-context";
import { chapters } from "@/data/chapters";
import { isChapterUnlocked, isQuizUnlocked, isReadingUnlocked } from "@/lib/progress";

const accents = ["#d4532b", "#1e4d78", "#2c6b48", "#8a5a2a", "#6d4c7d", "#0f6f6a"];

export default function HomePage() {
  const { progress, reset } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);

  if (!progress) {
    return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;
  }

  const cleared = chapters.filter((chapter) => progress.quiz[String(chapter.id)]?.passed).length;

  return (
    <div>
      <section className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-persimmon">LEVEL 1</p>
        <h1 className="mt-2 font-jp text-4xl leading-tight sm:text-5xl">스쿠스쿠 일본어</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">
          열두 단원을 단어, 독해, 확인 문제 순서로 엽니다. 단어와 독해는 80%를 넘기면 다음 단계가,
          확인 문제는 80% 이상이면 다음 단원이 열립니다.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="rounded-full bg-card px-4 py-2 text-sm">
            끝낸 단원 {cleared} / {chapters.length}
          </p>
          {confirmReset ? (
            <>
              <button type="button" className="btn-primary" onClick={() => { reset(); setConfirmReset(false); }}>
                진도 지우기
              </button>
              <button type="button" className="btn-secondary" onClick={() => setConfirmReset(false)}>
                취소
              </button>
            </>
          ) : (
            <button type="button" className="btn-secondary" onClick={() => setConfirmReset(true)}>
              진도 초기화
            </button>
          )}
        </div>
      </section>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => {
          const unlocked = isChapterUnlocked(progress, chapter.id);
          const cards = progress.flashcards[String(chapter.id)];
          const reading = progress.reading[String(chapter.id)];
          const quiz = progress.quiz[String(chapter.id)];
          const accent = accents[(chapter.id - 1) % accents.length];
          const body = (
            <>
              <div className="flex items-start justify-between gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full font-jp text-lg text-paper"
                  style={{ background: accent }}
                >
                  {chapter.id}
                </span>
                <span className="font-jp text-3xl text-ink/15">{String(chapter.id).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-4 font-jp text-2xl leading-snug">{chapter.title}</h2>
              <p className="mt-1 text-sm text-ink/65">{chapter.titleKo}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <StagePip label="단어" passed={cards?.passed === true} open={unlocked} />
                <StagePip label="독해" passed={reading?.passed === true} open={isReadingUnlocked(progress, chapter.id)} />
                <StagePip label="문제" passed={quiz?.passed === true} open={isQuizUnlocked(progress, chapter.id)} />
              </dl>
              {!unlocked ? <p className="mt-3 text-xs text-ink/50">이전 단원 확인 문제 80% 이상</p> : null}
            </>
          );
          return (
            <li key={chapter.id}>
              {unlocked ? (
                <Link
                  href={`/chapter/${chapter.id}`}
                  className="block h-full rounded-3xl border border-line bg-card p-5 shadow-[0_12px_30px_rgb(36_25_16_/_0.04)] transition hover:-translate-y-0.5"
                >
                  {body}
                </Link>
              ) : (
                <div className="h-full rounded-3xl border border-dashed border-line bg-card/70 p-5 opacity-80">{body}</div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function StagePip({ label, passed, open }: { label: string; passed: boolean; open: boolean }) {
  return (
    <div className="rounded-2xl bg-paper px-2 py-2">
      <dt className="text-ink/50">{label}</dt>
      <dd className={passed ? "text-moss" : open ? "text-indigo" : "text-ink/35"}>{passed ? "통과" : open ? "열림" : "잠김"}</dd>
    </div>
  );
}
