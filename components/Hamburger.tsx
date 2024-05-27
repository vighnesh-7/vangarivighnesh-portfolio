import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import { navItems } from '@/assets/data'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(-1)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  }

  return (
    <div className="relative z-[5000] ">
      <button
        className=" focus:outline-none w-10 h-10  backdrop-blur-xl rounded-full p-2 fixed top-4 right-4 z-50 sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={{
          background: 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <GiHamburgerMenu className="h-6 w-6" />
      </button>

      <motion.div
        className="fixed top-0 right-0 h-screen w-[65%] bg-[#13103d] shadow-lg z-50 sm:hidden overflow-hidden"
        variants={menuVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 8px 10px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '10px 0 0 10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <div className=" w-full flex-between flex-row-reverse pt-4 pe-4 ">
          <button
            className=" focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <IoCloseSharp className="h-8 w-8 right-10" />
          </button>
        </div>
        <div className="p-4 ps-3 pe-0">
          <nav>
            <ul className="flex flex-col space-y-6 ">
              {navItems.map((navItem, idx) => (
                <li key={idx} onClick={toggleMenu}>
                  <Link href={navItem.link}>
                    <motion.div
                      whileHover={{ x: -5 }}
                      transition={{ duration: 0.44 }}
                      onClick={() => setActive(idx)}
                      className={` ${
                        active === idx && ' bg-[#262079] p-2  rounded-sm'
                      } relative text-neutral-200 hover:text-neutral-300 p-2 border-b-2 border-blue-700/35 pb-1 hover:border-blue-400 transition-colors duration-300 ease-in-out `}
                    >
                      <span
                        className="font-bold select-none "
                        style={{ fontSize: '14.5px' }}
                      >
                        {navItem.name}
                      </span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40 sm:hidden"
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        onClick={toggleMenu}
      />
    </div>
  )
}

export default HamburgerMenu
