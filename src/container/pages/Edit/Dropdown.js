import React, { useState, useRef, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dotsIcon from "../../../assets/svg/verticalDots.svg";
import menuIcon from "../../../assets/svg/menu.svg";
import menuAltIcon from "../../../assets/svg/menuAlt.svg";
import gridIcon from "../../../assets/svg/grid.svg";
import checkIcon from "../../../assets/svg/check.svg";
import documentAddIcon from "../../../assets/svg/documentAdd.svg";
import documentRemoveIcon from "../../../assets/svg/documentRemove.svg";
import useOutsideClick from "../../Utils/useOutsideClick";
import { FormContext } from "./Content";

export const Dropdown = () => {
  const { formState, formDispatch } = useContext(FormContext);

  const [isDropdown, setDropdown] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));

  // const desc =
  //   state.contentForms[index] !== undefined
  //     ? state.contentForms[index].desc
  //     : "";

  const dropdownMenu = [
    {
      icon: menuAltIcon,
      text: "Jawaban singkat",
      onClick: () => formDispatch({ type: "CHANGE_INPUTTYPE", value: "text" }),
    },
    {
      icon: menuIcon,
      text: "Paragraf",
      onClick: () =>
        formDispatch({ type: "CHANGE_INPUTTYPE", value: "textarea" }),
    },
    {
      icon: gridIcon,
      text: "Pilihan ganda",
      onClick: () => formDispatch({ type: "CHANGE_INPUTTYPE", value: "radio" }),
    },
    {
      icon: checkIcon,
      text: "Kotak centang",
      onClick: () =>
        formDispatch({ type: "CHANGE_INPUTTYPE", value: "checkbox" }),
    },
    {
      icon: formState.desc !== null ? documentRemoveIcon : documentAddIcon,
      text: formState.desc !== null ? "Hapus deskripsi" : "Tambahkan deskripsi",
      onClick: () =>
        formDispatch({
          type: "CHANGE_DESC",
          value: formState.desc !== null ? null : "",
        }),
    },
  ];

  return (
    <div
      ref={ref}
      onClick={() => setDropdown(!isDropdown)}
      className={`${
        isDropdown ? "bg-gray-300 z-10" : "hover:bg-gray-100"
      } absolute right-2 top-2 p-2 rounded-full duration-200 cursor-pointer `}
    >
      <img src={dotsIcon} alt="dots" className="h-6 w-6" />
      <AnimatePresence>
        {isDropdown && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute rounded shadow right-0 top-12 bg-white w-60"
          >
            <ul className="text-gray-500 py-1">
              {dropdownMenu.map((el, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 py-2 px-5 hover:bg-gray-100"
                  onClick={() => el.onClick()}
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
