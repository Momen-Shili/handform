import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Action } from "./Action";
import { Dropdown } from "./Dropdown";
import { GlobalState } from "../../config/contextAPI";

export default function Content({ index, title }) {
  const { state } = useContext(GlobalState);
  const [inputType, setInputType] = useState("text");
  const [isDesc, setDesc] = useState(false);
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
      <Input
        index={index}
        title={title}
        inputType={inputType}
        isDesc={isDesc}
      />
      <Action index={index} />
      <Dropdown setInputType={setInputType} setDesc={setDesc} />
    </motion.div>
  );
}
