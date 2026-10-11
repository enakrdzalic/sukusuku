import assert from "node:assert/strict";
import { test } from "node:test";
import { chapters } from "../data/chapters";
import { matchesAnswer, normalizeAnswer } from "./answer";
import {
  applyStage,
  clearWeak,
  emptyProgress,
  flashcardScore,
  isChapterUnlocked,
  isQuizUnlocked,
  isReadingUnlocked,
  percent,
  recordMisses,
  stagePassed,
} from "./progress";

test("flashcard score is cards divided by attempts", () => {
  assert.equal(flashcardScore(18, 18), 100);
  assert.equal(flashcardScore(10, 11), 91);
  assert.equal(flashcardScore(0, 3), 0);
  assert.equal(flashcardScore(4, 0), 0);
});

test("stage gates follow the textbook thresholds", () => {
  assert.equal(stagePassed("flashcards", 80), false);
  assert.equal(stagePassed("flashcards", 81), true);
  assert.equal(stagePassed("reading", 80), false);
  assert.equal(stagePassed("reading", 81), true);
  assert.equal(stagePassed("quiz", 79), false);
  assert.equal(stagePassed("quiz", 80), true);
  assert.equal(percent(4, 5), 80);
  assert.equal(percent(5, 5), 100);
});

test("chapters unlock only after the previous quiz is passed", () => {
  const fresh = emptyProgress();
  assert.equal(isChapterUnlocked(fresh, 1), true);
  assert.equal(isChapterUnlocked(fresh, 2), false);
  assert.equal(isReadingUnlocked(fresh, 1), false);

  const afterCards = {
    ...fresh,
    flashcards: { "1": applyStage(undefined, "flashcards", 90) },
  };
  assert.equal(isReadingUnlocked(afterCards, 1), true);
  assert.equal(isQuizUnlocked(afterCards, 1), false);

  const afterReading = {
    ...afterCards,
    reading: { "1": applyStage(undefined, "reading", 100) },
  };
  assert.equal(isQuizUnlocked(afterReading, 1), true);

  const passed = {
    ...afterReading,
    quiz: { "1": applyStage(undefined, "quiz", 80) },
  };
  assert.equal(isChapterUnlocked(passed, 2), true);
  assert.equal(passed.quiz["1"].passed, true);

  const kept = applyStage(passed.quiz["1"], "quiz", 40);
  assert.equal(kept.passed, true);
  assert.equal(kept.latest, 40);
  assert.equal(kept.best, 80);
});

test("answers ignore spacing and punctuation", () => {
  assert.equal(normalizeAnswer("  は じめまして。 "), "はじめまして");
  assert.equal(
    matchesAnswer("처음 뵙겠습니다. 잘 부탁드립니다!", [
      "처음 뵙겠습니다. 잘 부탁드립니다.",
    ]),
    true,
  );
  assert.equal(matchesAnswer("틀린 답", ["さようなら"]), false);
  assert.equal(matchesAnswer("   ", ["さようなら"]), false);
});

test("weak words accumulate and can be cleared", () => {
  const once = recordMisses(emptyProgress(), ["u1-tadaima", "u1-tadaima"]);
  assert.equal(once.weak["u1-tadaima"], 2);
  const cleared = clearWeak(once, ["u1-tadaima"]);
  assert.equal(cleared.weak["u1-tadaima"], undefined);
});

test("every chapter has a deck, a passage check, and a graded quiz", () => {
  assert.deepEqual(
    chapters.map((chapter) => chapter.id),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  );
  for (const chapter of chapters) {
    assert.ok(chapter.vocab.length >= 10, `unit ${chapter.id} vocab`);
    assert.equal(chapter.reading.length, 5, `unit ${chapter.id} reading`);
    assert.ok(chapter.youtubeId.length > 0);
    const ids = new Set<string>();
    for (const card of chapter.vocab) {
      assert.equal(ids.has(card.id), false, card.id);
      ids.add(card.id);
      assert.ok(card.jp && card.ko && card.en);
    }
    for (const question of chapter.reading) {
      assert.ok(question.answerIndex >= 0);
      assert.ok(question.answerIndex < question.choices.length);
    }
    let prompts = 0;
    for (const group of chapter.quiz) {
      for (const item of group.items) {
        prompts += 1;
        assert.equal(matchesAnswer(item.accept[0], item.accept), true, item.id);
        assert.equal(matchesAnswer("not-the-answer", item.accept), false, item.id);
      }
    }
    assert.ok(prompts >= 4, `unit ${chapter.id} quiz`);
  }
});
