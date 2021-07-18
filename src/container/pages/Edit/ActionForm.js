import React, { useContext } from "react";
import { FormContext } from ".";
import duplicateIcon from "../../../assets/svg/duplicate.svg";
import trashIcon from "../../../assets/svg/trash.svg";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";

export const ActionForm = ({ index, duplicate }) => {
  const { state, dispatch } = useContext(FormContext);

  const createForm = (index) => {
    const arr = state.contentForms;
    arr.splice(index + 1, 0, { id: Date.now() });
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] }),
      180
    );
  };

  const deleteForm = (index) => {
    const filter = state.contentForms.filter((el, idx) => idx !== index);
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...filter] }),
      180
    );
  };
  return (
    <div className="border-t py-3 flex justify-end items-center space-x-3">
      <img
        src={duplicateIcon}
        alt="duplicate"
        className="h-6 w-6 cursor-pointer"
        onClick={() => duplicate()}
      />
      <img
        src={plusCircleIcon}
        alt="plus"
        className="h-6 w-6 cursor-pointer"
        onClick={() => createForm(index)}
      />
      <img
        src={trashIcon}
        alt="delete"
        className="h-6 w-6 cursor-pointer"
        onClick={() => deleteForm(index)}
      />
    </div>
  );
};
