import plusIcon from "../../assets/svg/plus.svg";
// import pencilIcon from "../../assets/svg/pencil.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="w-2/3 py-3 space-y-6  mx-auto">
        <h6 className="font-semibold text-lg">Formulir Terbaru</h6>
        <div className="text-center bg-white shadow-md py-8 rounded-md space-y-2">
          <h6 className="font-semibold text-lg">Belum ada formulir</h6>
          <p className="text-gray-400">Klik + untuk membuat formulir baru</p>
        </div>
      </div>
      <motion.div className="group absolute h-16 w-16 bottom-8 right-8 rounded-full shadow-md bg-white flex items-center justify-center cursor-pointer">
        <motion.img
          whileHover={{ rotate: 90 + 45 }}
          transition={{ transition: 0.5 }}
          // variants={rotate}
          // initial="initial"
          src={plusIcon}
          alt="+"
          className="h-10 w-10 group-hover:hidden*"
        />
        {/* <img
          src={pencilIcon}
          alt="+"
          className="h-7 w-7 hidden group-hover:inline"
        /> */}
      </motion.div>
    </>
  );
}

// const rotate = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: 0,
//     transition: {
//       type: "spring",
//       stifness: 120,
//     },
//   },
// };
