import React, { useContext } from "react";
import { FormContext } from "./Content";
import * as InputType from "./InputType";

export const Input = ({ id }) => {
  const { formState, formDispatch } = useContext(FormContext);
  const handleChange = (e, CHANGE_VALUE) =>
    formDispatch({ type: CHANGE_VALUE, value: e.target.value });
  return (
    <div className="space-y-2 pt-4 pb-8">
      {/* title  */}
      <input
        value={formState.id ? formState.id : ""}
        placeholder="Judul pertanyaan"
        onChange={(e) => handleChange(e, "CHANGE_TITLE")}
        className={`${inputBorder} border-white w-full text-xl py-3`}
      />
      {/* desc  */}
      {formState.desc !== null && (
        <input
          value={formState.desc ? formState.desc : ""}
          placeholder="Deskripsi pertanyaan"
          className={`${inputBorder} border-white w-full text-sm`}
          onChange={(e) => handleChange(e, "CHANGE_DESC")}
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
