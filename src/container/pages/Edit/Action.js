import React, { useContext } from "react";
import duplicateIcon from "../../../assets/svg/duplicate.svg";
import trashIcon from "../../../assets/svg/trash.svg";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";
import { motion } from "framer-motion";
import { contentForms, GlobalState } from "../../config/contextAPI";

export const Action = ({ duplicate, id }) => {
  const { state, dispatch } = useContext(GlobalState);
  const index = state.contentForms.findIndex((el) => el.id === id);

  const createForm = () => {
    const newForm = {
      id: Date.now(),
      title: "",
      desc: undefined,
      options: [],
      inputType: "radio",
    };
    contentForms.splice(index + 1, 0, { ...newForm });
    setTimeout(() => {
      dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
    }, 180);
  };

  const deleteForm = () => {
    contentForms.splice(index, 1);
    setTimeout(
      () => dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] }),
      180
    );
  };

  const animate = (num) => (state.isAnimateForm ? num : 1);

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
            initial={{
              rotate: animate(360),
              x: animate(el.x),
              opacity: animate(0),
            }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{
              delay: animate(0.2),
              type: "spring",
              duration: animate(0.5),
              stiffness: animate(80),
            }}
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
