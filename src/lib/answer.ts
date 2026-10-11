export function normalizeAnswer(input: string): string {
  return input
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[。、．，,.!！?？~～・「」『』（）()[\]"'“”‘’]/g, "");
}

export function matchesAnswer(input: string, accept: string[]): boolean {
  const normalized = normalizeAnswer(input);
  if (!normalized) return false;
  return accept.some((candidate) => normalizeAnswer(candidate) === normalized);
}
