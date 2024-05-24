'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export const MainNavBar = ({
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
      <Link href={navItem.link}>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
          className="relative dark:text-neutral-50 z-50 items-center flex space-x-1 max-sm:space-x-0 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <span className=" sm:block font-semibold select-none text-sm">
            {navItem.name}
          </span>
        </motion.div>
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'flex max-w-fit max-sm:mx-4 max-sm:px-32 absolute top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black/[0.4] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] sm:px-10 py-4  items-center justify-center space-x-7 max-sm:space-x-5',
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
    </div>
  )
}
