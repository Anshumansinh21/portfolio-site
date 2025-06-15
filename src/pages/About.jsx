const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-blue-600 inline-block">
          About Me
        </h2>
        <p className="text-lg mb-4 leading-relaxed">
          I started my career in a non-technical field, but my passion for tech led me to make a bold switch into development.
          Over the last 2 years, I’ve worked across frontend, design, and content — combining creativity and code to bring ideas to life.
        </p>
        <p className="text-lg mb-4">
          Today, I specialize in building responsive websites and user interfaces using <span className="text-blue-600 font-semibold">React.js</span>, <span className="text-blue-600 font-semibold">TailwindCSS</span>, and more.
          I'm currently learning backend tech like <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express.js</span>, and <span className="font-semibold">MongoDB</span> to become a full-stack developer.
        </p>
        
        <h3 className="text-2xl font-semibold mt-10 mb-4">Tech Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300">
          <li>✅ React.js</li>
          <li>✅ TailwindCSS</li>
          <li>✅ JavaScript (ES6+)</li>
          <li>✅ HTML & CSS</li>
          <li>✅ WordPress</li>
          <li>✅ Canva & Figma</li>
          <li>✅ Bootstrap</li>
          <li>✅ Adobe Premiere / Video tools</li>
          <li>✅ Learning: Node, Express, MongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default About
