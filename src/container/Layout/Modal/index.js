import React, { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../../config/contextAPI";
import useOutsideClick from "../../Utils/useOutsideClick";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export default function Modal() {
  const { state, dispatch } = useContext(GlobalState);
  const ref = useRef();
  useOutsideClick(
    ref,
    () => state.isModal && dispatch({ type: "CHANGE_ISMODAL", value: false })
  );
  const [isSignUp, setSignUp] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      {state.isModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed w-full h-100 inset-0 z-50 overflow-hidden justify-center items-center flex`}
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            ref={ref}
            className={`w-1/3 bg-white rounded shadow-lg z-50 overflow-y-auto`}
          >
            <div className="modal-content text-left">
              {/*Title*/}
              <div className="flex justify-between items-center px-6 bg-gray-100">
                <Header isSignUp={isSignUp} setSignUp={setSignUp} />
                <div
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_ISMODAL",
                      value: false,
                    })
                  }
                  className="cursor-pointer z-50"
                >
                  <svg
                    className="fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              {/*Body*/}
              <div className="py-6 px-6">
                <Body isSignUp={isSignUp} />
              </div>
              {/*Footer*/}
              <div className="py-3 px-6">
                <Footer isSignUp={isSignUp} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
