import { IoMailOpen } from 'react-icons/io5';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-xl" src={aboutImg} alt="Aboutimg" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6 mx-6 ">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About