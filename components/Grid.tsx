import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const gridItems = [
  {
    id: 1,
    title:
      'Passionate about technology and development. Ready to tackle challenges head-on.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-7  ',
    titleClassName: 'justify-end',
    img: 'https://i.postimg.cc/hvGkps5P/image.png',
    imgClassName:
      ' rounded-lg m-8 max-sm:mx-4 max-sm:my-1 sm:ms-0 mb-0  w-32 h-32 ',
  },
  {
    id: 2,
    title:
      "I'm a passionate second-year IT undergrad at VNRVJIET, constantly enhancing my skills as a web developer.",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-4 lg:row-span-3',
    imgClassName: ' max-md:w-full',
    titleClassName: 'justify-center',
    img: 'https://i.postimg.cc/bNG2Dhwd/image.png',
  },
  {
    id: 4,
    title:
      'Unlock the potential of your ideas with a versatile software expert ready to bring them to life!',
    description: '',
    className: 'md:col-span-3 lg:col-span-2 md:row-span-4',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '',
  },
  {
    id: 3,
    title:
      "Proficient in Java and JavaScript. With a keen interest in hackathons, I'm always eager to push the boundaries of innovation.",
    description: '',
    className: 'md:col-span-3 md:col-span-3 md:row-span-4 py-4 min-h-20 ',
    titleClassName: 'justify-start min-h-20 pe-[125px] max-sm:mb-1',
    img: 'https://i.postimg.cc/DmkTCLkW/image.png',
    imgClassName: ' min-h-32 w-32 m-2 ps-2 max-md:mb-4',
  },
  {
    id: 5,
    title: 'Interested in collaborating on a project?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-4',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full text-center  min-h-10 mt-5',
    img: '',
  },
]

const Grid = () => {
  return (
    <section className="pt-20" id="about">
      <BentoGrid className="xl:relative">
        {gridItems.map((item, index) => (
          <BentoGridItem
            id={item.id}
            key={index}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
