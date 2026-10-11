"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { FlashcardSession } from "@/components/flashcard-session";
import { QuizSession } from "@/components/quiz-session";
import { ReadingSession } from "@/components/reading-session";
import { useProgress } from "@/components/progress-context";
import { getChapter, vocabById } from "@/data/chapters";
import type { Vocab } from "@/data/types";
import {
  applyStage,
  clearWeak,
  isChapterUnlocked,
  isQuizUnlocked,
  isReadingUnlocked,
  recordMisses,
} from "@/lib/progress";

function Locked({ id, message }: { id: number; message: string }) {
  return (
    <section className="max-w-xl rounded-3xl border border-line bg-card p-6">
      <p>{message}</p>
      <Link href={`/chapter/${id}`} className="btn-secondary mt-4 inline-block">
        단원으로
      </Link>
    </section>
  );
}

export function FlashcardPage({ id }: { id: number }) {
  const chapter = getChapter(id);
  const { progress, update } = useProgress();
  const [saved, setSaved] = useState(false);
  if (!chapter) return null;
  if (!progress) return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;
  if (!isChapterUnlocked(progress, id)) {
    return <Locked id={id} message="이 단원 단어 카드는 아직 잠겨 있습니다." />;
  }
  const passed = progress.flashcards[String(id)]?.passed === true || saved;
  return (
    <StudyFrame id={id} title="단어 카드" japanese={chapter.title}>
      <FlashcardSession
        cards={chapter.vocab}
        onComplete={({ score, missedIds }) => {
          update((current) => {
            const withWeak = recordMisses(current, missedIds);
            return {
              ...withWeak,
              flashcards: {
                ...withWeak.flashcards,
                [String(id)]: applyStage(withWeak.flashcards[String(id)], "flashcards", score),
              },
            };
          });
          if (score > 80) setSaved(true);
        }}
      />
      {passed ? (
        <Link href={`/chapter/${id}/reading`} className="btn-primary mt-4 inline-block">
          독해로
        </Link>
      ) : null}
    </StudyFrame>
  );
}

export function ReadingPage({ id }: { id: number }) {
  const chapter = getChapter(id);
  const { progress, update } = useProgress();
  const [saved, setSaved] = useState(false);
  if (!chapter) return null;
  if (!progress) return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;
  if (!isReadingUnlocked(progress, id)) {
    return <Locked id={id} message="단어 카드에서 80%를 넘기면 독해가 열립니다." />;
  }
  const passed = progress.reading[String(id)]?.passed === true || saved;
  return (
    <StudyFrame id={id} title="독해" japanese={chapter.title}>
      <ReadingSession
        passageJp={chapter.passageJp}
        passageKo={chapter.passageKo}
        questions={chapter.reading}
        onComplete={(score) => {
          update((current) => ({
            ...current,
            reading: {
              ...current.reading,
              [String(id)]: applyStage(current.reading[String(id)], "reading", score),
            },
          }));
          if (score > 80) setSaved(true);
        }}
      />
      {passed ? (
        <Link href={`/chapter/${id}/quiz`} className="btn-primary mt-4 inline-block">
          확인 문제로
        </Link>
      ) : null}
    </StudyFrame>
  );
}

export function QuizPage({ id }: { id: number }) {
  const chapter = getChapter(id);
  const { progress, update } = useProgress();
  const [saved, setSaved] = useState(false);
  if (!chapter) return null;
  if (!progress) return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;
  if (!isQuizUnlocked(progress, id)) {
    return <Locked id={id} message="독해에서 80%를 넘기면 확인 문제가 열립니다." />;
  }
  const passed = progress.quiz[String(id)]?.passed === true || saved;
  return (
    <StudyFrame id={id} title="확인 문제" japanese={chapter.title}>
      <QuizSession
        groups={chapter.quiz}
        onComplete={(score) => {
          update((current) => ({
            ...current,
            quiz: {
              ...current.quiz,
              [String(id)]: applyStage(current.quiz[String(id)], "quiz", score),
            },
          }));
          if (score >= 80) setSaved(true);
        }}
      />
      {passed && id < 12 ? (
        <Link href={`/chapter/${id + 1}`} className="btn-primary mt-4 inline-block">
          다음 단원
        </Link>
      ) : null}
      {passed && id === 12 ? <p className="mt-4 text-lg">12단원까지 마쳤습니다.</p> : null}
    </StudyFrame>
  );
}

export function ReviewPage() {
  const { progress, update } = useProgress();
  const [frozen, setFrozen] = useState<Vocab[] | null>(null);
  if (!progress) return <p className="text-ink/60">진도를 불러오는 중입니다.</p>;
  const live = Object.entries(progress.weak)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => vocabById(id))
    .filter((card): card is Vocab => card != null);
  const cards = frozen ?? live;

  return (
    <div>
      <p className="text-xs tracking-[0.18em] text-persimmon">REVIEW</p>
      <h1 className="mt-2 font-jp text-4xl">약점 복습</h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        단어 카드에서 틀린 말이 여기 모입니다. 이번 복습에서 한 번도 틀리지 않으면 목록에서 빠집니다.
      </p>
      {cards.length === 0 ? (
        <p className="mt-8 rounded-3xl border border-dashed border-line bg-card p-6">아직 틀린 단어가 없습니다.</p>
      ) : (
        <div className="mt-6">
          <FlashcardSession
            cards={cards}
            variant="review"
            onComplete={({ missedIds }) => {
              if (frozen) return;
              setFrozen(cards);
              update((current) => {
                const mastered = cards.map((card) => card.id).filter((cardId) => !missedIds.includes(cardId));
                return recordMisses(clearWeak(current, mastered), missedIds);
              });
            }}
          />
        </div>
      )}
    </div>
  );
}

function StudyFrame({
  id,
  title,
  japanese,
  children,
}: {
  id: number;
  title: string;
  japanese: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Link href={`/chapter/${id}`} className="text-sm text-indigo">
        {japanese}
      </Link>
      <h1 className="mt-2 font-jp text-4xl">{title}</h1>
      <div className="mt-6">{children}</div>
    </div>
  );
}
