import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Support Executive → Frontend Developer",
    company: "Your Company Name",
    duration: "2022 – 2024",
    details: [
      "Started in support, pivoted into development through passion and upskilling.",
      "Built and managed production-ready websites with WordPress, HTML/CSS, JS.",
      "Transitioned to React + Tailwind for modern, component-based UIs.",
      "Designed digital assets using Canva, Figma and created marketing videos.",
      "Currently exploring backend with Node.js, Express.js & MongoDB."
    ],
  },
  {
    title: "Freelance Web Projects",
    company: "Clients & Personal Brands",
    duration: "2023 – Present",
    details: [
      "Delivered fully responsive landing pages and business websites.",
      "Worked on SEO, performance tuning, and mobile optimization.",
      "Took care of full-cycle delivery — design, development, deployment."
    ],
  },
]

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} • {exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-[15px] text-left">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
