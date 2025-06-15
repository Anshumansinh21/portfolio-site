const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-300">
        {/* Name or Branding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Anshu — All rights reserved.</p>

        {/* Quick Nav Links (optional) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
