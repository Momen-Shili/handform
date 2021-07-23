import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { contentForms, GlobalState } from "../../config/contextAPI";
import { setDataToDatabase } from "../../config/firebase";
import Question from "./Question";
import TitleForm from "./TitleForm";

export default function Edit() {
  const { state, dispatch } = useContext(GlobalState);
  const { id } = useParams();

  const uid = JSON.parse(localStorage.getItem("uid"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contentForms);
    console.log(state);
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    const form = {
      title: state.titleForm,
      contentForms: state.contentForms,
      color: state.color,
    };
    await setDataToDatabase(`users/${state.uid}/forms/${id}/`, form)
      .then(() => {
        dispatch({ type: "CHANGE_CONTENTFORM", value: [] });
        dispatch({ type: "CHANGE_COLOR", value: "purple" });
      })
      .catch((e) => alert(e))
      .finally(() => dispatch({ type: "CHANGE_ISLOADING", value: false }));
  };

  return uid === null ? (
    <Redirect to="/" />
  ) : (
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
