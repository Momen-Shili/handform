import React, { useContext } from "react";
import { contentForms, GlobalState } from "../../config/contextAPI";
import { QuestionContext } from "./Content";
import * as InputType from "./InputType";

export const Input = () => {
  const { dispatch } = useContext(GlobalState);
  const id = useContext(QuestionContext);

  const index = contentForms.findIndex((el) => el.id === id);
  const formState = contentForms[index];
  const inputType = contentForms[index] && contentForms[index].inputType;

  const handleChange = (e, props) => {
    contentForms[index] = { ...contentForms[index], [props]: e.target.value };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };
  return (
    <div className="space-y-2 pt-4 pb-8">
      {/* title  */}
      <input
        value={formState ? formState.title : ""}
        placeholder="Judul pertanyaan"
        onChange={(e) => handleChange(e, "title")}
        className={`${inputBorder} border-white w-full text-xl py-3`}
      />
      {/* desc  */}
      {formState && formState.desc !== undefined && (
        <input
          value={formState ? formState.desc : ""}
          placeholder="Deskripsi pertanyaan"
          className={`${inputBorder} border-white w-full text-sm`}
          onChange={(e) => handleChange(e, "desc")}
        />
      )}
      {/* content  */}
      {inputType === "text" && <InputType.Text />}
      {inputType === "textarea" && <InputType.TextArea />}
      {inputType === "radio" && <InputType.Radio />}
    </div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
