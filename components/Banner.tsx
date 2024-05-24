import { motion } from 'framer-motion'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Component() {
  return (
    <div
      className="absolute max-md:right-0 md:right-16 lg:right-20 max-sm:-top-4 sm:top-0 md:top-32  top-1/2 md:-translate-y-1/2 z-40"
      // whileHover={{ scale: 1.05 }} // Scale up on hover
      // transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-1 bg-white" />
        <motion.a
          className="block text-white my-2"
          target=" _blank"
          href="https://github.com/vighnesh-7/"
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <FaGithub className="h-7 w-7 my-2" />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          href="https://www.linkedin.com/in/vighneshvangari/"
          whileHover={{ scale: 1.3, rotate: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <FaLinkedin className="h-7 w-7 my-2" />
        </motion.a>
        <motion.a
          className="block text-white my-2"
          href="https://x.com/vighnesh_v7"
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <BsTwitterX className="h-7 w-7 my-2" />
        </motion.a>
        <div className="h-16 w-1 bg-white" />
      </div>
    </div>
  )
}
