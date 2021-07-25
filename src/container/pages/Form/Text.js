import { useContext, useState } from "react";
import { GlobalState } from "../../config/contextAPI";
import { QuestionContext } from "./Question";

export const Text = () => {
  const { state, dispatch } = useContext(GlobalState);
  const [text, setText] = useState("");
  const id = useContext(QuestionContext);
  const response = state.response;
  const index = response.findIndex((el) => el.id === id);

  const handleChange = (e) => {
    setText(e.target.value);
    if (index === -1) {
      // id not found
      if (response.length === 0) {
        // because of array is empty
        dispatch({
          type: "CHANGE_RESPONSE",
          value: [{ id, type: "text", response: e.target.value }],
        });
      } else {
        // array isnt empty but id doesnt exist
        dispatch({
          type: "CHANGE_RESPONSE",
          value: [...response, { id, type: "text", response: e.target.value }],
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
    <input
      onChange={(e) => handleChange(e)}
      value={text}
      disabled={state.isEdit}
      placeholder="Teks jawaban singkat"
      className={`${
        state.isDark
          ? "bg-gray-100 hover:border-gray-300 border-gray-100"
          : "bg-white hover:border-gray-300 border-white"
      } border-b focus:border-b-2 focus:border-${state.color}-700 w-full py-2`}
    />
  );
};
