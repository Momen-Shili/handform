import { useState, useContext, useRef } from "react";
import documentIcon from "../../assets/svg/document.svg";
import colorPalleteIcon from "../../assets/svg/colorPallete.svg";
import moonIcon from "../../assets/svg/moon.svg";
import sunIcon from "../../assets/svg/sun.svg";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../config/contextAPI";
import useOutsideClick from "../Utils/useOutsideClick";

export default function Header() {
  const { state, dispatch } = useContext(GlobalState);
  const [isDropdown, setDropdown] = useState(false);
  const [isTheme, setTheme] = useState(false);
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
        <div className="flex items-center space-x-4">
          <AnimatePresence>
            {isTheme && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex space-x-3"
              >
                {colors.map((el, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ x: el.x, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: el.delay }}
                    className={`h-5 w-5 rounded-full bg-${el.color}-700 border-2 border-gray-200 cursor-pointer`}
                    onMouseEnter={() =>
                      dispatch({ type: "CHANGE_COLOR", value: el.color })
                    }
                  ></motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onClick={() => setTheme(!isTheme)}
            src={colorPalleteIcon}
            alt="theme"
            className="h-6 w-6 cursor-pointer"
          />
        </div>

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
  animate: { y: 0, transition: { delay: 0.23 } },
  exit: { y: 100 },
};

const colors = [
  { color: "pink", x: 230, delay: 0 },
  { color: "red", x: 198, delay: 0.2 },
  { color: "yellow", x: 167, delay: 0.4 },
  { color: "green", x: 135, delay: 0.6 },
  { color: "blue", x: 105, delay: 0.8 },
  { color: "indigo", x: 72, delay: 1 },
  { color: "purple", x: 40, delay: 1.2 },
];
