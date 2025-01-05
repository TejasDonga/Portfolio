import logo from '../assets/logo.png';
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" h-20 mb-10 flex items-center justify-between py-6 ">
        <motion.div
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
        className="flex flex-shrink-0 items-center"> 
        <img className="h-16 mx-2 transform hover:scale-125 transition duration-500" src={logo} alt="logo " />
        </motion.div>

        <div className='m-8 flex justify-center items-center gap-4 text-2xl'>

            <a href="https://www.linkedin.com/in/donga-tejas-6735a6282/"target='_blank'>
            <motion.div className='transform hover:text-red-500 duration-200 '
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1}}
            >
            <FaLinkedin /> 
            </motion.div >
            </a>

            <a href="https://github.com/TejasDonga" target='_blank'>
            <motion.div className='transform hover:text-red-500 duration-200 '
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1}}
            >
            <FaGithub />
            </motion.div>
            </a>

            <a href="https://www.instagram.com/lll._.tejas._.patel._._.111?igsh=NXRzbHVjOTRmamh0"target='_blank'>
            <motion.div className='transform hover:text-red-500 duration-200 '
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            >
            <FaInstagram />

            </motion.div>
            </a>

            <a href="https://x.com/Tejaspatel2312?t=2mmrieWqhD15HHWFhtv4-g&s=08" target='_blank'>
            <motion.div className='transform hover:text-red-500 duration-200 '
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3}}
            >
            <FaSquareXTwitter />
            </motion.div>

            </a>
        </div>
    </nav>
  )
}

export default Navbar;
