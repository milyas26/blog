"use client";

import React from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav>
      <div className="flex items-center justify-between p-4 border border-b border-slate-200">
        <h1 className="font-semibold uppercase">M. Ilyas</h1>
        <button
          className="hover:bg-slate-50 px-2 py-2 rounded-full cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMdMenu className="text-2xl" />
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } p-4 border border-b border-slate-200 absolute w-full bg-white`}
      >
        <ul>
          <li className="hover:bg-slate-50 px-4 py-3 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-slate-50 px-4 py-3 cursor-pointer">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:bg-slate-50 px-4 py-3 cursor-pointer">
            <a href="/series">Series</a>
          </li>
          <li className="hover:bg-slate-50 px-4 py-3 cursor-pointer">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
