import React, { useContext, createContext, useReducer, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Action } from "./Action";
import { Dropdown } from "./Dropdown";
import { GlobalState } from "../../config/contextAPI";

export const FormContext = createContext();

export default function Content({ id, inputType, title, desc, options }) {
  const initialState = {
    id,
    inputType,
    title,
    desc,
    options,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_INPUTTYPE":
        return {
          ...state,
          inputType: action.value,
        };
      case "CHANGE_TITLE":
        return {
          ...state,
          title: action.value,
        };
      case "CHANGE_DESC":
        return {
          ...state,
          desc: action.value,
        };
      default:
        return state;
    }
  };

  const { state } = useContext(GlobalState);
  const [formState, formDispatch] = useReducer(reducer, initialState);

  console.log("state", state.contentForms);

  useEffect(() => {
    return () => formDispatch({ type: "CHANGE_TITLE", value: "" });
  }, [formDispatch]);
  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      <motion.div
        initial={{ y: state.isAnimateForm ? 150 : 0 }}
        animate={{ y: 0 }}
        exit={{
          y: state.isAnimateForm ? 150 : 0,
          transition: { ease: "easeIn", type: "tween", duration: 0.2 },
        }}
        className={`${state.isDropdown && "z-10"}
        bg-white px-8 border-t shadow rounded-lg relative `}
      >
        <Input id={id} />
        <Action />
        <Dropdown />
      </motion.div>
    </FormContext.Provider>
  );
}

Content.defaultProps = {
  id: 1,
  title: "",
  desc: null,
  options: [],
  inputType: "radio",
};
