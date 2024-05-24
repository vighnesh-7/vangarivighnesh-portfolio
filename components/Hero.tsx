'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { ShimmerButton } from './ui/ShimmerButton'
import BannerLinks from './Banner'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="pt-20 pb-40" id="/">
      <div>
        <div className="h-screen w-full dark:bg-gray-950 bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.08] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <div className="flex justify-center relative z-10 my-20">
        <div className="max-w-[90vw] sm:max-w-2xl lg:max-w-[60vw] flex-center text-start flex-col">
          <div>
            <h2 className="relative uppercase tracking-wider text-4xl sm:text-6xl text-start text-sky-200 max-w-100">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-0 max-sm:left-2 sm:left-2 lg:-left-20 -left-16  text-xl sm:text-2xl text-gray-50 mb-16 select-none"
              >
                Hey there 👋,
              </motion.span>
              <br />
              <div className="mt-1">
                <span className="me-3 normal-case text-gray-50">I&apos;m</span>
                Vighnesh
              </div>
            </h2>

            <div>
              <TextGenerateEffect
                words="Full Stack Web Developer"
                className="lg:text-6xl max-sm:text-3xl sm:text-4xl text-start md:text-3xl text-[45px]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
              className="text-center w-full h-12 mt-5"
            >
              <Link href="/#projects">
                <ShimmerButton
                  title="Show my work "
                  icon=" 🚀"
                  position="right"
                />
              </Link>
            </motion.div>
          </div>
        </div>
        <BannerLinks />
      </div>
    </div>
  )
}

export default Hero
