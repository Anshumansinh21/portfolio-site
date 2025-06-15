import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../img/myImg.png'; // Update with your actual image

const titles = ['Frontend Developer', 'UI Enthusiast', 'React.js Developer', 'TailwindCSS Designer'];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-12 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          backgroundImage: 'linear-gradient(120deg, #60a5fa, #9333ea, #f59e0b)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Text Content */}
      <motion.div
        className="z-10 max-w-xl space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
          Hey, I'm <span className="text-blue-600">Anshuman</span>
        </h1>

        <motion.div
          key={titles[index]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-blue-600 font-semibold h-8">{titles[index]}</p>
        </motion.div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          A self-taught developer with an eye for design, building fast and responsive websites using React.js, TailwindCSS, and more.
        </p>

        {/* Action Buttons with Routing */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <NavLink
            to="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
          >
            Hire Me
          </NavLink>
          <NavLink
            to="/projects"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition shadow"
          >
            View Projects
          </NavLink>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="z-10 mt-10 md:mt-0 md:ml-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img
          src={ProfileImage}
          alt="Anshuman"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-blue-500 hover:scale-105 transition duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Home;
