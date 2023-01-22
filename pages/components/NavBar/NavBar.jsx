import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar px-15 py-7 text-white text-3xl top-0 left-0 w-full sticky bg-black  z-[2]">
      <div className="container w-3/5 m-auto flex justify-between">
        <span className="cursor-pointer py-3 px-5 rounded-full text-yellow-400">
          Welcome
        </span>
        <ul className="flex gap-5 text-xl items-center">
          <Link
            scroll={false}
            href="#home"
            className="cursor-pointer hover:bg-white bg-opacity-5 hover:text-slate-700 py-3 px-5 rounded-full"
          >
            Home
          </Link>
          <Link
            scroll={false}
            href="#about"
            className="cursor-pointer hover:bg-white bg-opacity-5 hover:text-slate-700 py-3 px-5 rounded-full"
          >
            About Me
          </Link>
          <Link
            scroll={false}
            href="#services"
            className="cursor-pointer hover:bg-white bg-opacity-5 hover:text-slate-700 py-3 px-5 rounded-full"
          >
            Services
          </Link>
          <Link
            scroll={false}
            href="#contact"
            className="cursor-pointer hover:bg-white bg-opacity-5 hover:text-slate-700 py-3 px-5 rounded-full"
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
