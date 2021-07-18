import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FormContext } from ".";
import { InputForm } from "./InputForm";
import { ActionForm } from "./ActionForm";
import { DropdownForm } from "./DropdownForm";

export default function ContentForm({ index, title }) {
  const { state } = useContext(FormContext);
  return (
    <motion.div
      initial={{ y: state.isAnimateForm ? 150 : 0 }}
      animate={{ y: 0 }}
      exit={{
        y: state.isAnimateForm ? 150 : 0,
        transition: { ease: "easeIn", type: "tween", duration: 0.2 },
      }}
      className={`${state.isDropdown && "z-10"}
        bg-white px-8 border-t shadow rounded-lg relative `}
    >
      <InputForm index={index} title={title} />
      <ActionForm index={index} />
      <DropdownForm />
    </motion.div>
  );
}
