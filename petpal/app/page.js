import Link from "next/link";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 mb-5">
      <div className="text-5xl font-bold">Petpal</div>
      <Link href={"/login"}>Login</Link>
      <div><Navbar></Navbar></div>
    </main>
  );
}
