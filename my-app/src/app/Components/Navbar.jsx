"use client";

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="hidden md:flex flex-row justify-between py-7 border-b-[2px]">
        <Link href="/">Simple Scriblers</Link>
        <ul className="flex flex-row justify-evenly gap-5">
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            About
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            Blog
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            Projects
          </li>
          <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
            News
          </li>
        </ul>
      </nav>
      <nav className="md:hidden flex flex-row justify-between py-7 border-b-[2px]">
        <Link href="/">Simple Scriblers</Link>
        <button onClick={() => setToggle(!toggle)} className="font-medium">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {toggle && (
          <ul className="bg-white dark:bg-regal-black min-h-screen w-full flex flex-col justify-evenly gap-5 fixed top-0 left-0 z-10 text-center">
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              About
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              Blog
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              Projects
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              News
            </li>
            <li className="hover:text-slate-500 dark:hover:text-teal-300 hover:cursor-pointer">
              <button
                onClick={() => setToggle(!toggle)}
                className="font-medium"
              >
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
