"use client";

import { useMemo, useState } from "react";
import type { Vocab } from "@/data/types";
import { flashcardScore } from "@/lib/progress";

type Result = {
  score: number;
  missedIds: string[];
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

export function FlashcardSession({
  cards,
  onComplete,
  variant = "chapter",
}: {
  cards: Vocab[];
  onComplete: (result: Result) => void;
  variant?: "chapter" | "review";
}) {
  const deck = useMemo(() => shuffle(cards), [cards]);
  const [queue, setQueue] = useState(deck);
  const [flipped, setFlipped] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [missed, setMissed] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const current = queue[0];

  const answer = (correct: boolean) => {
    if (!current || !flipped || result) return;
    const nextAttempts = attempts + 1;
    const nextMissed = correct || missed.includes(current.id) ? missed : [...missed, current.id];
    const nextQueue = correct ? queue.slice(1) : [...queue.slice(1), current];
    setAttempts(nextAttempts);
    setMissed(nextMissed);
    setFlipped(false);
    if (nextQueue.length === 0) {
      const score = flashcardScore(cards.length, nextAttempts);
      const finished = { score, missedIds: nextMissed };
      setResult(finished);
      setQueue([]);
      onComplete(finished);
      return;
    }
    setQueue(nextQueue);
  };

  if (cards.length === 0) {
    return <p className="text-ink/70">이 묶음에는 카드가 없습니다.</p>;
  }

  if (result) {
    const passed = result.score > 80;
    return (
      <section className="rounded-3xl border border-line bg-card p-8 text-center">
        <p className="text-sm tracking-[0.18em] text-persimmon">점수</p>
        <p className="mt-2 font-jp text-6xl text-ink">{result.score}</p>
        <p className="mt-3 text-ink/70">
          {cards.length}장을 {attempts}번에 맞혔습니다.
          {result.missedIds.length > 0
            ? ` 틀린 ${result.missedIds.length}장은 약점 복습에 넣었습니다.`
            : " 첫 시도에 모두 맞혔습니다."}
        </p>
        <p className="mt-4 text-lg">
          {variant === "review"
            ? "이번 복습에서 한 번도 틀리지 않은 단어는 목록에서 뺐습니다."
            : passed
              ? "독해가 열렸습니다."
              : "80%를 넘어야 독해가 열립니다. 한 번 더 해보세요."}
        </p>
      </section>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-end justify-between gap-3 text-sm text-ink/70">
        <p>
          남은 카드 <span className="font-semibold text-ink">{queue.length}</span>
          <span className="mx-2">/</span>
          시도 <span className="font-semibold text-ink">{attempts}</span>
        </p>
        <p>앞면은 일본어. 뒤집고 나서 맞았는지 고르세요.</p>
      </div>
      <button
        type="button"
        className="card-scene w-full text-left"
        onClick={() => setFlipped((value) => !value)}
        aria-label={flipped ? "카드 앞면 보기" : "카드 뒤집기"}
      >
        <span className={`card-inner ${flipped ? "is-flipped" : ""}`}>
          <span className="card-face">
            <span className="text-xs tracking-[0.16em] text-indigo">JAPANESE</span>
            <span className="mt-6 block font-jp text-4xl leading-snug text-ink sm:text-5xl">{current.jp}</span>
            {current.reading !== current.jp ? (
              <span className="mt-3 block font-jp text-lg text-ink/60">{current.reading}</span>
            ) : null}
            <span className="mt-2 block text-sm text-ink/50">{current.romaji}</span>
            <span className="mt-8 block text-sm text-persimmon">눌러서 뒤집기</span>
          </span>
          <span className="card-face card-back">
            <span className="text-xs tracking-[0.16em] text-moss">MEANING</span>
            <span className="mt-4 block text-sm text-ink/50">한국어</span>
            <span className="mt-1 block text-2xl text-ink">{current.ko}</span>
            <span className="mt-4 block text-sm text-ink/50">English</span>
            <span className="mt-1 block text-lg text-ink">{current.en}</span>
            {current.mnemonic ? (
              <>
                <span className="mt-4 block text-sm text-ink/50">연상</span>
                <span className="mt-1 block text-ink/80">{current.mnemonic}</span>
              </>
            ) : null}
          </span>
        </span>
      </button>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" className="btn-secondary" disabled={!flipped} onClick={() => answer(false)}>
          몰라요
        </button>
        <button type="button" className="btn-primary" disabled={!flipped} onClick={() => answer(true)}>
          알아요
        </button>
      </div>
    </div>
  );
}
