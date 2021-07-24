import React from "react";
import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const Dropdown = ({ isDropdown, deleteForm, id }) => {
  const { push } = useHistory();

  const dropdownMenu = [
    {
      text: "Buka",
      onClick: () => alert("click"),
    },
    {
      text: "Edit",
      onClick: () => push(`edit/${id}`),
    },
    {
      text: "Salin link URL",
      onClick: () => alert("click"),
    },
    {
      text: "Hapus",
      onClick: deleteForm,
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
                className="py-2 px-5 hover:bg-gray-100 block"
                onClick={(e) => {
                  e.stopPropagation();
                  el.onClick();
                }}
              >
                {el.text}
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
