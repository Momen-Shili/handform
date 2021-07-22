import { createContext } from "react";

export const GlobalState = createContext();

export const contentForms = [];

export const initialState = {
  titleForm: { title: "", desc: "" },
  contentForms,
  color: "purple",
  isAnimateSubmitButton: false,
  isDark: false,
  isModal: false,
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
    case "CHANGE_ISMODAL":
      return {
        ...state,
        isModal: action.value,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.value,
      };
    default:
      return state;
  }
};
