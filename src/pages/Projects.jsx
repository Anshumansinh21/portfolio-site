import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Download, Video } from "lucide-react"

const allProjects = [
  {
    title: "Portfolio Website",
    type: "site",
    image: "/assets/portfolio.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/yourusername/portfolio-site",
    live: "https://yourportfolio.com",
  },
  {
    title: "UI Landing Page",
    type: "site",
    image: "/assets/landing.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/landing-page",
    live: "",
  },
  {
    title: "Somnath Temple",
    type: "site",
    image: "../img/somnath.png",
    tech: ["WordPress", "Elementor"],
    github: "",
    live: "https://somnath-react.netlify.app/",
  },
  {
    title: "Pearl Info",
    type: "site",
    image: "../img/pearlinfo-us.png",
    tech: ["WordPress", "SEO"],
    github: "",
    live: "https://pearlinfo.us",
  },
  {
    title: "My Travel Reel",
    type: "video",
    video: "/assets/travel-reel.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
  },
  {
    title: "Presentation Deck",
    type: "file",
    file: "/assets/pitch-deck.pdf",
    tech: ["Pitch", "PDF"],
    github: "",
    live: "",
  },
  {
    title: "Mountain Image",
    type: "image",
    image: "/assets/mountain.jpg",
    tech: ["Photography", "Canon R6"],
    github: "",
    live: "",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
    },
  }),
}

const categories = ["all", "site", "image", "video", "file"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeCategory)

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Creative Projects
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full border transition text-sm font-medium ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Media */}
              <div className="h-44 w-full overflow-hidden">
                {project.type === "video" && (
                  <video
                    src={project.video}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
                {project.type === "image" || project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : null}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  )}
                  {project.file && (
                    <a
                      href={project.file}
                      download
                      className="flex items-center text-sm text-green-600 hover:text-green-800"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
