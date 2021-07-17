import { useState } from "react";

export default function Edit() {
  const [inputForms, setInputForms] = useState({
    headTitle: "Formulir tanpa judul",
    contentTitle: "Pertanyaan tanpa judul",
  });
  console.log(inputForms)
  return (
    <section style={{ minHeight: "90vh" }} className="text-gray-700">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 py-5 space-y-4  mx-auto"
      >
        {/* title  */}
        <div
          style={{ borderTopWidth: "10px" }}
          className={`bg-white px-8 pb-8 pt-4 border-t space-y-2 shadow rounded-lg border-${color}-700`}
        >
          <input
            id="headTitle"
            value={inputForms.headTitle}
            onChange={(e) =>
              setInputForms({ ...inputForms, [e.target.id]: e.target.value })
            }
            className={`${inputBorder} w-full text-3xl py-3`}
          />
          <input
            placeholder="Deskripsi formulir"
            className={`${inputBorder} w-full py-2`}
          />
        </div>
        {/* content  */}
        <div className="bg-white px-8 pb-8 pt-4 border-t space-y-2 shadow rounded-lg">
          <input
            id="random"
            value={inputForms.contentTitle}
            onChange={(e) =>
              setInputForms({ ...inputForms, [e.target.id]: e.target.value })
            }
            className={`${inputBorder} w-full text-3xl py-3`}
          />
          <input
            placeholder="Deskripsi formulir"
            className={`${inputBorder} w-full py-2`}
          />
        </div>
      </form>
    </section>
  );
}

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
