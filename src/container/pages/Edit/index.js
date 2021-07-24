import React, { useContext, useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalState } from "../../config/contextAPI";
import { getDataFromDatabase, setDataToDatabase } from "../../config/firebase";
import Question from "./Question";
import TitleForm from "./TitleForm";
import { getDate } from "../../Utils/getDate";

export default function Edit() {
  const { push } = useHistory();
  const { state, dispatch } = useContext(GlobalState);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    if (state.titleForm.title) {
      // title isnt empty
      if (state.contentForms.length !== 0) {
        // form isnt empty
        dispatch({ type: "CHANGE_ISLOADING", value: true });
        const form = {
          title: state.titleForm,
          contentForms: state.contentForms,
          color: state.color,
          date: getDate(),
        };
        await setDataToDatabase(`users/${state.uid}/forms/${id}/`, form)
          .then(() => push("/"))
          .catch((e) => alert(e))
          .finally(() => dispatch({ type: "CHANGE_ISLOADING", value: false }));
      } else {
        alert("formulir tidak boleh kosong");
      }
    } else {
      alert("judul formulir tidak boleh kosong");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getDataFromDatabase(`users/${state.uid}/forms/${id}/`);
      if (res) {
        dispatch({ type: "CHANGE_TITLEFORM", value: res.title });
        dispatch({ type: "CHANGE_COLOR", value: res.color });
        dispatch({ type: "CHANGE_CONTENTFORM", value: res.contentForms });
      }
    };
    getData();
    return () => {
      dispatch({ type: "CHANGE_TITLEFORM", value: { title: "", desc: "" } });
      dispatch({ type: "CHANGE_COLOR", value: "purple" });
      dispatch({ type: "CHANGE_CONTENTFORM", value: [] });
    };
  }, [dispatch, id, state.uid]);

  return state.uid === null ? (
    <Redirect to="/" />
  ) : (
    <section>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="lg:w-1/2 py-5 space-y-4 mx-auto"
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
