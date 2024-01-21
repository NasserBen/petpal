// Navbar.js
import React from "react";
import Link from "next/link";
import Icon from "next/image";
import Search from "../assets/icons/search.svg";
import Heart from "../assets/icons/heart.svg";
import Profile from "../assets/icons/profile.svg";

const Navbar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center border p-4 bg-white">
      <div className="flex space-x-20 max-w-lg">
        <Link href="/match">
          <div>
            <Icon src={Search} alt="Search" width={40} height={40} />
          </div>
        </Link>
        <Link href="/matches">
          <div>
            <Icon src={Heart} alt="Heart" width={40} height={40} />
          </div>
        </Link>
        <Link href="/profile">
          <div>
            <Icon src={Profile} alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Navbar;
