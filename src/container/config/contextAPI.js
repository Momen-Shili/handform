import { createContext } from "react";

export const GlobalState = createContext();

export const initialState = {
  contentForms: [],
  isAnimateForm: false,
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
    case "CHANGE_ISANIMATEFORM":
      return {
        ...state,
        isAnimateForm: action.value,
      };
    default:
      return state;
  }
};