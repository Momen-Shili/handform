// import { useContext } from "react";
// import { GlobalState } from "../../config/contextAPI";
import { Button } from "./Button";
import { Default } from "./Default";
import documentIcon from "../../../assets/svg/document.svg";
import dotsIcon from "../../../assets/svg/verticalDots.svg";

export default function Home() {
  // const { state, dispatch } = useContext(GlobalState);
  return (
    <section style={{ minHeight: "90vh" }} className="relative overflow-hidden">
      <div className="w-2/3 py-3 space-y-6 mx-auto">
        {/* <Default /> */}
        <h6 className="font-semibold text-lg text-gray-700">
          Formulir Terbaru
        </h6>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow rounded text-sm py-3 px-5 space-y-1 relative">
            <p className="text-gray-700 font-semibold">Formulir tanpa judul</p>
            <div className="flex items-center space-x-1">
              <img src={documentIcon} alt="form" className="h-5 w-5" />
              <span className="text-xs">Diperbarui 11 juni 1999</span>
            </div>
            <div className="hover:bg-gray-100 absolute -right-1 top-0 p-2 rounded-full duration-200 cursor-pointer ">
              <img src={dotsIcon} alt="dots" className="h-6 w-6" />
            </div>
          </div>
          <div className="bg-white shadow rounded"></div>
          <div className="bg-white shadow rounded"></div>
          <div className="bg-white shadow rounded"></div>
        </div>
      </div>
      <Button />
    </section>
  );
}
