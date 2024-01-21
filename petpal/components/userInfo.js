"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function userInfo() {
  const { data: session } = useSession();
  console.log();

  return (
    <div className="shadow-1g p-8">
      <div>
        Username: <span className="font-bold">{session?.user?.username}</span>
      </div>
      <div>
        Email: <span className="font-bold">{session?.user?.email}</span>
      </div>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
      >
        Log Out
      </button>
    </div>
  );
}