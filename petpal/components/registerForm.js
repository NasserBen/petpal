"use client";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine, RiMailLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if no input is in either field
    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      //checking user existence
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Username or email already exists.");
        return; // Don't proceed with registration
      }

      //registering user, passing to DB
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
        console.log("Created user!");
        router.push("/login");
      } else {
        console.log("User registration failed.", error);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div>
      {/* Sign Up Box */}
      <main className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center px-10 text-center rounded-2xl shadow-2xl max-w-xl">
          <div className="w-4/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-custom-main-dark mb-2">
                Create Account
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
                    placeholder="Enter username"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {/* Email */}
                <h1 className="flex w-64 text-xs">Email</h1>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-2 rounded-2xl">
                  <RiMailLine className="text-gray-400 m-2" />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Enter email"
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
                    placeholder="Enter password"
                    className="border-2 bg-gray-200 
                                outline-none text-sm flex-1"
                  />
                </div>
                {error && (
                  <div className="flex w-64 bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
                <button
                  className="border-2 border-custom-main-dark text-custom-main-dark rounded-full px-12 py-2 mt-5 inline-block font-semibold
                            hover:bg-custom-main-dark hover:text-white"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <Link className="text-xs mt-2 text-right" href={"/login"}>
              Already have an account?
              <span className="underline px-1">Login </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
