'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import KeyboardAnimated from '../assets/images/keyboardAnimated.svg'
import MagneticEffect from './MagneticEffect'

const SkillCategory = ({
  category,
  technologies,
  Icon,
}: {
  category: string
  technologies: { name: string; logoUrl: string }[]
  Icon: any
}) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    }}
    transition={{ duration: 0.3 }}
    className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg dark:border-gray-800"
  >
    <h3 className="text-xl select-none font-bold text-gray-300 mb-4">
      {category}
    </h3>
    <div className="grid lg:grid-cols-8 sm:grid-cols-5 max-sm:grid-cols-4 max-sm:gap-5 sm:gap-6 lg:gap-5">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <MagneticEffect>
            <Image
              alt={tech.name}
              src={tech.logoUrl}
              width={65}
              height={65}
              className="rounded-full max-sm:w-12 max-sm:h-12 bg-gray-700 p-[6px] object-cover object-top"
            />
          </MagneticEffect>
          <span className="text-sm max-sm:text-xs font-medium text-gray-300 select-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
)

const Component = ({
  frontendTechnologies,
  backendTechnologies,
  databaseTechnologies,
  otherTechnologies,
}: {
  frontendTechnologies: { name: string; logoUrl: string }[]
  backendTechnologies: { name: string; logoUrl: string }[]
  databaseTechnologies: { name: string; logoUrl: string }[]
  otherTechnologies: { name: string; logoUrl: string }[]
}) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-white min-h-screen"
      id="skills"
    >
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-5xl  max-sm:text-4xl select-none font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-300">
          My Skills
        </h1>
        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed select-none lg:text-base/relaxed xl:text-xl/relaxed">
          Explore my full-stack expertise across Frontend, Backend, and Database
          technologies.
        </p>
      </div>
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/3 flex justify-center relative dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Image
            src={KeyboardAnimated}
            alt="KeyboardAnimated"
            width={500}
            height={500}
            className="max-sm:hidden"
          />
        </div>
        <div className="md:w-2/3 grid grid-cols-1 gap-8">
          <SkillCategory
            category="Frontend"
            technologies={frontendTechnologies}
            Icon={motion.img}
          />
          <SkillCategory
            category="Backend"
            technologies={backendTechnologies}
            Icon={motion.img}
          />
          <SkillCategory
            category="Database"
            technologies={databaseTechnologies}
            Icon={motion.img}
          />
          <SkillCategory
            category="Other Technologies"
            technologies={otherTechnologies}
            Icon={motion.img}
          />
        </div>
      </div>
    </section>
  )
}

export default Component
