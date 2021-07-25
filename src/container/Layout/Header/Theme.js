import React, { useContext, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import colorPalleteIcon from "../../../assets/svg/colorPallete.svg";
import { GlobalState } from "../../config/contextAPI";
import useOutsideClick from "../../Utils/useOutsideClick";
import { useLocation } from "react-router-dom";

export const Theme = () => {
  const [isTheme, setTheme] = useState(false);
  const { dispatch } = useContext(GlobalState);
  const { pathname } = useLocation();

  const ref = useRef();
  useOutsideClick(ref, () => setTheme(false));

  return (
    pathname.substring(1, 5) === "edit" && (
      <div className="flex  items-center lg:space-x-4 relative">
        <AnimatePresence>
          {isTheme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:flex space-y-3 lg:space-y-0 lg:space-x-3 absolute lg:static top-10"
            >
              {colors.map((el, idx) => (
                <motion.span
                  key={idx}
                  initial={{ x: el.x, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: el.delay }}
                  className={`h-5 w-5 rounded-full bg-${el.color}-700 border-2 border-gray-200 cursor-pointer block lg:inline`}
                  onMouseEnter={() =>
                    dispatch({ type: "CHANGE_COLOR", value: el.color })
                  }
                ></motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <img
          ref={ref}
          onClick={() => setTheme(!isTheme)}
          src={colorPalleteIcon}
          alt="theme"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    )
  );
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
