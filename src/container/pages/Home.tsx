import plusIcon from "../../assets/svg/plus.svg";
import pencilIcon from "../../assets/svg/pencil.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Home() {
  const { push } = useHistory();
  const [isHover, setHover] = useState(false);
  return (
    <section>
      <div className="w-2/3 py-3 space-y-6  mx-auto">
        <h6 className="font-semibold text-lg">Formulir Terbaru</h6>
        <div className="text-center bg-white shadow-md py-8 rounded-md space-y-2">
          <h6 className="font-semibold text-lg">Belum ada formulir</h6>
          <p className="text-gray-400">Klik + untuk membuat formulir baru</p>
        </div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100,transition:{ease:"easeInOut"} }}
        transition={{ type: "spring", stiffness: 150 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => push("/edit")}
        className="absolute h-16 w-16 bottom-8 right-8 rounded-full shadow-md bg-white"
      >
        <div className="h-full w-full absolute left-0 top-0 flex items-center justify-center cursor-pointer">
          <img
            src={plusIcon}
            alt="+"
            className={`${
              !isHover
                ? "rotate-0 translate-y-0 opacity-100 delay-100"
                : "rotate-45 opacity-20 invisible"
            } transform duration-100 h-10 w-10`}
          />
        </div>
        <div className="h-full w-full absolute left-0 top-0 flex items-center justify-center cursor-pointer">
          <img
            src={pencilIcon}
            alt="+"
            className={`${
              isHover
                ? "rotate-0 translate-y-0 opacity-100 delay-100"
                : "-rotate-45 opacity-20 invisible"
            } transform duration-100 h-7 w-7`}
          />
        </div>
      </motion.div>
    </section>
  );
}
