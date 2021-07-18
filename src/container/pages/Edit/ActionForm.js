import React, { useContext } from "react";
import { FormContext } from ".";
import duplicateIcon from "../../../assets/svg/duplicate.svg";
import trashIcon from "../../../assets/svg/trash.svg";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";
import { motion } from "framer-motion";

export const ActionForm = ({ index, duplicate }) => {
  const { state, dispatch } = useContext(FormContext);

  const createForm = () => {
    const arr = state.contentForms;
    arr.splice(index + 1, 0, { id: Date.now() });
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...arr] }),
      180
    );
  };

  const deleteForm = () => {
    const filter = state.contentForms.filter((el, idx) => idx !== index);
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...filter] }),
      180
    );
  };

  const icons = [
    {
      icon: duplicateIcon,
      alt: "duplicate",
      onClick: duplicate,
      x: 112,
    },
    {
      icon: plusCircleIcon,
      alt: "plus",
      onClick: createForm,
      x: 76,
    },
    {
      icon: trashIcon,
      alt: "remove",
      onClick: deleteForm,
      x: 40,
    },
  ];

  return (
    <div className="border-t py-3 flex justify-end items-center space-x-3">
      {icons.map((el, idx) => (
        <span key={idx}>
          <motion.img
            initial={{ rotate: 360, x: el.x, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{delay: 0.2,type: "spring",duration: 0.5,stiffness: 80,}}
            src={el.icon}
            alt={el.alt}
            className="h-6 w-6 cursor-pointer"
            onClick={() => {
              index === state.contentForms.length - 1
                ? dispatch({ type: "CHANGE_ISANIMATEFORM", value: true })
                : dispatch({ type: "CHANGE_ISANIMATEFORM", value: false });
              el.onClick();
            }}
          />
        </span>
      ))}
    </div>
  );
};
