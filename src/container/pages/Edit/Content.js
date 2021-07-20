import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Action } from "./Action";
import { Dropdown } from "./Dropdown";
import { GlobalState } from "../../config/contextAPI";

export default function Content({ id }) {
  const { state } = useContext(GlobalState);

  console.log("state", state.contentForms);
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
      <Input id={id} />
      <Action id={id} />
      <Dropdown id={id} />
    </motion.div>
  );
}
