import { useContext, useState } from "react";
import { GlobalState } from "../../config/contextAPI";
import { QuestionContext } from "./Question";

export const Textarea = () => {
  const { state, dispatch } = useContext(GlobalState);
  const id = useContext(QuestionContext);
  const [textarea, setTextarea] = useState("");
  const response = state.response;
  const index = response.findIndex((el) => el.id === id);

  const handleChange = (e) => {
    setTextarea(e.target.value);
    if (index === -1) {
      // id not found
      if (response.length === 0) {
        // because of array is empty
        dispatch({
          type: "CHANGE_RESPONSE",
          value: [{ id, type: "textarea", response: e.target.value }],
        });
      } else {
        // array isnt empty but id doesnt exist
        dispatch({
          type: "CHANGE_RESPONSE",
          value: [
            ...response,
            { id, type: "textarea", response: e.target.value },
          ],
        });
      }
    } else {
      // id found
      response[index] = { ...response[index], response: e.target.value };
      dispatch({
        type: "CHANGE_RESPONSE",
        value: [...response],
      });
    }
  };

  return (
    <textarea
      onChange={(e) => handleChange(e)}
      value={textarea}
      disabled={state.isEdit}
      placeholder="Teks jawaban panjang"
      className={`${
        state.isDark
          ? "bg-gray-100 hover:border-gray-300 border-gray-100"
          : "bg-white hover:border-gray-300 border-white"
      } border-b focus:border-b-2 focus:border-${
        state.color
      }-700 w-full py-2 h-auto resize-none`}
    ></textarea>
  );
};
