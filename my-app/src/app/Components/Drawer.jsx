// "use client"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const Drawer = ({ headerTitle, toggleBtn, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  const drawerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-opacity-40" ref={drawerRef}>
      <button onClick={toggleSlider}>{toggleBtn}</button>
      <div
        className={`fixed text-black dark:text-white shadow-lg shadow-slate-500 lg:top-0 bottom-0 lg:bottom-0 left-0 lg:left-auto right-0 lg:right-0 lg:w-1/3 w-full lg:h-full h-3/4 dark:bg-regal-black bg-white transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0 lg:translate-y-0"
            : "translate-y-full lg:translate-x-full lg:translate-y-0"
        }`}
      >
        <header
          className="hidden lg:flex p-3 border-b justify-between items-center lg:h-[7vh]"
        >
          <button aria-label="Close comments" onClick={toggleSlider}>
            <FontAwesomeIcon
              className="text-black text-xl dark:text-white"
              icon={faCircleXmark}
            />
          </button>
          <span className="w-full text-center">{headerTitle}</span>
        </header>
        <div className="flex-1 h-full lg:h-[93vh] overflow-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
