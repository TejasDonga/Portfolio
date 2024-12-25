import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pd-20">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center mb-10">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <div className=" pb-10 ">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="tel:+91 8980316382">{CONTACT.phoneNo}</a>
          </motion.div>
          <br />
          <a href="mailto:">{CONTACT.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
