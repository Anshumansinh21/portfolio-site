import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../public/img/test.jpeg';
motion

const titles = [
  "Crafts Code. Commands Attention.",
  "Pixel-Perfect, Lightning-Fast.",
  "Frontend Built for Impact.",
  "React + Design = Magic.",
  "UX-Focused. Detail-Obsessed.",
];


const Home = () => {
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5
    });
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      onMouseMove={handleMouseMove}
    >
  {/* Floating Code Snippets */}
{[
  'const portfolio = () => { return <AwesomeProjects /> }',
  'function createInnovation() { return magic; }',
  '<div className="success">Achievements</div>',
  'while(passion) { keepCoding() }',
  'interface Developer { skills: string[] }'
].map((code, i) => (
  <motion.div
    key={i}
    className="absolute font-mono text-xs opacity-20 dark:opacity-30 pointer-events-none"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }}
    animate={{
      y: [0, (Math.random() - 0.5) * 50],
      x: [0, (Math.random() - 0.5) * 50],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: Math.random() * 15 + 15,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }}
  >
    {code}
  </motion.div>
))}
      {/* Glowing Accent */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-400 opacity-10 blur-3xl pointer-events-none"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

    {/* TEXT BLOCK */}
<motion.div
  className="z-10 max-w-2xl space-y-8 relative"
  initial={{ opacity: 0, y: 40 }}
  animate={{ 
    opacity: 1, 
    y: 0,
    x: mousePosition.x * 10,
  }}
  transition={{ 
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1]
  }}
>

  {/* NAME */}
  <motion.h1
    className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <span className="relative inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-sm">
        I'm Anshuman.
      </span>
      {/* SHIMMER GLOW LINE */}
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-transparent animate-pulse rounded-sm"></span>
    </span>
  </motion.h1>

  {/* SLOGAN */}
  <motion.p
    className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-medium tracking-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend isn't just what I do — it's who I am.</span>
  </motion.p>

  {/* DYNAMIC TITLE */}
  <div className="overflow-hidden h-14">
    <motion.div
      key={titles[index]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-2xl font-medium"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {titles[index]}
      </span>
    </motion.div>
  </div>

  {/* MISSION STATEMENT */}
  <motion.p 
    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    Turning complex ideas into <span className="text-blue-600 font-semibold">clean, blazing-fast interfaces</span>. 
    I design with intent, code with precision, and deliver products that <span className="italic text-blue-500">feel as good as they look</span>. <br />
    From rapid prototypes to production-ready apps — <span className="font-semibold text-blue-700 dark:text-blue-400">I build digital experiences that leave a mark.</span>
  </motion.p>


        {/* Premium Action Buttons */}
        <motion.div 
          className="flex justify-center md:justify-start gap-6 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <NavLink
            to="/contact"
            className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-30 group-hover:opacity-80 transition-opacity duration-500"></span>
          </NavLink>
          
          <NavLink
            to="/projects"
            className="relative px-8 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </NavLink>
        </motion.div>

        {/* Social Proof/Stats */}
        <motion.div 
          className="flex gap-8 pt-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">2+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Profile Image with Floating Effect */}
      <motion.div
        className="z-10 mt-16 md:mt-0 md:ml-16 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: mousePosition.y * 20,
          x: mousePosition.x * 10,
        }}
        transition={{ 
          delay: 0.4, 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="relative">
          <img
            src={ProfileImage}
            alt="Anshuman"
            className="w-64 h-64 md:w-90 md:h-120 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition duration-500"
          />
          <motion.div 
            className="absolute -inset-4 rounded-2xl border-2 border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <div className="absolute -inset-4 rounded-2xl bg-blue-500 opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        {/* Floating Badge */}
        <motion.div
          className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-sm font-semibold">Available for work</div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {/* <div className="text-xs text-gray-500 mb-2">SCROLL DOWN</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-8 border-2 border-gray-400 rounded-full"
        >
          <motion.div
            className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>*/}
      </motion.div> 
    </section>
  );
};

export default Home;