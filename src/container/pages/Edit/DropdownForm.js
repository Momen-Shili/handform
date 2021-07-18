import React, { useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormContext } from ".";
import dotsIcon from "../../../assets/svg/verticalDots.svg";
import menuIcon from "../../../assets/svg/menu.svg";
import menuAltIcon from "../../../assets/svg/menuAlt.svg";
import gridIcon from "../../../assets/svg/grid.svg";
import checkIcon from "../../../assets/svg/check.svg";
import documentAddIcon from "../../../assets/svg/documentAdd.svg";
import useOutsideClick from "../../Utils/useOutsideClick";

export const DropdownForm = () => {
  const { state, dispatch } = useContext(FormContext);

  const ref = useRef();
  useOutsideClick(
    ref,
    () =>
      state.isDropdown && dispatch({ type: "CHANGE_ISDROPDOWN", value: false })
  );
  
  return (
    <div
      ref={ref}
      onClick={() =>
        dispatch({ type: "CHANGE_ISDROPDOWN", value: !state.isDropdown })
      }
      className={`${
        state.isDropdown ? "bg-gray-300" : "hover:bg-gray-100"
      } absolute right-2 top-2 p-2 rounded-full duration-200 cursor-pointer `}
    >
      <img src={dotsIcon} alt="dots" className="h-6 w-6" />
      <AnimatePresence>
        {state.isDropdown && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute rounded shadow right-0 top-12 bg-white w-60"
          >
            <ul className="text-gray-500 py-1">
              {dropdownBottom.map((el, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 py-2 px-5 hover:bg-gray-100"
                >
                  <img src={el.icon} alt="icon" className="h-5 w-5" />
                  <p className="">{el.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

const dropdownBottom = [
  { icon: menuAltIcon, text: "Jawaban singkat" },
  { icon: menuIcon, text: "Paragraf" },
  { icon: gridIcon, text: "Pilihan ganda" },
  { icon: checkIcon, text: "Kotak centang" },
  { icon: documentAddIcon, text: "Tambahkan deskripsi" },
];
