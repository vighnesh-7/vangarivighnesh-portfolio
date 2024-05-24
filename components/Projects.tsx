import React from 'react'
import { HoverCard } from './ui/HoverCards'
import p1 from '../assets/projects/p1.mp4'
import p2 from '../assets/projects/p2.mp4'
import p3 from '../assets/projects/p3.mp4'

const projectsItems = [
  {
    title: 'LMS-VNRVJIET',
    description:
      'Led the creation of an exclusive LMS platform for our college, overseeing 400 juniors and implementing innovative website functionalities to address the complex challenges faced by students, mentors, and instructors.',
    link: 'https://lms-vnrvjiet.vercel.app/',
    techStack: [
      {
        id: 1,
        name: 'NextJs',
        image: 'https://i.postimg.cc/rw3Gx39y/download.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        image: 'https://i.postimg.cc/jSf5LF3r/image.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        image: 'https://i.postimg.cc/yNYrdwnf/download-2.png',
      },
      {
        id: 4,
        name: 'PostgreSQL',
        image:
          'https://i.postimg.cc/NMxhV1NV/993px-Postgresql-elephant-svg.png',
      },
      {
        id: 5,
        name: 'Prisma ORM',
        image: 'https://i.postimg.cc/jqNnWCD1/image.jpg',
      },
      {
        id: 6,
        name: 'ChartJs',
        image: 'https://i.postimg.cc/NfsNphvQ/idzj34q-GQm.png',
      },
      {
        id: 7,
        name: 'shadcn.ui',
        image: 'https://i.postimg.cc/J41c3bVg/download-1.png',
      },
    ],
    image: 'https://i.postimg.cc/rs6pHW86/video1.png',
    video: p1,
  },
  {
    title: 'StudySphere',
    description:
      'An AI-powered interactive quizzing platform enriched with seamless quiz generation from desired topics or PDFs. Explore modes, share quizzes, track leaderboards, collaborate, and refill tokens for scalable learning experiences.',
    link: 'https://studysphere-ai.vercel.app/',
    techStack: [
      {
        id: 1,
        name: 'NextJS',
        image: 'https://i.postimg.cc/rw3Gx39y/download.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        image: 'https://i.postimg.cc/jSf5LF3r/image.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        image: 'https://i.postimg.cc/yNYrdwnf/download-2.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        image:
          'https://i.postimg.cc/13R8YHvx/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png',
      },
      {
        id: 5,
        name: 'Prisma ORM',
        image: 'https://i.postimg.cc/jqNnWCD1/image.jpg',
      },
      {
        id: 6,
        name: 'OpenAi',
        image:
          'https://i.postimg.cc/9FbMT9CL/openai-chatgpt-logo-icon-free-png.png',
      },
      {
        id: 7,
        name: 'RazorPay',
        image: 'https://i.postimg.cc/85TWNSH5/id1f-W5-Etd-E.jpg',
      },
    ],
    image: 'https://i.postimg.cc/sDdcYNCm/p2.png',
    video: p2,
  },
  {
    title: 'Promptex',
    description:
      'A Dynamic prompt exchange blog platform where users can sign in, create and explore custom prompts.Unleash your creativity, share your ideas, and discover inspiring prompts crafted by our community of writers and artists.',
    link: 'https://project-promptex.vercel.app/',
    techStack: [
      {
        id: 1,
        name: 'NextJS',
        image: 'https://i.postimg.cc/rw3Gx39y/download.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        image: 'https://i.postimg.cc/MHrL2t1s/image.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        image: 'https://i.postimg.cc/yNYrdwnf/download-2.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        image:
          'https://i.postimg.cc/13R8YHvx/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png',
      },
    ],
    image: 'https://i.postimg.cc/FHhVqkRJ/p3.png',
    video: p3,
  },
  // {
  //   title: 'Project 4',
  //   description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley 4',
  //   link: 'https://example.com',
  //   techStack: [{ id: 1, name: 'NextJS' }, { id: 2, name: 'TypeScript' }],
  //   image: 'https://via.placeholder.com/300',
  // video: '../../assets/projects/p1.mp4',
  // },
]

const Projects = () => {
  return (
    <div id="projects" className=" mb-8 mt-8">
      <div>
        <h1 className="text-5xl max-sm:text-4xl font-bold text-center select-none mt-20">
          Projects 🚀
        </h1>
      </div>
      <HoverCard items={projectsItems}></HoverCard>
    </div>
  )
}

export default Projects
