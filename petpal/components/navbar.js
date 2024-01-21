"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaHeart, FaPaw } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const activePath = usePathname();
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center border p-4 bg-white">
          <div className="flex space-x-20 max-w-lg">
            <Link href="/match">
              <div>
                <FaSearch
                  className={`h-10 w-10 ${
                    activePath === "/match"
                      ? "fill-custom-main-dark"
                      : "fill-gray-400 hover:fill-gray-500"
                  }`}
                />
              </div>
            </Link>
            <Link href="/matches">
              <div>
                <FaHeart
                  className={`h-10 w-10 ${
                    activePath === "/matches"
                      ? "fill-custom-main-dark"
                      : "fill-gray-400 hover:fill-gray-500"
                  }`}
                />
              </div>
            </Link>
            <Link href="/profile">
              <div>
                <FaPaw
                  className={`rounded-full p-1 h-10 w-10 ${
                    activePath === "/profile"
                      ? "fill-white bg-custom-main-dark"
                      : "fill-white bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              </div>
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Navbar;
