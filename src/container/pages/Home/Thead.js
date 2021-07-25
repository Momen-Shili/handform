import React from "react";

export const Thead = ({ contentForms }) => {
  return (
    <>
      <tr className="border-b">
        <th colSpan={contentForms.length} style={{ padding: "20px" }}>
          <div className="flex justify-between">
            <input
              placeholder="cari disini ..."
              style={{ width: "316px" }}
              type="text"
              className="px-4 border border-gray-300 focus:border-red-300 rounded-md focus:shadow-red duration-200 outline-none"
            />
            <div className="space-x-4">
              <select
                style={{ width: "146px", height: "40px" }}
                className="px-4 border border-gray-300 focus:border-red-300 rounded-md focus:shadow-red duration-200 outline-none"
              >
                <option>Semua kategori</option>
              </select>
              <select
                style={{ width: "146px", height: "40px" }}
                className="px-4 border border-gray-300 focus:border-red-300 rounded-md focus:shadow-red duration-200 outline-none"
              >
                <option>Status</option>
              </select>
            </div>
          </div>
        </th>
      </tr>
      <tr className="border-b-2 border-gray-300 text-gray-400 text-left">
        {contentForms.map((el, index) => (
          <th key={index} className="px-6 font-thin" style={{ height: "40px" }}>
            {el.title}
          </th>
        ))}
      </tr>
    </>
  );
};
