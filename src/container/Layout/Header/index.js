import { useState } from "react";
import documentIcon from "../../../assets/svg/document.svg";
import { Theme } from "./Theme";
import { Mode } from "./Mode";
import { Account } from "./Account";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOverHide, setOverHide] = useState(true);
  return (
    <header
      className={`${
        isOverHide && "overflow-hidden"
      } bg-white text-gray-600 w-full flex left-0 top-0 fixed items-center justify-between py-3 px-8 z-50`}
    >
      {/* left  */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={documentIcon} alt="logo" className="h-10 w-10" />
        <h1 className="text-2xl">Forms</h1>
      </Link>
      {/* right  */}
      <div className="space-x-6 flex items-center">
        <Theme />
        <Mode />
        <Account setOverHide={setOverHide} />
      </div>
    </header>
  );
}
