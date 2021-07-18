import { AnimatePresence } from "framer-motion";
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

  const deleteForm = (index) => {
    const filter = contentForms.filter((el, idx) => idx !== index);
    setContentForms(filter);
  };

  const createForm = (index) => {
    const arr = contentForms;
    arr.splice(index + 1, 0, { id: Date.now() });
    setContentForms([...arr]);
  };

  return (
    <section style={{ minHeight: "90vh" }}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 py-5 space-y-4  mx-auto"
      >
        {/* title  */}
        <TitleForm
          titleForm={titleForm}
          setTitleForm={setTitleForm}
          createForm={createForm}
        />
        {/* content  */}
        <AnimatePresence exitBeforeEnter>
          {contentForms &&
            contentForms.map((el, index) => (
              <ContentForm
                key={index}
                index={index}
                remove={deleteForm}
                create={createForm}
              />
            ))}
        </AnimatePresence>
      </form>
    </section>
  );
}
