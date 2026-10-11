"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { emptyProgress, type Progress } from "@/lib/progress";

const STORAGE_KEY = "sukusuku-progress-v1";
const listeners = new Set<() => void>();

type ProgressContextValue = {
  progress: Progress | null;
  update: (recipe: (current: Progress) => Progress) => void;
  reset: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): string | null {
  return localStorage.getItem(STORAGE_KEY) ?? "";
}

function getServerSnapshot(): string | null {
  return null;
}

function notify() {
  for (const listener of listeners) listener();
}

function parseProgress(raw: string): Progress {
  if (!raw) return emptyProgress();
  try {
    const parsed = JSON.parse(raw) as Progress;
    if (!parsed || typeof parsed !== "object") return emptyProgress();
    return {
      flashcards: parsed.flashcards ?? {},
      reading: parsed.reading ?? {},
      quiz: parsed.quiz ?? {},
      weak: parsed.weak ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

function writeProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  notify();
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const progress = useMemo(() => (raw === null ? null : parseProgress(raw)), [raw]);

  const update = (recipe: (current: Progress) => Progress) => {
    const current = parseProgress(localStorage.getItem(STORAGE_KEY) ?? "");
    writeProgress(recipe(current));
  };

  const reset = () => writeProgress(emptyProgress());

  return (
    <ProgressContext.Provider value={{ progress, update, reset }}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress must be used within ProgressProvider");
  return value;
}
