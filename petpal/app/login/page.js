import LoginForm from "../../components/loginForm.js";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route.js";

export default async function LogIn() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/profile");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
