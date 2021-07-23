import { useState, useRef } from "react";
import documentIcon from "../../../assets/svg/document.svg";
import dotsIcon from "../../../assets/svg/verticalDots.svg";
import { Dropdown } from "./Dropdown";
import useOutsideClick from "../../Utils/useOutsideClick";

export const Forms = ({ form }) => {
  const [isDropdown, setDropdown] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => isDropdown && setDropdown(false));

  return (
    <div
      key={form.id}
      className="bg-white shadow rounded text-sm py-3 px-5 space-y-2 relative"
    >
      <p className="text-gray-700 font-semibold text-base">{form.title.title}</p>
      <div className="flex items-center space-x-1">
        <img src={documentIcon} alt="form" className="h-5 w-5" />
        <span className="">Diperbarui 11 juni 1999</span>
      </div>
      <div
        ref={ref}
        onClick={() => setDropdown(!isDropdown)}
        className="hover:bg-gray-100 absolute right-1 top-1 p-1 rounded-full duration-200 cursor-pointer "
      >
        <img src={dotsIcon} alt="dots" className="h-5 w-5" />
        <Dropdown isDropdown={isDropdown} id={form.id} />
      </div>
    </div>
  );
};
