import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import dotsIcon from "../../../assets/svg/verticalDots.svg";
import useOutsideClick from "../../Utils/useOutsideClick";
import menuIcon from "../../../assets/svg/menu.svg";
import menuAltIcon from "../../../assets/svg/menuAlt.svg";
import gridIcon from "../../../assets/svg/grid.svg";
import checkIcon from "../../../assets/svg/check.svg";
import documentAddIcon from "../../../assets/svg/documentAdd.svg";
import duplicateIcon from "../../../assets/svg/duplicate.svg";
import trashIcon from "../../../assets/svg/trash.svg";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";

export const ContentForm = ({
  index,
  create,
  duplicate,
  remove,
  handleChange,
  title,
}) => {
  const [isDropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      exit={{
        y: 150,
        transition: { ease: "easeIn", type: "tween", duration: 0.2 },
      }}
      className={`bg-white px-8 border-t shadow rounded-lg relative ${
        isDropdown && "z-10"
      }`}
    >
      {/* input  */}
      <div className="space-y-2 py-4">
        <input
          id="random"
          value={title ? title : ""}
          placeholder="Pertanyaan"
          onChange={(e) => handleChange(e, index, "title")}
          className={`${inputBorder} border-white w-full text-xl py-3`}
        />
        <input
          placeholder="Teks jawaban singkat"
          className={`${inputBorder} border-white w-full py-2`}
        />
      </div>
      {/* action */}
      <div className="border-t py-3 flex justify-end items-center space-x-3">
        <img
          src={duplicateIcon}
          alt="duplicate"
          className="h-6 w-6 cursor-pointer"
          onClick={() => duplicate()}
        />
        <img
          src={plusCircleIcon}
          alt="plus"
          className="h-6 w-6 cursor-pointer"
          onClick={() => create(index)}
        />
        <img
          src={trashIcon}
          alt="delete"
          className="h-6 w-6 cursor-pointer"
          onClick={() => remove(index)}
        />
      </div>
      {/* dropdown menu */}
      <div
        ref={ref}
        onClick={() => setDropdown(!isDropdown)}
        className={`${
          isDropdown ? "bg-gray-300" : "hover:bg-gray-100"
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
    </motion.div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
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
