import React from "react";
import Icon from "next/image";
import Search from "../assets/icons/search.svg";
import Heart from "../assets/icons/heart.svg";
import Profile from "../assets/icons/profile.svg";

const Navbar = () => {
  return (
    <footer className="flex items-center space-x-20">
      <div>
        <Icon src={Search} alt="Search" width={40} height={40} />
      </div>
      <div>
        <Icon src={Heart} alt="Heart" width={40} height={40} />
      </div>
      <div>
        <Icon src={Profile} alt="Profile" width={35} height={35} />
      </div>
    </footer>
  );
};

export default Navbar;
