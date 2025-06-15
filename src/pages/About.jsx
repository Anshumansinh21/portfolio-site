import { motion } from 'framer-motion'
import { Code2, Brush, LayoutDashboard, Wrench } from 'lucide-react'

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white relative overflow-hidden">

      {/* Background Accents */}
      <motion.div
        className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 inline-block border-b-4 border-blue-600 pb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-lg mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I began my journey in a non-technical field, but curiosity and a passion for building led me into web development. Over the past 2 years, I’ve worked at the intersection of design, code, and storytelling — crafting experiences that are as functional as they are visually appealing.
        </motion.p>

        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I specialize in building responsive user interfaces with <span className="text-blue-600 font-semibold">React.js</span>, <span className="text-blue-600 font-semibold">TailwindCSS</span>, and modern web technologies. I'm also expanding my skillset into backend development using <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express</span>, and <span className="font-semibold">MongoDB</span> to become a full-stack engineer.
        </motion.p>

        {/* Section Subheading */}
        <motion.h3
          className="text-2xl font-semibold mt-10 mb-6 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Wrench className="text-blue-600" /> Tech Stack
        </motion.h3>

        {/* Tech Stack Grid */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {[
            { name: 'React.js', icon: <Code2 /> },
            { name: 'TailwindCSS', icon: <Brush /> },
            { name: 'JavaScript (ES6+)', icon: <Code2 /> },
            { name: 'HTML & CSS', icon: <LayoutDashboard /> },
            { name: 'WordPress', icon: <LayoutDashboard /> },
            { name: 'Figma / Canva', icon: <Brush /> },
            { name: 'Bootstrap', icon: <Code2 /> },
            { name: 'Video Editing', icon: <Wrench /> },
            { name: 'Learning: Node, Express, MongoDB', icon: <Wrench /> },
          ].map((tech, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 hover:text-blue-600 transition"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {tech.icon} {tech.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default About
  