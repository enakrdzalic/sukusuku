"use client";

import { useMemo, useState } from "react";
import type { QuizGroup } from "@/data/types";
import { matchesAnswer } from "@/lib/answer";
import { percent } from "@/lib/progress";

export function QuizSession({
  groups,
  onComplete,
}: {
  groups: QuizGroup[];
  onComplete: (score: number) => void;
}) {
  const items = useMemo(() => groups.flatMap((group) => group.items), [groups]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const correctCount = items.filter((item) => matchesAnswer(drafts[item.id] ?? "", item.accept)).length;
  const score = percent(correctCount, items.length);

  const submit = () => {
    setSubmitted(true);
    onComplete(percent(
      items.filter((item) => matchesAnswer(drafts[item.id] ?? "", item.accept)).length,
      items.length,
    ));
  };

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <section key={group.id} className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="font-jp text-2xl text-indigo">{group.title}</h2>
          <p className="mt-1 text-sm text-ink/60">{group.direction}</p>
          <ol className="mt-4 space-y-4">
            {group.items.map((item, index) => {
              const value = drafts[item.id] ?? "";
              const correct = matchesAnswer(value, item.accept);
              return (
                <li key={item.id}>
                  <label className="block text-sm font-medium" htmlFor={item.id}>
                    {index + 1}. {item.prompt}
                  </label>
                  <input
                    id={item.id}
                    value={value}
                    onChange={(event) =>
                      setDrafts((current) => ({ ...current, [item.id]: event.target.value }))
                    }
                    disabled={submitted}
                    className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none focus:border-indigo"
                    autoComplete="off"
                  />
                  {submitted ? (
                    <p className={`mt-2 text-sm ${correct ? "text-moss" : "text-persimmon"}`}>
                      {correct ? "맞았습니다." : `정답: ${item.accept[0]}`}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
      {submitted ? (
        <section className="rounded-3xl border border-line bg-card p-6 text-center">
          <p className="text-sm tracking-[0.16em] text-persimmon">확인 문제 점수</p>
          <p className="mt-2 font-jp text-6xl">{score}</p>
          <p className="mt-3 text-ink/70">
            {items.length}문제 중 {correctCount}문제.{" "}
            {score >= 80 ? "다음 단원이 열렸습니다." : "80% 이상이면 다음 단원이 열립니다."}
          </p>
        </section>
      ) : (
        <button type="button" className="btn-primary w-full" onClick={submit}>
          확인 문제 채점
        </button>
      )}
    </div>
  );
}
