import { useState } from "react";
import documentIcon from "../../../assets/svg/document.svg";
import { Theme } from "./Theme";
import { Mode } from "./Mode";
import { Account } from "./Account";

export default function Header() {
  const [isDropdown, setDropdown] = useState(false);
  return (
    <header
      className={`${
        !isDropdown && "overflow-hidden"
      } bg-white text-gray-600 w-full flex left-0 top-0 fixed items-center justify-between py-3 px-8 z-50`}
    >
      {/* left  */}
      <div className="flex items-center space-x-2">
        <img src={documentIcon} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl">Forms</h1>
      </div>
      {/* right  */}
      <div className="space-x-6 flex items-center">
        <Theme />
        <Mode />
        <Account isDropdown={isDropdown} setDropdown={setDropdown} />
      </div>
    </header>
  );
}
