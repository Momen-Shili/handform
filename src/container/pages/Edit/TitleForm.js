import React from "react";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";

export const TitleForm = ({ titleForm, setTitleForm, createForm }) => {
  return (
    <div
      style={{ borderTopWidth: "10px" }}
      className={`bg-white px-8 border-t  shadow rounded-lg border-${color}-700`}
    >
      <div className="space-y-2 py-4">
        <input
          value={titleForm.title ? titleForm.title : "Formulir tanpa judul"}
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
      <div className="border-t py-3 flex justify-end items-center">
        <img
          src={plusCircleIcon}
          alt="plus"
          className="h-6 w-6 cursor-pointer"
          onClick={() => createForm(-1)}
        />
      </div>
    </div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
