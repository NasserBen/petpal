"use client";

import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Username or Password.");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main className="flex items-center justify-center text-center mt-20">
        <div className="rounded-2xl shadow-2xl flex max-w-xl px-10">
          {/* Log In Section */}
          <div className=" p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-custom-main-dark mb-2">
                Log In
              </h2>
              <div className="border-2 w-10 border-custom-main-dark inline-block mb-2"></div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                {/* Username */}
                <h1 className="flex w-64 text-xs">Username</h1>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                  <FaRegUser className="text-gray-400 m-2" />
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    name="username"
                    placeholder="Enter your username"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {/* Password */}
                <h1 className="flex w-64 text-xs">Password</h1>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                  <RiLockPasswordLine className="text-gray-400 m-2" />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {error && (
                  <div className="flex w-64 bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mb-5">
                    {error}
                  </div>
                )}
                <button
                  className="border-2 border-custom-main-dark text-custom-main-dark rounded-full px-12 py-2 inline-block font-semibold
                            hover:bg-custom-main-dark hover:text-white"
                >
                  Log In
                </button>
              </form>
            </div>
            <Link className="text-xs mt-2 text-right" href={"/signup"}>
              Already have an account?
              <span className="underline px-1">Sign Up!</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
