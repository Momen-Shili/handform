import { useState, useContext } from "react";
import documentIcon from "../../assets/svg/document.svg";
import colorPalleteIcon from "../../assets/svg/colorPallete.svg";
import moonIcon from "../../assets/svg/moon.svg";
import sunIcon from "../../assets/svg/sun.svg";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../config/contextAPI";
import useOutsideClick from "../Utils/useOutsideClick";
import { useRef } from "react";

export default function Header() {
  const { state, dispatch } = useContext(GlobalState);
  const [isDropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));
  return (
    <header
      className={`${
        !isDropdown && "overflow-hidden"
      } bg-white text-gray-600 w-full flex left-0 top-0 fixed items-center justify-between py-3 px-8 z-50`}
    >
      {/* left  */}
      <div className="flex items-center space-x-2">
        <img src={documentIcon} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl">Forms</h1>
      </div>
      {/* right  */}
      <div className="space-x-6 flex items-center">
        {/* theme */}
        <img src={colorPalleteIcon} alt="theme" className="h-6 w-6" />
        {/* light dark mode  */}
        <div
          className="cursor-pointer relative h-full"
          onClick={() =>
            dispatch({ type: "CHANGE_ISDARK", value: !state.isDark })
          }
        >
          <img src={moonIcon} alt="light-mode" className="h-6 w-6 invisible" />
          <AnimatePresence>
            {!state.isDark && (
              <motion.img
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={sunIcon}
                alt="light-mode"
                className="h-6 w-6 absolute top-0"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {state.isDark && (
              <motion.img
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                src={moonIcon}
                alt="dark-mode"
                className="h-6 w-6 absolute top-0"
              />
            )}
          </AnimatePresence>
        </div>
        {/* dropdown  */}
        <div
          ref={ref}
          onClick={() => setDropdown(!isDropdown)}
          className="h-10 w-10 relative rounded-full border-2 border-gray-200 bg-green-600 flex justify-center items-center cursor-pointer"
        >
          <span className="text-white text-lg">A</span>
          <button
            onClick={(e) => e.stopPropagation()}
            className={`${
              !isDropdown && "hidden"
            } absolute py-2 px-3 -left-5 top-11 border border-gray-300 bg-white rounded shadow-lg hover:bg-indigo-50 outline-none focus:outline-none text-sm`}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

const variants = {
  initial: { y: 100 },
  animate: { y: 0, transition: { delay: 0.2 } },
  exit: { y: 100 },
};
