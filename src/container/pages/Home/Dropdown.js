import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = ({ isDropdown, id }) => {
  const dropdownMenu = [
    {
      text: "Buka",
      onClick: () => alert("click"),
    },
    {
      text: "Edit",
      onClick: () => alert("click"),
      path: `edit/${id}`,
    },
    {
      text: "Salin link URL",
      onClick: () => alert("click"),
    },
    {
      text: "Hapus",
      onClick: () => alert("click"),
    },
  ];
  return (
    <AnimatePresence>
      {isDropdown && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute rounded shadow -right-20 top-10 bg-white w-40 z-10"
        >
          <ul className="text-gray-500 py-1">
            {dropdownMenu.map((el, index) => (
              <li
                key={index}
                // onClick={() => el.onClick()}
              >
                <Link
                  className="py-2 px-5 hover:bg-gray-100 block"
                  to={el.path ? el.path : "/"}
                >
                  {el.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const variants = {
  initial: {
    y: -50,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -150,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.23,
    },
  },
};
