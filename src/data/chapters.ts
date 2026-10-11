import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import type { Chapter, Vocab } from "./types";

export const chapters: Chapter[] = [...part1, ...part2, ...part3];

export function getChapter(id: number): Chapter | null {
  return chapters.find((chapter) => chapter.id === id) ?? null;
}

export function vocabById(id: string): Vocab | undefined {
  for (const chapter of chapters) {
    const found = chapter.vocab.find((card) => card.id === id);
    if (found) return found;
  }
  return undefined;
}

export const CHAPTER_COUNT = chapters.length;
