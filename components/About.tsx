'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll event to set visibility
  const handleScroll = () => {
    const section = document.getElementById('about')
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/3 mb-8 md:mb-0 transition-transform duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <Image
              src="/about-image.jpg"
              alt="Rajan Bagoria working"
              width={400}
              height={400}
              className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`md:w-2/3 md:pl-12 transition-transform duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
          >
            <div className="text-lg text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                I am an enthusiastic Python Developer with over 13 months of professional experience and 6 months of internship experience. My expertise lies in Python, Django, and front-end technologies like HTML5, CSS, and JavaScript.
              </p>
              <p className="mb-4">
                I have a strong foundation in both backend and frontend development, with experience in AI integration and automation. My problem-solving skills, critical thinking, and adaptability make me a valuable asset to any development team.
              </p>
              <p>
                Currently, I am working on AI-driven coaching platforms, showcasing my ability to work with cutting-edge technologies and continuously expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
