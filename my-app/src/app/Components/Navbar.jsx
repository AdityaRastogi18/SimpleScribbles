"use client";

import {
  faBars,
  faCircleXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <>
      <nav
        className={`hidden md:flex flex-row justify-between items-center py-7 border-b-[2px] transition-all duration-500`}
      >
        <Link className="font-extrabold" href="/">Simple Scribbles</Link>
        <ul className="flex flex-row justify-evenly items-center gap-5">
          <li className="hover:cursor-pointer">
            <input
              type="text"
              className="bg-transparent border dark:placeholder:text-white px-2 py-1 rounded-full"
              placeholder={` Search..`}
            />
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            <Link href={"/blogs"}>Blog</Link>
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            <Link href={"/projects"}>Projects</Link>
          </li>
          {/* <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            News
          </li> */}
        </ul>
      </nav>
      <nav
        className={`md:hidden flex flex-row justify-between py-7 border-b-[2px] transition-all duration-500 ${
          toggle ? "h-screen" : "h-0"
        }`}
      >
        <Link href="/">Simple Scribbles</Link>
        <button onClick={() => setToggle(!toggle)} className="font-medium">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {toggle && (
          <ul
            className={`bg-white dark:bg-regal-black min-h-screen w-full flex flex-col justify-evenly gap-5 fixed top-0 left-0 z-10 text-center transition-all duration-500 ${
              toggle ? "h-0" : "h-screen"
            }`}
          >
            <li className="hover:cursor-pointer">
              {searchToggle ? (
                <input
                  type="text"
                  className="bg-transparent border dark:placeholder:text-white px-2 py-1 rounded-full"
                  placeholder={` Search..`}
                />
              ) : (
                <span onClick={() => setSearchToggle(true)}>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              )}
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              <Link href={"/about"} onClick={() => setToggle(!toggle)}>
                About
              </Link>
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              <Link href={"/blogs"} onClick={() => setToggle(!toggle)}>
                Blog
              </Link>
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              <Link href={"/projects"} onClick={() => setToggle(!toggle)}>
                Projects
              </Link>
            </li>
            {/* <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              News
            </li> */}
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              <button onClick={() => setToggle(!toggle)} className="text-3xl">
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
