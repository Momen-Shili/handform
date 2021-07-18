import { useState } from "react";
import documentIcon from "../../assets/svg/document.svg";

export default function Header() {
  const [isDropdown, setDropdown] = useState(false);
  return (
    <header className="bg-white text-gray-600 w-full flex left-0 top-0 fixed items-center justify-between py-3 px-8 z-50">
      <div className="flex items-center space-x-2">
        <img src={documentIcon} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl">Forms</h1>
      </div>
      <div
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
    </header>
  );
}
