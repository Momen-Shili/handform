import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { GlobalState } from "../../config/contextAPI";
import Content from "./Content";
import Title from "./Title";

export default function Edit() {
  const { state } = useContext(GlobalState);
  return (
    <section style={{ minHeight: "90vh" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state.contentForms);
        }}
        className="w-11/12 lg:w-1/2 py-5 space-y-4 mx-auto"
      >
        <Title />
        <AnimatePresence>
          {state.contentForms &&
            state.contentForms.map((el, index) => (
              <Content key={index} index={index} title={el.title} />
            ))}
        </AnimatePresence>
        <div className="flex justify-end py-3">
          <button
            type="submit"
            className="tracking-wide bg-white shadow rounded-md py-2 px-5"
          >
            SIMPAN
          </button>
        </div>
      </form>
    </section>
  );
}
