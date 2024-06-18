import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import { AnimatedTooltip } from './ToolTip'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Loader from '../Loader'

export const HoverCard = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    techStack: {
      id: number
      name: string
      image: string
    }[]
    image: string
    video: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projectTechStack = items.map((item) => item.techStack)

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-4 bg-gradient-to-br from-indigo-900 to-cyan-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <div
            className={`rounded-xl z-50 min-h-52 ${
              hoveredIndex === idx
                ? 'hover:border hover:border-gray-100 transition-colors delay-100 duration-100 '
                : ''
            }`}
          >
            <Card className="bg-[#05283e00] min-h-40">
              <CardTitle id={idx} hoveredIndex={hoveredIndex}>
                {item.title}
              </CardTitle>
              <div className="relative w-full max-sm:h-52 sm:h-96 md:h-56 lg:h-48 xl:h-56 overflow-hidden rounded">
                <AnimatePresence initial={false}>
                  {hoveredIndex === idx ? (
                    item.video !== '' ? (
                      <Suspense fallback={<Loader />}>
                        <motion.video
                          key="video"
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          className="absolute inset-0 object-cover rounded z-[5004] "
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </Suspense>
                    )
                    : (
                      <div className={ `absolute inset-0 flex items-center justify-center bg-black/80 z-[5005] ${ hoveredIndex !== idx && 'hidden' } `}>
                        <span className={` text-white  ${ hoveredIndex !== idx && 'hidden' } `}>Preview not available</span>
                        <img
                      key="image"
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className={`${
                        hoveredIndex === idx && 'hidden'
                      }  absolute inset-0 object-cover rounded z-[5004]`}
                    />
                      </div>
                    )
                  ) : (
                    <motion.img
                      key="image"
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className={`${
                        hoveredIndex == idx && 'hidden '
                      }  absolute inset-0 object-cover rounded z-[5004]`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              <CardDescription>{item.description}</CardDescription>
              <div className="flex justify-between items-center mt-5 mb-3 w-full">
                <div className="flex items-center justify-start">
                  <AnimatedTooltip items={projectTechStack[idx]} />
                </div>
                <div className="flex justify-end text-nowrap font-semibold">
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex items-center"
                  >
                    <motion.div
                      className="flex items-center cursor-pointer select-none"
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live &nbsp; <FaExternalLinkAlt />
                    </motion.div>
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 h-full w-full block rounded-2xl"
                style={{
                  background:
                    'linear-gradient(73deg, rgba(12,63,96,0.9) 0%, rgba(0,51,83,0.9) 36%, rgba(5,40,62,0.9) 80%)',
                }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'rounded-xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative',
        className
      )}
      style={{
        background:
          'linear-gradient(73deg, rgba(12,63,96,1) 0%, rgba(0,51,83,1) 36%, rgba(5,40,62,1) 80%)',
        zIndex: 500,
      }}
    >
      <div className="relative z-[501]">
        <div className="p-3">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
  id,
  hoveredIndex,
}: {
  className?: string
  children: React.ReactNode
  id: number
  hoveredIndex: number | null
}) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide mb-1', className)}>
      <div className="flex justify-between items-center text-xl">
        <div>{children}</div>
        <div className={`${hoveredIndex === id && 'hidden'}  `}>
          <div className="flex items-center justify-end space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'lg:mt-5 md:mt-2 mt-2 indent-9 max-sm:indent-11 text-zinc-200 max-sm:text-sm mb-8  tracking-wide leading-8 text-sm font-[480] text-left break-words max-sm:select-none text-balance',
        className
      )}
    >
      {children}
    </p>
  )
}
