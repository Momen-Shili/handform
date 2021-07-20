import { useContext } from "react";
import { contentForms, GlobalState } from "../../config/contextAPI";
import plusIcon from "../../../assets/svg/plus.svg";
import { QuestionContext } from "./Question";

const Text = () => (
  <input
    disabled
    placeholder="Teks jawaban singkat"
    className={`${inputBorder} border-white w-full py-2`}
  />
);

const TextArea = () => (
  <textarea
    disabled
    placeholder="Teks jawaban panjang"
    className={`${inputBorder} border-white w-full py-2 h-auto resize-none`}
  ></textarea>
);

const Radio = () => {
  const id = useContext(QuestionContext);
  const { dispatch } = useContext(GlobalState);

  const index = contentForms.findIndex((el) => el.id === id);
  const options = contentForms[index] && contentForms[index].options;

  const saveData = () => {
    contentForms[index] = { ...contentForms[index], options: [...options] };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };

  return (
    <div>
      {options.map((el, idx) => (
        <div key={idx} className="flex items-center space-x-3 relative group">
          <input value={el} type="radio" disabled className="h-5 w-5" />
          <input
            value={el ? el : ""}
            onChange={(e) => {
              options[idx] = e.target.value;
              saveData();
            }}
            placeholder={`opsi ${idx + 1}`}
            className={`${inputBorder} border-white w-full py-2`}
          />
          {options.length > 1 && (
            <div
              className="absolute right-0 flex justify-end items-center cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
              onClick={() => {
                options.splice(idx, 1);
                saveData();
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
          onClick={() => {
            options.push("");
            saveData();
          }}
          className={`${inputBorder} border-white py-2 text-gray-400`}
        >
          Tambah opsi
        </button>
      </div>
    </div>
  );
};

const CheckBox = () => {
  const id = useContext(QuestionContext);
  const { dispatch } = useContext(GlobalState);

  const index = contentForms.findIndex((el) => el.id === id);
  const options = contentForms[index] && contentForms[index].options;

  const saveData = () => {
    contentForms[index] = { ...contentForms[index], options: [...options] };
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };

  return (
    <div>
      {options.map((el, idx) => (
        <div key={idx} className="flex items-center space-x-3 relative group">
          <input value={el} type="checkbox" disabled className="h-5 w-5" />
          <input
            value={el ? el : ""}
            onChange={(e) => {
              options[idx] = e.target.value;
              saveData();
            }}
            placeholder={`opsi ${idx + 1}`}
            className={`${inputBorder} border-white w-full py-2`}
          />
          {options.length > 1 && (
            <div
              className="absolute right-0 flex justify-end items-center cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
              onClick={() => {
                options.splice(idx, 1);
                saveData();
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
        <input type="checkbox" disabled className="h-5 w-5" />
        <button
          onClick={() => {
            options.push("");
            saveData();
          }}
          className={`${inputBorder} border-white py-2 text-gray-400`}
        >
          Tambah opsi
        </button>
      </div>
    </div>
  );
};

export { Text, TextArea, Radio, CheckBox };

const color = "pink";
const inputBorder = `hover:border-gray-300 border-white border-b focus:border-b-2 focus:border-${color}-700`;
