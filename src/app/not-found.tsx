import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-xl">
      <h1 className="font-jp text-4xl">없는 단원입니다</h1>
      <p className="mt-3 text-ink/70">스쿠스쿠 첫걸음은 1단원부터 12단원까지입니다.</p>
      <Link href="/" className="btn-primary mt-5 inline-block">
        단원 목록
      </Link>
    </section>
  );
}
