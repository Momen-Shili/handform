import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../config/contextAPI";
import { Button } from "./Button";
// import { Default } from "./Default";
import documentIcon from "../../../assets/svg/document.svg";
import dotsIcon from "../../../assets/svg/verticalDots.svg";
import { getDataFromDatabase } from "../../config/firebase";

export default function Home() {
  const { state } = useContext(GlobalState);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const { forms } = await getDataFromDatabase(`users/${state.uid}`).catch(
        (e) => console.log(e)
      );
      if (forms) {
        const data = [];
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(forms).map((key) => {
          const form = { ...forms[key], id: key };
          return data.push(form);
        });
        setForms(data);
      }
    };
    state.uid && getUserData();
    return () => setForms([]);
  }, [state.uid]);

  console.log(forms);
  return (
    <section style={{ minHeight: "90vh" }} className="relative overflow-hidden">
      <div className="w-2/3 py-3 space-y-6 mx-auto">
        {/* <Default /> */}
        <h6 className="font-semibold text-lg text-gray-700">
          Formulir Terbaru
        </h6>
        <div className="grid grid-cols-4 gap-4">
          {forms.map((el) => (
            <div
              key={el.id}
              className="bg-white shadow rounded text-sm py-3 px-5 space-y-1 relative"
            >
              <p className="text-gray-700 font-semibold">{el.title.title}</p>
              <div className="flex items-center space-x-1">
                <img src={documentIcon} alt="form" className="h-5 w-5" />
                <span className="text-xs">Diperbarui 11 juni 1999</span>
              </div>
              <div className="hover:bg-gray-100 absolute right-1 top-1 p-1 rounded-full duration-200 cursor-pointer ">
                <img src={dotsIcon} alt="dots" className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button />
    </section>
  );
}
