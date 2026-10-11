import { notFound } from "next/navigation";
import { FlashcardPage } from "@/components/study-pages";
import { chapters } from "@/data/chapters";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ id: String(chapter.id) }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numeric = Number(id);
  if (!chapters.some((chapter) => chapter.id === numeric)) notFound();
  return <FlashcardPage id={numeric} />;
}
