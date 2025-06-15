import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Portfolio Website",
    image: "/assets/portfolio.png",
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
  {
    title: "Pearl Info",
    image: "/assets/pearlinfo.png", // Replace with actual
    tech: ["WordPress", "SEO"],
    github: "",
    live: "https://pearlinfo.us",
  },
  {
    title: "Spro Cloud",
    image: "/assets/sprocloud.png", // Replace with actual
    tech: ["WordPress", "Hosting"],
    github: "",
    live: "https://spro.cloud",
  },
  {
    title: "CMS Aero Aviation",
    image: "/assets/cmsaero.png", // Replace with actual
    tech: ["CMS", "Corporate Design"],
    github: "",
    live: "https://cmsaeroaviation.com",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
    },
  }),
}

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-blue-600 inline-block"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] group relative overflow-hidden"
            >
              {/* Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                {/* Tech Tags */}
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

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Site
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
