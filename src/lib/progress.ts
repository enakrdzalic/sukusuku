export type StageName = "flashcards" | "reading" | "quiz";

export type StageScore = {
  best: number | null;
  latest: number | null;
  passed: boolean;
};

export type Progress = {
  flashcards: Record<string, StageScore>;
  reading: Record<string, StageScore>;
  quiz: Record<string, StageScore>;
  weak: Record<string, number>;
};

const emptyStage = (): StageScore => ({
  best: null,
  latest: null,
  passed: false,
});

export function emptyProgress(): Progress {
  return { flashcards: {}, reading: {}, quiz: {}, weak: {} };
}

export function flashcardScore(cardCount: number, attempts: number): number {
  if (cardCount <= 0 || attempts <= 0) return 0;
  return Math.round((cardCount / attempts) * 100);
}

export function percent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

export function stagePassed(stage: StageName, score: number): boolean {
  if (stage === "quiz") return score >= 80;
  return score > 80;
}

export function applyStage(
  previous: StageScore | undefined,
  stage: StageName,
  score: number,
): StageScore {
  const current = previous ?? emptyStage();
  const best = current.best == null ? score : Math.max(current.best, score);
  return {
    best,
    latest: score,
    passed: current.passed || stagePassed(stage, score),
  };
}

export function isChapterUnlocked(progress: Progress, chapterId: number): boolean {
  if (chapterId === 1) return true;
  if (chapterId < 1) return false;
  return progress.quiz[String(chapterId - 1)]?.passed === true;
}

export function isReadingUnlocked(progress: Progress, chapterId: number): boolean {
  return (
    isChapterUnlocked(progress, chapterId) &&
    progress.flashcards[String(chapterId)]?.passed === true
  );
}

export function isQuizUnlocked(progress: Progress, chapterId: number): boolean {
  return (
    isReadingUnlocked(progress, chapterId) &&
    progress.reading[String(chapterId)]?.passed === true
  );
}

export function recordMisses(progress: Progress, missedIds: string[]): Progress {
  const weak = { ...progress.weak };
  for (const id of missedIds) {
    weak[id] = (weak[id] ?? 0) + 1;
  }
  return { ...progress, weak };
}

export function clearWeak(progress: Progress, ids: string[]): Progress {
  const weak = { ...progress.weak };
  for (const id of ids) delete weak[id];
  return { ...progress, weak };
}
