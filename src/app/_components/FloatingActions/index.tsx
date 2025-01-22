"use client";

import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import { MdHttp } from "react-icons/md";
import { motion } from "framer-motion";

export default function FloatingActions({
  githubLink,
  projectLink,
}: {
  githubLink: string;
  projectLink?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transitionEnd: { display: "none" },
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="fixed end-6 bottom-6">
      <motion.div
        className="flex flex-col items-center mb-4 space-y-2"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <a
          href={githubLink}
          target="_blank"
          className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          {/* Ícone */}
          <FaGithub color="#ededf1" size={30} />
          <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -start-20 top-1/2">
            Github
          </span>
        </a>
        {projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >
            {/* Ícone */}
            <MdHttp color="#ededf1" size={30} />
            <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -start-20 top-1/2">
              Website
            </span>
          </a>
        ) : null}
      </motion.div>
      <motion.button
        type="button"
        onClick={toggleMenu}
        aria-controls="speed-dial-menu-click"
        aria-expanded={isOpen}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      >
        <FaGlobe color="#ffffff" size={30} />
        <span className="sr-only">Open actions menu</span>
      </motion.button>
    </div>
  );
}