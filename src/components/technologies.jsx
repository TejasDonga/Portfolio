import { RiReactjsLine } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconsAnimation = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsAnimation(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconsAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSqlite className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconsAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <motion.div
            variants={iconsAnimation(1.5)}
            initial="initial"
            animate="animate"
            className="relative w-20 h-28 mx-auto"
          >
            <div className="absolute top-0 left-0 bg-[#F24E1E] rounded-full w-12 h-10"></div>
            <div className="absolute top-10 left-0 bg-[#A259FF] rounded-full w-10 h-10"></div>
            <div className="absolute top-10 left-10 bg-[#1ABCFE] rounded-full w-10 h-10"></div>
            <div className="absolute top-20 left-0 bg-[#0ACF83] rounded-full w-10 h-10"></div>
            <div className="absolute top-0 left-10 bg-[#FF7262] w-10 h-12 rounded-full"></div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconsAnimation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconsAnimation(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
