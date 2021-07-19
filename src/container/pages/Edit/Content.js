import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FormContext } from ".";
import { Input } from "./Input";
import { Action } from "./Action";
import { Dropdown } from "./Dropdown";

export default function Content({ index, title }) {
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
      <Input index={index} title={title} />
      <Action index={index} />
      <Dropdown />
    </motion.div>
  );
}
