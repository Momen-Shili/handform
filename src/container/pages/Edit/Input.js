import React, { useContext } from "react";
import { GlobalState } from "../../config/contextAPI";
import { FormContext } from "./Content";
import * as InputType from "./InputType";

export const Input = ({ index }) => {
  const { state, dispatch } = useContext(GlobalState);
  const { formState } = useContext(FormContext);

  const handleChange = (e, index, props) => {
    const arr = state.contentForms;
    arr[index] = { ...arr[index], [props]: e.target.value };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] });
  };

  const title =
    state.contentForms[index] !== undefined
      ? state.contentForms[index].title
      : "";

  const desc =
    state.contentForms[index] !== undefined
      ? state.contentForms[index].desc
      : "";

  return (
    <div className="space-y-2 pt-4 pb-8">
      {/* title  */}
      <input
        value={title ? title : ""}
        placeholder="Judul pertanyaan"
        onChange={(e) => handleChange(e, index, "title")}
        className={`${inputBorder} border-white w-full text-xl py-3`}
      />
      {/* desc  */}
      {desc !== undefined && (
        <input
          value={desc ? desc : ""}
          placeholder="Deskripsi pertanyaan"
          className={`${inputBorder} border-white w-full text-sm`}
          onChange={(e) => handleChange(e, index, "desc")}
        />
      )}
      {/* content  */}
      {formState.inputType === "text" && <InputType.Text />}
      {formState.inputType === "textarea" && <InputType.TextArea />}
      {formState.inputType === "radio" && <InputType.Radio />}
    </div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
