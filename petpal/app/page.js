import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 mb-5">
      <div className="text-5xl font-bold">Petpal</div>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
