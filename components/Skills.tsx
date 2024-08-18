export default function Skills() {
  const skills = [
    "Python", "Django", "Flask", "JavaScript", "React", "Next.js",
    "HTML", "CSS", "Git", "Docker", "RESTful APIs", "SQL",
    "MongoDB", "Pandas", "Machine Learning", "NLP"
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
