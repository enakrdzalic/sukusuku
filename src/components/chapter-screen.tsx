"use client";

import Link from "next/link";
import { getChapter } from "@/data/chapters";
import { useProgress } from "@/components/progress-context";
import { isChapterUnlocked, isQuizUnlocked, isReadingUnlocked } from "@/lib/progress";

export function ChapterScreen({ id }: { id: number }) {
  const chapter = getChapter(id);
  const { progress } = useProgress();
  if (!chapter) return null;
  if (!progress) return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;

  if (!isChapterUnlocked(progress, id)) {
    return (
      <section className="max-w-xl rounded-3xl border border-line bg-card p-6">
        <h1 className="font-jp text-3xl">{chapter.title}</h1>
        <p className="mt-3 text-ink/70">이전 단원 확인 문제에서 80% 이상을 받아야 이 단원이 열립니다.</p>
        <Link href="/" className="btn-secondary mt-5 inline-block">
          단원 목록
        </Link>
      </section>
    );
  }

  const cards = progress.flashcards[String(id)];
  const reading = progress.reading[String(id)];
  const quiz = progress.quiz[String(id)];
  const readingOpen = isReadingUnlocked(progress, id);
  const quizOpen = isQuizUnlocked(progress, id);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/" className="text-sm text-indigo">
          단원 목록
        </Link>
        <p className="mt-3 text-xs tracking-[0.18em] text-persimmon">UNIT {String(id).padStart(2, "0")}</p>
        <h1 className="mt-1 font-jp text-4xl leading-tight">{chapter.title}</h1>
        <p className="mt-2 text-lg text-ink/70">{chapter.titleKo}</p>
        <p className="mt-4 max-w-3xl leading-7 text-ink/80">{chapter.grammar}</p>
      </div>
      <section>
        <h2 className="font-jp text-2xl">단원 강의</h2>
        <div className="relative mt-3 aspect-video overflow-hidden rounded-3xl border border-line bg-ink">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${chapter.youtubeId}`}
            title={`${chapter.title} 강의`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <StageLink
          href={`/chapter/${id}/flashcards`}
          kicker="01"
          title="단어 카드"
          detail="맞출 때까지 넘깁니다. 80% 초과면 독해."
          open
          score={cards?.best ?? null}
        />
        <StageLink
          href={`/chapter/${id}/reading`}
          kicker="02"
          title="독해"
          detail="배운 말로 쓴 글을 읽고 문제를 풉니다."
          open={readingOpen}
          score={reading?.best ?? null}
        />
        <StageLink
          href={`/chapter/${id}/quiz`}
          kicker="03"
          title="확인 문제"
          detail="교재 문제를 씁니다. 80% 이상이면 다음 단원."
          open={quizOpen}
          score={quiz?.best ?? null}
        />
      </section>
    </div>
  );
}

function StageLink({
  href,
  kicker,
  title,
  detail,
  open,
  score,
}: {
  href: string;
  kicker: string;
  title: string;
  detail: string;
  open: boolean;
  score: number | null;
}) {
  const inner = (
    <>
      <p className="text-xs tracking-[0.16em] text-indigo">{kicker}</p>
      <h3 className="mt-2 font-jp text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{detail}</p>
      <p className="mt-4 text-sm">{score == null ? (open ? "아직 기록이 없습니다" : "잠겨 있습니다") : `최고 ${score}점`}</p>
    </>
  );
  if (!open) {
    return <article className="rounded-3xl border border-dashed border-line bg-card/70 p-5 opacity-75">{inner}</article>;
  }
  return (
    <Link href={href} className="rounded-3xl border border-line bg-card p-5 transition hover:-translate-y-0.5">
      {inner}
    </Link>
  );
}
