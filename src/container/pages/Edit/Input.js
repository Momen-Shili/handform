import React, { useContext } from "react";
import { GlobalState } from "../../config/contextAPI";
import { QuestionContext } from "./Question";
import * as InputType from "./InputType";

export const Input = () => {
  const { state, dispatch } = useContext(GlobalState);
  const id = useContext(QuestionContext);

  const contentForms = state.contentForms;
  const index = contentForms.findIndex((el) => el.id === id);
  const formState = contentForms[index];
  const inputType = contentForms[index] && contentForms[index].inputType;

  const handleChange = (e) => {
    contentForms[index] = {
      ...contentForms[index],
      [e.target.name]: e.target.value,
    };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };
  return (
    <div className="space-y-2 pt-4 pb-8">
      {/* title  */}
      <input
        name="title"
        value={formState ? formState.title : ""}
        placeholder="Judul pertanyaan"
        onChange={(e) => handleChange(e)}
        className={`${
          state.isDark
            ? "bg-gray-100 hover:border-gray-300 border-gray-100"
            : "bg-white hover:border-gray-300 border-white"
        }  border-b focus:border-b-2 focus:border-${
          state.color
        }-700 w-full text-xl py-3`}
      />
      {/* desc  */}
      {formState && formState.isDesc && (
        <input
          name="desc"
          value={formState ? formState.desc : ""}
          placeholder="Deskripsi pertanyaan"
          className={`${
            state.isDark
              ? "bg-gray-100 hover:border-gray-300 border-gray-100"
              : "bg-white hover:border-gray-300 border-white"
          } border-b focus:border-b-2 focus:border-${
            state.color
          }-700 w-full text-sm`}
          onChange={(e) => handleChange(e)}
        />
      )}
      {/* input  */}
      {inputType === "text" && <InputType.Text />}
      {inputType === "textarea" && <InputType.TextArea />}
      {inputType === "radio" && <InputType.Radio />}
      {inputType === "checkbox" && <InputType.CheckBox />}
    </div>
  );
};
