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
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] }),
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
          value={titleForm.title ? titleForm.title : ""}
          placeholder="Judul formulir"
          onChange={(e) =>
            setTitleForm({ ...titleForm, title: e.target.value })
          }
          className={`${inputBorder} border-white w-full text-3xl py-3`}
        />
        <input
          placeholder="Deskripsi formulir"
          onChange={(e) => setTitleForm({ ...titleForm, desc: e.target.value })}
          className={`${inputBorder} border-white w-full py-2`}
        />
      </div>
      <div className="border-t py-3 flex justify-end items-center space-x-3">
        <img
          src={plusCircleIcon}
          alt="plus"
          className="h-6 w-6 cursor-pointer"
          onClick={() => {
            createForm();
            state.contentForms.length <= 1
              ? dispatch({ type: "CHANGE_ISANIMATEFORM", value: true })
              : dispatch({ type: "CHANGE_ISANIMATEFORM", value: false });
          }}
        />
      </div>
    </div>
  );
}

const color = "green";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
