import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../../config/contextAPI";
import Question from "./Question";
import TitleForm from "./TitleForm";

export default function Edit() {
  const { state } = useContext(GlobalState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      title: state.titleForm,
      contentForms: state.contentForms,
      color: state.color,
    };
    console.log(form);
  };
  return (
    <section>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-11/12 lg:w-1/2 py-5 space-y-4 mx-auto"
      >
        <TitleForm />
        <AnimatePresence>
          {state.contentForms &&
            state.contentForms.map((el) => <Question key={el.id} id={el.id} />)}
        </AnimatePresence>
        <div className="flex justify-end py-3">
          <AnimatePresence>
            {!state.isAnimateSubmitButton && (
              <motion.button
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                type="submit"
                className={`text-gray-500 tracking-wide bg-white shadow rounded-md py-2 px-5 ${
                  state.isDark ? "light-shadow bg-gray-100" : "shadow"
                }`}
              >
                SIMPAN
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </section>
  );
}

const variants = {
  initial: { x: 150 },
  animate: {
    x: 0,
    transition: {
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
      duration: 0.3,
    },
  },
  exit: { x: 150 },
};
