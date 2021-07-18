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
      variants: {
        initial: {
          x: 92,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: { delay: 0.2 },
        },
      },
    },
    {
      icon: plusCircleIcon,
      alt: "plus",
      onClick: createForm,
      variants: {
        initial: {
          x: 56,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: { delay: 0.2 },
        },
      },
    },
    {
      icon: trashIcon,
      alt: "remove",
      onClick: deleteForm,
      variants: {
        initial: {
          x: 20,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: { delay: 0.2 },
        },
      },
    },
  ];
  return (
    <div className="border-t py-3 flex justify-end items-center space-x-3">
      {icons.map((el, index) => (
        <span key={index}>
          <motion.img
            variants={el.variants}
            initial="initial"
            animate="animate"
            src={el.icon}
            alt={el.alt}
            className="h-6 w-6 cursor-pointer"
            onClick={() => el.onClick()}
          />
        </span>
      ))}
    </div>
  );
};
