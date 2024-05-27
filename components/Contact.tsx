'use client'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { RiMailSendLine } from 'react-icons/ri'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [hasSentMail, setHasSentMail] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasSentMailBefore = localStorage.getItem('contacted')
    if (hasSentMailBefore) {
      setHasSentMail(true)
    }
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill all the fields.')
      return
    }
    toast.loading('Sending message...')
    setLoading(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: 'Vighnesh',
          from_email: form.email,
          to_email: 'vangarivighnesh@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setLoading(false)
        toast.dismiss()
        setForm({ name: '', email: '', message: '' })
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4 flex items-center">
              <span
                role="img"
                aria-label="Handshake emoji"
                className="text-4xl mr-4"
              >
                🤝
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Thank you. I will get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
        setHasSentMail(true)
        localStorage.setItem('contacted', 'true')
        router.refresh()
      })
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white"
      id="contact"
    >
      <div className="text-center">
        <h2 className="text-5xl  max-sm:text-4xl font-bold mt-0 mb-4 select-none">
          Contact
        </h2>
      </div>
      {hasSentMail ? (
        <div className="p-6 rounded-lg bg-white/10 shadow-lg backdrop-blur-md max-w-lg w-full flex items-center justify-center">
          <div className="text-center">
            <span role="img" aria-label="Handshake emoji" className="text-5xl">
              🤝
            </span>
            <p className="text-2xl mt-3 font-semibold text-gray-300">
              Thank you for your message!
            </p>
            <p className="text-gray-400 mt-2">
              You have already sent a message. I will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-lg bg-white/10 shadow-lg backdrop-blur-md max-w-lg w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="w-full">
              <p className=" indent-2 text-2xl flex items-center justify-start gap-2   font-semibold mb-4 select-none bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-gray-50 to-white/40">
                Get In Touch{' '}
                <RiMailSendLine className=" h-7 w-7 text-gray-400" />
              </p>
              <label className="flex flex-col text-start justify-start">
                <span className="text-gray-300 font-bold mb-2">Your Name</span>
                <input
                  type="text"
                  autoComplete="on"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-gray-800 font-medium border-b-2 border-indigo-500 focus:border-2 focus:border-indigo-600 py-4 px-6 placeholder:text-gray-400 rounded-lg text-white outline-none transition-colors duration-300 focus:bg-gray-700"
                  placeholder="What's your name?"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col text-start justify-start">
                <span className="text-gray-300 font-bold mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="on"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-gray-800 font-medium border-b-2 border-indigo-500 focus:border-2 focus:border-indigo-600 py-4 px-6 placeholder:text-gray-400 rounded-lg text-white outline-none transition-colors duration-300 focus:bg-gray-700"
                  placeholder="What's your email?"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col text-start justify-start">
                <span className="text-gray-300 font-bold mb-2">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  autoComplete="on"
                  onChange={handleChange}
                  className="bg-gray-800 font-medium border-b-2 border-indigo-500 focus:border-2 focus:border-indigo-600 py-4 px-6 placeholder:text-gray-400 rounded-lg text-white outline-none transition-colors duration-300 focus:bg-gray-700 resize-none"
                  placeholder="What do you want to say?"
                />
              </label>
            </div>
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-600"
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </form>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-cyan-900/80 -z-10" />
    </div>
  )
}

export default Contact
