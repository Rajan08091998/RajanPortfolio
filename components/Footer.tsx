import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Rajan Bagoria</p>
            <p className="text-sm">Python Developer | AI Enthusiast</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/rajan-bagoriya-40a760192/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              LinkedIn
            </Link>
            <Link href="https://github.com/Rajan08091998" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              GitHub
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rajan Bagoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}