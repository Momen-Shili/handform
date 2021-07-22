import React, { useRef, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "../../Utils/useOutsideClick";
import { GlobalState } from "../../config/contextAPI";
import { useHistory } from "react-router-dom";

export const Account = ({ isDropdown, setDropdown, setOverHide }) => {
  const { state, dispatch } = useContext(GlobalState);
  const { push } = useHistory();
  const ref = useRef();
  useOutsideClick(ref, () => {
    setDropdown(false);
    setOverHide(true);
  });
  return (
    <div
      ref={ref}
      onClick={() => {
        setOverHide(false);
        state.isLogin
          ? setDropdown(!isDropdown)
          : dispatch({ type: "CHANGE_ISMODAL", value: true });
      }}
      className="h-10 w-10 relative rounded-full border-2 border-gray-200 bg-green-600 flex justify-center items-center cursor-pointer"
    >
      <span className="text-white text-lg">A</span>
      <AnimatePresence>
        {isDropdown && (
          <motion.button
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => {
              e.stopPropagation();
              push("/");
              setOverHide(true);
              setDropdown(false);
              localStorage.clear();
              dispatch({ type: "CHANGE_ISLOGIN", value: false });
            }}
            className={`absolute py-2 px-3 -left-5 top-11 border border-gray-300 bg-white rounded shadow-lg hover:bg-indigo-50 outline-none focus:outline-none text-sm`}
          >
            Logout
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const variants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 50,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.23,
    },
  },
};
