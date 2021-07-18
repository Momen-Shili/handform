import { createContext, useReducer } from "react";
import { AnimatePresence } from "framer-motion";
import ContentForm from "./ContentForm";
import TitleForm from "./TitleForm";

export const FormContext = createContext();

const initialState = {
  titleForm: { title: "", desc: "" },
  contentForms: [],
  isDropdown: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TITLEFORM":
      return {
        ...state,
        titleForm: action.value,
      };
    case "CHANGE_CONTENTFORM":
      return {
        ...state,
        contentForms: action.value,
      };
    case "CHANGE_ISDROPDOWN":
      return {
        ...state,
        isDropdown: action.value,
      };
    default:
      return state;
  }
};

export default function Edit() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <section style={{ minHeight: "90vh" }}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 lg:w-1/2 py-5 space-y-4 mx-auto"
        >
          <TitleForm />
          <AnimatePresence>
            {state.contentForms &&
              state.contentForms.map((el, index) => (
                <ContentForm key={index} index={index} title={el.title} />
              ))}
          </AnimatePresence>
        </form>
      </section>
    </FormContext.Provider>
  );
}
