import React from "react";
import { useContext } from "react";
import { GlobalState } from "../../config/contextAPI";
import { FormContext } from "./Content";

export const Input = ({ index, title }) => {
  const { state, dispatch } = useContext(GlobalState);
  const { formState } = useContext(FormContext);

  const handleChange = (e, index, props) => {
    const arr = state.contentForms;
    arr[index] = { ...arr[index], [props]: e.target.value };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] });
  };

  return (
    <div className="space-y-2 pt-4 pb-8">
      {/* title  */}
      <input
        id="random"
        value={title ? title : ""}
        placeholder="Judul pertanyaan"
        onChange={(e) => handleChange(e, index, "title")}
        className={`${inputBorder} border-white w-full text-xl py-3`}
      />
      {/* desc  */}
      {formState.isDesc && (
        <input
          placeholder="Deskripsi pertanyaan"
          className={`${inputBorder} border-white w-full text-sm`}
        />
      )}
      {/* content  */}
      {formState.inputType === "text" && (
        <input
          placeholder="Teks jawaban singkat"
          className={`${inputBorder} border-white w-full py-2`}
        />
      )}
      {formState.inputType === "textarea" && (
        <textarea
          placeholder="Teks jawaban panjang"
          className={`${inputBorder} border-white w-full py-2 h-auto resize-none`}
        ></textarea>
      )}
    </div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
