import React, { useContext, createContext, useReducer } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Action } from "./Action";
import { Dropdown } from "./Dropdown";
import { GlobalState } from "../../config/contextAPI";

export const FormContext = createContext();

const initialState = {
  inputType: "text",
  isDesc: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUTTYPE":
      return {
        ...state,
        inputType: action.value,
      };
    case "CHANGE_ISDESC":
      return {
        ...state,
        isDesc: action.value,
      };
    default:
      return state;
  }
};

export default function Content({ index }) {
  const { state } = useContext(GlobalState);
  const [formState, formDispatch] = useReducer(reducer, initialState);
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
        <Input index={index} />
        <Action index={index} />
        <Dropdown index={index} />
      </motion.div>
    </FormContext.Provider>
  );
}
