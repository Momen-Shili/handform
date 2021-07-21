import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../../config/contextAPI";
import Question from "./Question";
import Title from "./Title";

export default function Edit() {
  const { state } = useContext(GlobalState);
  return (
    <section className>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 lg:w-1/2 py-5 space-y-4 mx-auto"
      >
        <Title />
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
                className="tracking-wide bg-white shadow rounded-md py-2 px-5"
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
