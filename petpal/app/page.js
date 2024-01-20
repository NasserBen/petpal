import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl font-bold">Petpal</div>
      <div><Navbar /></div>
    </main>
  );
}
