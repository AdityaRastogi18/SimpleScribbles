"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HoverReadMore = ({ children, link, icon, text }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link href={link} className="h-full w-auto">
      <div
        className={`${
          hovered ? "cursor-pointer flex items-center justify-center lg:border lg:rounded h-full" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered && (
          <div className="absolute flex justify-center ">
            <span className="text-center">
              <FontAwesomeIcon className="text-3xl" icon={icon} />
              <p className=" px-4 py-2 rounded-lg font-bold text-2xl text-black dark:text-teal-400 z-10">
                {text}
              </p>
            </span>
          </div>
        )}
        <div className={`${hovered ? "opacity-25 lg:scale-90 lg:transition-transform lg:duration-200 lg:ease-in-out" : ""}`}>{children}</div>
      </div>
    </Link>
  );
};

export default HoverReadMore;
