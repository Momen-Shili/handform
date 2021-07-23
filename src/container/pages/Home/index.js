import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../config/contextAPI";
import { getDataFromDatabase } from "../../config/firebase";
import { Button } from "./Button";
import { Forms } from "./Forms";

export default function Home() {
  const [userForms, setUserForms] = useState([]);
  const { state, dispatch } = useContext(GlobalState);

  useEffect(() => {
    const getUserData = async () => {
      const { forms } = await getDataFromDatabase(`users/${state.uid}`);
      if (forms) {
        const data = [];
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(forms).map((key) => {
          const form = { ...forms[key], id: key };
          return data.push(form);
        });
        setUserForms(data);
      }
    };
    state.uid && getUserData();
    return () => {
      setUserForms([]);
      dispatch({ type: "CHANGE_TITLEFORM", value: { title: "", desc: "" } });
      dispatch({ type: "CHANGE_CONTENTFORM", value: [] });
      dispatch({ type: "CHANGE_COLOR", value: "purple" });
    };
  }, [state.uid, setUserForms, dispatch]);

  return (
    <section style={{ minHeight: "90vh" }} className="relative overflow-hidden">
      <div className="w-2/3 py-3 space-y-6 mx-auto">
        <h6 className="font-semibold text-lg text-gray-700">
          Formulir Terbaru
        </h6>
        {!userForms.length ? (
          <div className="text-center bg-white shadow-md py-8 rounded-md space-y-2">
            <h6 className="text-gray-500 font-semibold text-lg">
              Belum ada formulir
            </h6>
            <p className="text-gray-400">Klik + untuk membuat formulir baru</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {userForms.map((form) => (
              <Forms key={form.id} form={form} />
            ))}
          </div>
        )}
      </div>
      <Button />
    </section>
  );
}
