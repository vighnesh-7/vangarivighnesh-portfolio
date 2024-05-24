'use client'
import { cn } from '@/utils/cn'
import { BackgroundGradientAnimation } from './BackgroundGradient'
import confetti from '@/assets/confetti.json'
import Lottie from 'react-lottie'
import { useState } from 'react'
import { HoverBorderGradient } from './HeroButton'
import { IconCopy, IconCopyCheck } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8  mx-auto ',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number
  className?: string
  title: string
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const router = useRouter()
  const [copied, setCopied] = useState<boolean>(false)
  const handleCopy = () => {
    const text = 'vangarivighnesh@gmail.com'
    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 5000)

    router.push('/#about')
  }

  return (
    <div
      className={cn(
        `row-span-1 relative rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border dark:border-white justify-between flex flex-col space-y-4 overflow-hidden ${
          id === 1 && 'min-h-40 !grid '
        }`,
        className
      )}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        background:
          'linear-gradient(73deg, rgba(22,53,125,1) 0%, rgba(11,22,99,1) 36%, rgba(5,14,80,1) 80%)',
      }}
    >
      <div className={`h-full`}>
        <div
          className={`absolute right-0 h-full -bottom-48 ${
            id === 5 && 'w-full opacity-85'
          } ${
            id === 1 &&
            'left-0 h-72 max-md:w-72 top-0 -bottom-90 min-h-40 flex-between w-full '
          } ${id === 2 && 'right-0 contrast-125 left-0 -top-8 -bottom-90'}
          ${
            id === 3 &&
            'right-0 top-0 md:bottom-0 max-md:-top-3 max-md:pb-3 max-md:pt-1'
          }`}
        >
          {img && id !== 1 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
          {id == 1 && (
            <div className="grid grid-cols-3 gap-3 group-hover/bento:translate-x-2 transition duration-200 relative">
              <div className="">
                <img
                  src={img}
                  alt={img}
                  height={100}
                  width={100}
                  className={cn(
                    imgClassName,
                    'object-cover object-center col-span-1'
                  )}
                />
              </div>
              <div className="font-semibold m-4 p-2 text-sm lg:text-lg w-full z-10 drop-shadow-[0_2.9px_1.5px_rgba(0,0,0,1)] col-span-2">
                {title}
              </div>
            </div>
          )}
        </div>
        {id == 5 && (
          <div className="relative">
            <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0">
              <div className="absolute flex items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-20 flex flex-col p-6 ${
              id === 2 && 'pt-0 pb-20'
            }`
          )}
        >
          <div className="font-serif md:max-w-32 text-sm z-10 lg:text-base md:text-xs">
            {description}
          </div>
          <div
            className={`font-semibold text-sm lg:text-lg w-full z-10 ${
              id == 5 && 'text-center mx-auto'
            } ${id == 2 && 'text-start my-0'}`}
          >
            <p
              className={cn(
                `${id === 1 && 'invisible'} ${
                  id === 2 &&
                  'backdrop-blur-[1.5px] drop-shadow-[0.5px_1.6px_1px_rgba(0,0,0,1)]'
                } drop-shadow-[0_2.9px_1.5px_rgba(0,0,0,1)]`,
                titleClassName
              )}
            >
              {title}
            </p>
            {id == 5 && (
              <div className="mt-5 z-50 w-full relative">
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    height={200}
                    width={400}
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: confetti,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <HoverBorderGradient
                    onClick={handleCopy}
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-zinc-900 md:font-semibold bg-white text-black text-xs lg:text-sm text-center dark:text-white select-none flex-center space-x-4"
                  >
                    {copied ? (
                      <IconCopyCheck className="w-5 h-5" />
                    ) : (
                      <IconCopy className="w-5 h-5" />
                    )}{' '}
                    {copied ? ' Email copied!' : ' Copy my email'}
                  </HoverBorderGradient>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
