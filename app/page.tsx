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

import Loader from '@/components/Loader'
import { GoDotFill } from 'react-icons/go'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
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
      <div className="max-w-7xl w-full">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen ">
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
              <div className="text-gray-600 text-xl mb-4">
                'The future belongs to those who believe in the beauty of their
                dreams.'
                <span className="block">- Eleanor Roosevelt</span>
              </div>
              <div className="w-full flex-center">
                <Loader />
              </div>
            </div>
          </div>
        ) : (
          <>
            <MainNavBar navItems={navItems} />
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
