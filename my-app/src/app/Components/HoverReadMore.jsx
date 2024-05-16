"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faEye } from "@fortawesome/free-solid-svg-icons";

const HoverReadMore = ({ children, link }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link href={link} className="">
      <div
        className={`${
          hovered ? "cursor-pointer flex items-center justify-center " : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered && (
          <div className="absolute flex justify-center bg-opacity-20">
            <span className="text-center">
              <FontAwesomeIcon className="text-3xl" icon={faEye} />
              <p className=" px-4 py-2 rounded-lg font-bold text-2xl">
                Read More
              </p>
            </span>
          </div>
        )}
        <div className={`${hovered ? "opacity-25" : ""}`}>{children}</div>
      </div>
    </Link>
  );
};

export default HoverReadMore;
