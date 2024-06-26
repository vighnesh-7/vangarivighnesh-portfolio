'use client'
import React, { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNavBar'
import { MainNavBar } from '@/components/ui/MainNavBar'
import Project from '@/components/Projects'
import Contact from '@/components/Contact'
import SkillsSection from '@/components/Skills'
import { navItems } from '@/assets/data'
import {
  frontendTechnologies,
  backendTechnologies,
  databaseTechnologies,
  otherTechnologies,
} from '@/assets/data'
import logo from '../assets/images/logo.svg'
import Loader from '@/components/Loader'
import { GoDotFill } from 'react-icons/go'
import Image from 'next/image'
import HamburgerMenu from '@/components/Hamburger'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(loadingTimeout)
  }, [])

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata',
  })

  return (
    <main className="relative flex-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div
        className={` ${
          isLoading && ' hidden'
        }  absolute max-md:left-1/4 max-md:-top-16 lg:-top-20 md:-top-10 md:contrast-150 lg:contrast-100 left-4 z-[5000] `}
      >
        <Image
          src={logo}
          alt="logo"
          className=" top-0 left-0 max-md:w-52 max-md:h-52 md:w-40 md:h-40 lg:w-64 lg:h-64"
          width={300}
          height={300}
        />
      </div>
      <div className="max-w-7xl w-full overflow-hidden">
        {isLoading ? (
          <div
            className={`flex-center h-screen overflow-hidden ${
              !isLoading && 'hidden'
            } `}
          >
            <div
              className="absolute top-0 md:right-0  rounded-lg p-2 text-center"
              id="clock"
            >
              <p className="time text-5xl ">{currentTime}</p>
              <div className="text-xl flex-center  ">
                <div className=" text-green-600 rounded-full">
                  <GoDotFill />
                </div>
                India
              </div>
            </div>
            <div className="text-center">
              <div className=" flex-center text-5xl mx-5 ">
                {<Image src={logo} alt="logo" width={500} height={500} />}
              </div>
              <div className="w-full mt-12 flex-center">
                <Loader />
              </div>
            </div>
          </div>
        ) : (
          <>
            <MainNavBar navItems={navItems} className=" max-sm:hidden" />
            <HamburgerMenu />
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <Project />
            <SkillsSection
              frontendTechnologies={frontendTechnologies}
              backendTechnologies={backendTechnologies}
              databaseTechnologies={databaseTechnologies}
              otherTechnologies={otherTechnologies}
            />
            <Contact />
          </>
        )}
      </div>
    </main>
  )
}
