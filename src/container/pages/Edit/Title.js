import React, { useContext, useState } from "react";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";
import { contentForms, GlobalState } from "../../config/contextAPI";

export default function TitleForm() {
  const [titleForm, setTitleForm] = useState({ title: "", desc: "" });
  const { state, dispatch } = useContext(GlobalState);

  const createForm = () => {
    const newForm = {
      id: Date.now(),
      title: "",
      desc: undefined,
      options: [],
      inputType: "radio",
    };
    contentForms.unshift({ ...newForm });
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };

  return (
    <div
      style={{ borderTopWidth: "10px" }}
      className={`
      ${state.isDark ? "light-shadow bg-gray-100" : "shadow bg-white"}
      bg-white px-8 border-t  rounded-lg border-${state.color}-700`}
    >
      <div className="pt-4 pb-8 space-y-2">
        <input
          value={titleForm.title ? titleForm.title : ""}
          placeholder="Judul formulir"
          onChange={(e) =>
            setTitleForm({ ...titleForm, title: e.target.value })
          }
          className={`${
            state.isDark
              ? "bg-gray-100 hover:border-gray-300 border-gray-100"
              : "bg-white hover:border-gray-300 border-white"
          } focus:border-b-2 focus:border-${
            state.color
          }-700 w-full text-3xl py-3`}
        />
        <input
          placeholder="Deskripsi formulir"
          onChange={(e) => setTitleForm({ ...titleForm, desc: e.target.value })}
          className={`${
            state.isDark
              ? "bg-gray-100 hover:border-gray-300 border-gray-100"
              : "bg-white hover:border-gray-300 border-white"
          } border-b focus:border-b-2 focus:border-${
            state.color
          }-700 w-full py-2`}
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
