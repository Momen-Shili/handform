import { useState, useContext } from "react";
import { GlobalState } from "../../config/contextAPI";
import plusIcon from "../../../assets/svg/plus.svg";

const Text = () => (
  <input
    placeholder="Teks jawaban singkat"
    className={`${inputBorder} border-white w-full py-2`}
  />
);

const TextArea = () => (
  <textarea
    placeholder="Teks jawaban panjang"
    className={`${inputBorder} border-white w-full py-2 h-auto resize-none`}
  ></textarea>
);

const Radio = ({ index }) => {
  const { state, dispatch } = useContext(GlobalState);
  const [options, setOptions] = useState([""]);

  const handleChange = (e, idx) => {
    const opt = options;
    opt[idx] = e.target.value;
    setOptions([...opt]);

    const arr = state.contentForms;
    arr[index] = { ...arr[index], options: [...opt] };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] });
  };

  // console.log("content form", state.contentForms);
  // console.log("option", options);
  return (
    <div>
      {options.map((el, idx) => (
        <div key={idx} className="flex items-center space-x-3 relative group">
          <input value={el} type="radio" disabled className="h-5 w-5" />
          <input
            value={el ? el : ""}
            onChange={(e) => handleChange(e, idx)}
            placeholder="opsi"
            className={`${inputBorder} border-white w-full py-2`}
          />
          {options.length > 1 && (
            <div
              className="absolute right-0 flex justify-end items-center cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
              onClick={() => {
                const filter = options.filter((el, i) => i !== idx);
                setOptions(filter);
              }}
            >
              <img
                src={plusIcon}
                alt="delete"
                className="h-5 w-5 transform rotate-45"
              />
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center space-x-3">
        <input type="radio" disabled className="h-5 w-5" />
        <button
          onClick={() => setOptions([...options, ""])}
          className={`${inputBorder} border-white py-2 text-sm text-gray-400`}
        >
          Tambahkan opsi
        </button>
      </div>
    </div>
  );
};

export { Text, TextArea, Radio };

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
