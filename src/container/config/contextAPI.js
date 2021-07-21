import { createContext } from "react";

export const GlobalState = createContext();

export const contentForms = [];

export const initialState = {
  contentForms,
  color: "indigo",
  isAnimateSubmitButton: false,
  isDark: false,
};

export const reducer = (state, action) => {
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
    case "CHANGE_ISANIMATESUBMITBUTTON":
      return {
        ...state,
        isAnimateSubmitButton: action.value,
      };
    case "CHANGE_ISDARK":
      return {
        ...state,
        isDark: action.value,
      };
    default:
      return state;
  }
};
