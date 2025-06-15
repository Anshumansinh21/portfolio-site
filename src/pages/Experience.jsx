const experiences = [
  {
    title: "Support Executive → Frontend Developer",
    company: "Your Company Name",
    duration: "2022 – 2024",
    details: [
      "Started as a support executive; transitioned into web development.",
      "Built and managed websites with WordPress, HTML, CSS, JS.",
      "Moved to modern stacks like React, Tailwind, Bootstrap.",
      "Designed in Canva & Figma, created marketing videos and content.",
      "Currently learning backend tech (Node.js, Express, MongoDB)."
    ],
  },
  {
    title: "Freelance Projects",
    company: "Clients & Personal Work",
    duration: "2023 – Present",
    details: [
      "Created custom landing pages and business sites using React & Tailwind.",
      "Worked on UI/UX mockups and SEO optimization.",
      "Delivered complete web solutions from setup to deployment."
    ],
  },
]

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-2 border-blue-600 inline-block">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6 relative">
              <span className="absolute left-[-10px] top-1 w-4 h-4 bg-blue-600 rounded-full"></span>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} • {exp.duration}
              </span>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
