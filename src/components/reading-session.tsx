"use client";

import { useState } from "react";
import type { ReadingQuestion } from "@/data/types";
import { percent } from "@/lib/progress";

export function ReadingSession({
  passageJp,
  passageKo,
  questions,
  onComplete,
}: {
  passageJp: string;
  passageKo: string;
  questions: ReadingQuestion[];
  onComplete: (score: number) => void;
}) {
  const [showKo, setShowKo] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState<number | null>(null);

  const submit = () => {
    const correct = questions.filter((question) => answers[question.id] === question.answerIndex).length;
    const next = percent(correct, questions.length);
    setScore(next);
    onComplete(next);
  };

  return (
    <div className="space-y-6">
      <article className="rounded-3xl border border-line bg-card p-6">
        <p className="text-xs tracking-[0.16em] text-indigo">PASSAGE</p>
        <p className="mt-4 whitespace-pre-line font-jp text-xl leading-9 text-ink">{passageJp}</p>
        <button type="button" className="btn-secondary mt-5" onClick={() => setShowKo((value) => !value)}>
          {showKo ? "한국어 해석 숨기기" : "한국어 해석 보기"}
        </button>
        {showKo ? <p className="mt-4 whitespace-pre-line text-ink/80">{passageKo}</p> : null}
      </article>
      <ol className="space-y-4">
        {questions.map((question, index) => (
          <li key={question.id} className="rounded-3xl border border-line bg-card p-5">
            <p className="font-medium">
              {index + 1}. {question.prompt}
            </p>
            <div className="mt-3 grid gap-2">
              {question.choices.map((choice, choiceIndex) => {
                const selected = answers[question.id] === choiceIndex;
                const revealed = score != null;
                const correct = choiceIndex === question.answerIndex;
                const tone = revealed
                  ? correct
                    ? "border-moss bg-moss/10"
                    : selected
                      ? "border-persimmon bg-persimmon/10"
                      : "border-line"
                  : selected
                    ? "border-indigo bg-indigo/5"
                    : "border-line hover:border-indigo/40";
                return (
                  <button
                    key={choice}
                    type="button"
                    className={`rounded-2xl border px-4 py-3 text-left ${tone}`}
                    onClick={() => {
                      if (score != null) return;
                      setAnswers((current) => ({ ...current, [question.id]: choiceIndex }));
                    }}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
      {score == null ? (
        <button
          type="button"
          className="btn-primary w-full"
          disabled={Object.keys(answers).length < questions.length}
          onClick={submit}
        >
          독해 채점
        </button>
      ) : (
        <section className="rounded-3xl border border-line bg-card p-6 text-center">
          <p className="text-sm tracking-[0.16em] text-persimmon">독해 점수</p>
          <p className="mt-2 font-jp text-6xl">{score}</p>
          <p className="mt-3 text-ink/70">
            {score > 80 ? "확인 문제가 열렸습니다." : "80%를 넘어야 확인 문제가 열립니다."}
          </p>
        </section>
      )}
    </div>
  );
}
