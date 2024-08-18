export default function Projects() {
  const projects = [
    {
      title: "Coaching/Mentoring Application",
      description: "Developed versions for Slack and WhatsApp, currently working on a web-based version. Utilized Django, MySQL, FastAPI, and RESTful APIs.",
      tech: ["Django", "MySQL", "FastAPI", "RESTful APIs"]
    },
    {
      title: "Community Event Platform (Eventure)",
      description: "Full-stack community event management platform with features like event creation, chat rooms, and personalized recommendations.",
      tech: ["React", "Next.js", "Django", "Tailwind CSS"],
      url: "https://eventure-example.com"
    },
    {
      title: "Book Recommendation System",
      description: "Developed a collaborative filtering-based book recommendation system with a Flask web application.",
      tech: ["Python", "Flask", "Machine Learning"]
    },
    {
      title: "Movie Recommendation System",
      description: "Created a movie recommendation system using machine learning algorithms and deployed it using Streamlit.",
      tech: ["Python", "Machine Learning", "Streamlit"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-300 text-sm font-medium px-2 py-1 rounded transition-colors duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-600">
                    {tech}
                  </span>
                ))}
              </div>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
