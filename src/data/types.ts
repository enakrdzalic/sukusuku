export type Vocab = {
  id: string;
  jp: string;
  reading: string;
  romaji: string;
  ko: string;
  en: string;
  mnemonic?: string;
};

export type ReadingQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  answerIndex: number;
};

export type QuizPrompt = {
  id: string;
  prompt: string;
  accept: string[];
};

export type QuizGroup = {
  id: string;
  title: string;
  direction: string;
  items: QuizPrompt[];
};

export type Chapter = {
  id: number;
  title: string;
  titleKo: string;
  grammar: string;
  youtubeId: string;
  vocab: Vocab[];
  passageJp: string;
  passageKo: string;
  reading: ReadingQuestion[];
  quiz: QuizGroup[];
};

export function v(
  id: string,
  jp: string,
  reading: string,
  romaji: string,
  ko: string,
  en: string,
  mnemonic?: string,
): Vocab {
  return mnemonic
    ? { id, jp, reading, romaji, ko, en, mnemonic }
    : { id, jp, reading, romaji, ko, en };
}
