import Link from "next/link";
import { FaPaw } from "react-icons/fa";

export default function Header() {
  return (
    <div className="text-5xl font-bold text-custom-main-dark text-center mt-10 cursor-pointer">
      <Link href={"/"} className="flex space-x-1 justify-center">
        <FaPaw />
        <div>PetPal</div>
      </Link>
    </div>
  );
}
