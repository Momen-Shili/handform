import React, { useRef } from "react";
import useOutsideClick from "../../Utils/useOutsideClick";

export const Account = ({ isDropdown, setDropdown }) => {
  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));
  return (
    <div
      ref={ref}
      onClick={() => setDropdown(!isDropdown)}
      className="h-10 w-10 relative rounded-full border-2 border-gray-200 bg-green-600 flex justify-center items-center cursor-pointer"
    >
      <span className="text-white text-lg">A</span>
      <button
        onClick={(e) => e.stopPropagation()}
        className={`${
          !isDropdown && "hidden"
        } absolute py-2 px-3 -left-5 top-11 border border-gray-300 bg-white rounded shadow-lg hover:bg-indigo-50 outline-none focus:outline-none text-sm`}
      >
        Logout
      </button>
    </div>
  );
};
