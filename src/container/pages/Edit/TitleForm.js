import React from "react";

export const TitleForm = ({ titleForm, setTitleForm }) => {
  return (
    <div
      style={{ borderTopWidth: "10px" }}
      className={`bg-white px-8 pb-8 pt-4 border-t space-y-2 shadow rounded-lg border-${color}-700`}
    >
      <input
        value={titleForm.title ? titleForm.title : "Formulir tanpa judul"}
        onChange={(e) => setTitleForm({ ...titleForm, title: e.target.value })}
        className={`${inputBorder} border-white w-full text-3xl py-3`}
      />
      <input
        placeholder="Deskripsi formulir"
        onChange={(e) => setTitleForm({ ...titleForm, desc: e.target.value })}
        className={`${inputBorder} border-white w-full py-2`}
      />
    </div>
  );
};

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
