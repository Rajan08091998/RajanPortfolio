'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll event to set visibility
  const handleScroll = () => {
    const section = document.getElementById('hero')
    const sectionTop = section!.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight * 0.9) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check visibility on component mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id="hero" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-30 dark:from-transparent dark:via-gray-800/30 dark:to-transparent"></div>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-screen relative z-10">
        <div
          className={`md:w-1/2 text-center md:text-left mb-8 md:mb-0 transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <h1 className="text-4xl font-bold mb-4">Rajan Bagoria</h1>
          <h2 className="text-2xl mb-8">Python Developer | AI Enthusiast</h2>
          <p className="text-xl mb-12 max-w-2xl">
            Passionate about creating innovative solutions using Python, Django, and AI technologies.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
        <div
          className={`md:w-1/2 transition-transform duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          <Image
            src="/hero-image.jpg"
            alt="Rajan Bagoria"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}
