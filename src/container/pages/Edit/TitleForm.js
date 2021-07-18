import React, { useContext } from "react";
import { FormContext } from ".";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";

export default function TitleForm() {
  const { state, dispatch } = useContext(FormContext);
  const createForm = () => {
    const arr = state.contentForms;
    arr.splice(0, 0, { id: Date.now() });
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] }),
      180
    );
  };
  return (
    <div
      style={{ borderTopWidth: "10px" }}
      className={`bg-white px-8 border-t shadow rounded-lg border-${color}-700`}
    >
      <div className="pt-4 pb-8 space-y-2">
        <input
          value={state.titleForm.title ? state.titleForm.title : ""}
          placeholder="Judul formulir"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_TITLEFORM",
              value: { ...state.titleForm, title: e.target.value },
            })
          }
          className={`${inputBorder} border-white w-full text-3xl py-3`}
        />
        <input
          placeholder="Deskripsi formulir"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_TITLEFORM",
              value: { ...state.titleForm, desc: e.target.value },
            })
          }
          className={`${inputBorder} border-white w-full py-2`}
        />
      </div>
      <div className="border-t py-3 flex justify-end items-center space-x-3">
        <img
          src={plusCircleIcon}
          alt="plus"
          className="h-6 w-6 cursor-pointer"
          onClick={() => createForm()}
        />
      </div>
    </div>
  );
}

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
