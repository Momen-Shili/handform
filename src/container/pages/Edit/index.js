import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  const deleteForm = (index) => {
    const filter = contentForms.filter((el, idx) => idx !== index);
    setContentForms([]);
    setTimeout(() => setContentForms([...filter]), 180);
  };

  const createForm = (index) => {
    const arr = contentForms;
    arr.splice(index + 1, 0, { id: Date.now() });
    setContentForms([]);
    setTimeout(() => setContentForms([...arr]), 180);
  };

  const handleChange = (e, index, props) => {
    const arr = contentForms;
    arr[index] = { ...arr[index], [props]: e.target.value };
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
          <div>
            {contentForms &&
              contentForms.map((el, index) => (
                <ContentForm
                  key={index}
                  index={index}
                  title={el.title}
                  remove={deleteForm}
                  create={createForm}
                  handleChange={handleChange}
                />
              ))}
          </div>
        </AnimatePresence>
      </form>
    </section>
  );
}
