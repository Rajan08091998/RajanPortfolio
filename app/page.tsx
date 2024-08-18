import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

