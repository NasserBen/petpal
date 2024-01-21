import Link from "next/link";

export default function Home() {
  return (
    <main className="flex tems-center justify-center h-[85vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-5xl font-bold mb-2 text-3xl">
          Pals for your
          <span className="text-custom-main-dark"> Pets</span>
        </h1>
        <p className="mb-7">Find freinds for your pets!</p>

        <div className="flex items-center justify-center">
          <div className="bg-custom-main-dark text-white px-4 py-2 rounded-lg hover:bg-sky-300 cursor-pointer">
            <Link href="/signup">Sign Up</Link>
          </div>
          <span className="mx-3">or</span>
          <div className="bg-white text-custom-main-dark border-solid border-2 border-custom-main-dark px-4 py-2 rounded-lg cursor-pointer hover:opacity-50">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
