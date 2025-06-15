const projects = [
  {
    title: "Portfolio Website",
    image: "/assets/portfolio.png", // optional, can use placeholder for now
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/yourusername/portfolio-site",
    live: "https://yourportfolio.com",
  },
  {
    title: "Business Website",
    image: "/assets/business.png",
    tech: ["WordPress", "Elementor"],
    github: "",
    live: "https://clientwebsite.com",
  },
  {
    title: "UI Landing Page",
    image: "/assets/landing.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/landing-page",
    live: "",
  },
]

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-2 border-blue-600 inline-block">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                  {project.tech.join(", ")}
                </p>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-green-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
