'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { setTimeout } from 'timers'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }

    setTimeout(() => {
      setVisible(false)
    }, 6000)
  })

  const NavLink = ({
    id,
    navItem,
  }: {
    id: number
    navItem: {
      link: string
      name: string
    }
  }) => {
    return (
      <Link href={navItem.link} onClick={() => setVisible(false)}>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
          className="relative dark:text-neutral-50 z-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <span className="sm:block font-semibold text-sm select-none">{navItem.name}</span>
        </motion.div>
      </Link>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'max-sm:hidden flex max-w-fit max-sm:mx-4 max-sm:px-32 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[50000] px-10 py-4  items-center justify-center space-x-7',
          className
        )}
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(2.5px)',
          WebkitBackdropFilter: 'blur(2.5px)',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        {navItems.map((navItem, idx) => (
          <NavLink key={idx} id={idx} navItem={navItem} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
