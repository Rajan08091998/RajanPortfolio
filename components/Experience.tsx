export default function Experience() {
  const experiences = [
    {
      title: "Python Django Developer",
      company: "Answer Cloud Technologies",
      period: "July 2023 - Present",
      responsibilities: [
        "Developed and maintained Python-based applications",
        "Implemented automation scripts to streamline tasks",
        "Worked with AI integration tools like WhatsApp, Aisensy, Dialogflow",
        "Created REST APIs and worked on Next.js frontend development",
        "Gained experience with LangChain, React, Node.js, and AI tools"
      ]
    },
    {
      title: "Python Intern",
      company: "Techno Software Technologies",
      period: "April 2022 - October 2022",
      responsibilities: [
        "Contributed to backend and frontend development of a Ticket Management System",
        "Designed and implemented Python modules to optimize processes",
        "Facilitated seamless integration of builds across teams",
        "Gained proficiency in Docker, Git, and basic web technologies"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-colors duration-300">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{exp.title}</h3>
              <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="mb-2">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
