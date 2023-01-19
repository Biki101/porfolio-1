import React from "react";

const NavBar = () => {
  return (
    <div className="navbar px-15 py-7 text-white text-3xl absolute top-0 left-0 w-full mt-10">
      <div className="container w-3/5 m-auto flex justify-between">
        <span className="cursor-pointer hover:bg-white hover:text-slate-700 py-3 px-5 rounded-full">
          Welcome
        </span>
        <ul className="flex gap-5">
          <li className="cursor-pointer hover:bg-white hover:text-slate-700 py-3 px-5 rounded-full">
            Home
          </li>
          <li className="cursor-pointer hover:bg-white hover:text-slate-700 py-3 px-5 rounded-full">
            About Me
          </li>
          <li className="cursor-pointer hover:bg-white hover:text-slate-700 py-3 px-5 rounded-full">
            Services
          </li>
          <li className="cursor-pointer hover:bg-white hover:text-slate-700 py-3 px-5 rounded-full">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
