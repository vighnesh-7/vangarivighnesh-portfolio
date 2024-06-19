import { motion } from 'framer-motion'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { BsPersonLinesFill } from 'react-icons/bs'

export default function Component() {
  return (
    <div className="absolute max-md:right-0 md:right-16 lg:right-20 max-sm:-top-14 sm:top-0 md:top-32  top-1/2 md:-translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-1 bg-white max-sm:h-14" />
        <motion.a
          className="block text-white my-2"
          target=" _blank"
          href="https://drive.google.com/file/d/1nlW-goB-2KTnY89ankYpyHbrQlzO1sut/view"
          whileHover={{ scale: 1.3, rotate: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <BsPersonLinesFill className="h-7 w-7 my-2 max-sm:h-6 max-sm:w-6 hover:text-gray-400 hover:scale-125 transition ease-in-out duration-200 delay-150 " />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          target=" _blank"
          href="https://github.com/vighnesh-7/"
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <FaGithub className="h-7 w-7 my-2 max-sm:h-6 max-sm:w-6 hover:bg-gray-300 rounded-full hover:text-black hover:scale-125 transition ease-in-out duration-200 delay-150" />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          href="https://www.linkedin.com/in/vighneshvangari/"
          whileHover={{ scale: 1.3, rotate: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <FaLinkedin className="h-7 w-7 my-2 max-sm:h-6 max-sm:w-6 hover:text-blue-500 hover:scale-125 transition ease-in-out duration-200 delay-150" />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          whileHover={{ scale: 1.3, rotate: 10 }}
          href="https://leetcode.com/u/vighnesh_7/"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <SiLeetcode className="h-7 w-7 my-2 max-sm:h-6 max-sm:w-6 hover:text-orange-500 hover:scale-125 transition ease-in-out duration-200 delay-150" />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          href="https://x.com/vighnesh_v7"
          whileHover={{ scale: 1.3, rotate: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <BsTwitterX className="h-7 w-7 my-2 max-sm:h-6 max-sm:w-6" />
        </motion.a>
        <div className="h-16 w-1 bg-white max-sm:h-14" />
      </div>
    </div>
  )
}
