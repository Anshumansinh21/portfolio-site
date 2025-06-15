
const Home = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
        Hey, I'm <span className="text-blue-600">Anshuman</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        A self-taught frontend developer with a strong eye for design, building fast and responsive websites using React.js, TailwindCSS, and more.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"   
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}

export default Home
