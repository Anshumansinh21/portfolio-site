import { motion } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'

const experienceTimeline = [
  {
    company: "Height8 Technologies",
    role: "Software Support Executive",
    duration: "2021 – 2022",
    description: [
      "Began my tech career at 19 while pursuing B.Com.",
      "Supported telecom software and performed basic UI tasks using HTML and CSS.",
      "Interacted with international clients, notably from Ghana.",
    ],
  },
  {
    company: "Augmetic Technosys",
    role: "Project Manager & Frontend Developer",
    duration: "2022 – 2023",
    description: [
      "Handled support and project management single-handedly.",
      "Built websites for clients in Norway and Las Vegas using HTML, CSS, JS, and WordPress.",
      "Delivered end-to-end UI/UX for small business websites across industries.",
    ],
  },
  {
    company: "Add Pearlinfo Pvt. Ltd.",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2023 – Present",
    description: [
      "Transitioned fully into frontend development with modern stacks like React, Tailwind, and Redux.",
      "Built custom software UIs including amusement park and hospitality systems.",
      "Created videos, graphics, and UI mockups for client products and internal tools.",
      "Represented the company at GCCI Gate 2024 with the executive team.",
      "Held a trusted onsite position at Gujarat High Court IT Cell.",
    ],
  },
]

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-10 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey & Experience
        </motion.h2>

        <div className="relative border-l border-blue-200 dark:border-gray-700">
          {experienceTimeline.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-14 ml-6 relative"
            >
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900 z-10" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-blue-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="list-inside mt-3 space-y-2 text-[15px] text-gray-700 dark:text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-1 text-blue-500 dark:text-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
