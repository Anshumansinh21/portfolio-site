import { motion } from 'framer-motion'
motion
import { Briefcase, ChevronRight, Globe, Users, Code, TrendingUp } from 'lucide-react'

const experienceTimeline = [
  {
    company: "Height8 Technologies",
    role: "Software Support Executive",
    duration: "2022 – 2023",
    description: [
      "Began my tech career at 19 while pursuing B.Com.",
      "Supported telecom software and performed basic UI tasks using HTML and CSS.",
      "Interacted with international clients, notably from Ghana.",
    ],
    skills: ["HTML", "CSS", "Client Support"],
    icon: <Users className="text-blue-500" size={20} />
  },
  {
    company: "Augmetic Technosys",
    role: "Project Manager & Frontend Developer",
    duration: "2023 – 2024",
    description: [
      "Handled support and project management single-handedly.",
      "Built websites for clients in Norway and Las Vegas using HTML, CSS, JS, and WordPress.",
      "Delivered end-to-end UI/UX for small business websites across industries.",
    ],
    skills: ["HTML/CSS", "JavaScript", "WordPress", "Project Management"],
    icon: <Globe className="text-green-500" size={20} />
  },
  {
    company: "Add Pearlinfo Pvt. Ltd.",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2024 – Present",
    description: [
      "Transitioned fully into frontend development with modern stacks like React, Tailwind, and Redux.",
      "Built custom software UIs including amusement park and hospitality systems.",
      "Created videos, graphics, and UI mockups for client products and internal tools.",
      "Represented the company at GCCI Gate 2024 with the executive team.",
      "Held a trusted onsite position at Gujarat High Court IT Cell.",
    ],
    skills: ["React", "Tailwind CSS", "Redux", "Figma", "UI/UX Design"],
    icon: <Code className="text-purple-500" size={20} />
  },
]

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-10 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From support executive to frontend developer - my path through the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Career Progression</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Transitioned from technical support to full frontend development in just 2 years, demonstrating rapid skill acquisition and adaptability.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Global Experience</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Worked with international clients from Ghana, Norway, and the USA, developing cross-cultural communication skills.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50">
                <Code className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Technical Growth</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Expanded from basic HTML/CSS to modern React stacks while maintaining design sensibility and user focus.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 hidden lg:block"></div>
          
          {experienceTimeline.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="hidden lg:flex lg:w-32 justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white shadow-lg">
                    {exp.icon}
                  </div>
                </div>
                
                <div className="lg:flex-1 lg:ml-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 rotate-45 bg-white dark:bg-gray-800 border-l border-b border-gray-100 dark:border-gray-700 hidden lg:block"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400 w-4 h-4" />
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Professional Ethos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Ownership & Reliability</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Demonstrated through solo project management and high-trust roles like representing company at GCCI Gate 2024.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Client-Centric Approach</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Experience working with international clients across timezones and cultures, adapting to diverse requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                <Code size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Technical Adaptability</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Continuously expanded skill set from basic web technologies to modern React stacks and design tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Growth Mindset</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Transitioned from non-technical background to proficient developer through self-driven learning and hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience