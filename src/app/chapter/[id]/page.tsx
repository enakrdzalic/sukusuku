import { notFound } from "next/navigation";
import { ChapterScreen } from "@/components/chapter-screen";
import { chapters } from "@/data/chapters";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ id: String(chapter.id) }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numeric = Number(id);
  if (!chapters.some((chapter) => chapter.id === numeric)) notFound();
  return <ChapterScreen id={numeric} />;
}
