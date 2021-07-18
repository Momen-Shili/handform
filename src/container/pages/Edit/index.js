import { useState } from "react";
import { ContentForm } from "./ContentForm";

import { TitleForm } from "./TitleForm";

export default function Edit() {
  const [titleForm, setTitleForm] = useState({
    id: "title",
    title: "",
    desc: "",
  });

  const [contentForms, setContentForms] = useState([]);
  console.log(contentForms);

  return (
    <section style={{ minHeight: "90vh" }}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 py-5 space-y-4  mx-auto"
      >
        {/* title  */}
        <TitleForm titleForm={titleForm} setTitleForm={setTitleForm} />
        {/* content  */}
        {contentForms.map((el, index) => (
          <ContentForm key={index} />
        ))}
        <div className="space-x-4">
          <button
            onClick={() => setContentForms([...contentForms, Date.now()])}
            className="py-1 px-3 rounded-md bg-indigo-500 text-white"
          >
            push
          </button>
          <button
            onClick={() => {
              const lastIndex = contentForms.length - 1;
              const filter = contentForms.filter(
                (e, index) => index !== lastIndex
              );
              setContentForms(filter);
            }}
            className="py-1 px-3 rounded-md bg-red-500 text-white"
          >
            pop
          </button>
        </div>
      </form>
    </section>
  );
}
