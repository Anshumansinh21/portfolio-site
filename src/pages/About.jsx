import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Brush,
  LayoutDashboard,
  Wrench,
  Trophy,
  Globe,
  ArrowRight,
  Medal,
  Shield,
  Target,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const techItems = [
    { name: 'HTML / CSS', icon: <Code2 className="text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <Code2 className="text-yellow-400" /> },
    { name: 'Bootstrap', icon: <Code2 className="text-purple-500" /> },
    { name: 'TailwindCSS', icon: <Code2 className="text-cyan-400" /> },
    { name: 'React.js / Redux', icon: <Code2 className="text-blue-400" /> },
    { name: 'WordPress', icon: <Code2 className="text-blue-700" /> },
    { name: 'Figma / Canva', icon: <Brush className="text-pink-500" /> },
    { name: 'Git & GitHub', icon: <Code2 className="text-gray-800 dark:text-gray-200" /> },
    { name: 'Video Editing Suite', icon: <Brush className="text-red-500" /> },
  ];

  const learningItems = [
    { name: 'MySQL / MongoDB', icon: <Wrench className="text-blue-400" /> },
    { name: 'Node.js + Express', icon: <Wrench className="text-green-500" /> },
    { name: 'API Development', icon: <Wrench className="text-purple-400" /> },
    { name: 'Next.js', icon: <Wrench className="text-black dark:text-white" /> },
    { name: 'AWS Deployment', icon: <Wrench className="text-orange-500" /> },
    { name: 'SEO & Analytics', icon: <Wrench className="text-blue-600" /> },
  ];

  return (
    <section 
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Particle Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 dark:bg-purple-600 opacity-20"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 100) - 50],
              x: [0, (Math.random() * 60) - 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div> */}

      {/* Animated Background Accents */}
      <motion.div
        className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-10 dark:opacity-20 blur-3xl rounded-full"
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-10 dark:opacity-20 blur-3xl rounded-full"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -20, 0]
        }}
        transition={{ repeat: Infinity, duration: 9 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading with animated underline */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 inline-block"
            variants={item}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

       {/* Story Section */}
<motion.div
  className="grid md:grid-cols-1 gap-10 mb-20"
  initial="hidden"
  animate={controls}
  variants={container}
>
  {/* My Journey */}
  <motion.div variants={item}>
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-transform duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <LayoutDashboard className="text-blue-600 dark:text-blue-300" size={26} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Journey</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        Hi, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Rathore Anshumansinh</span>, a front-end developer with a creative mindset and a passion for building user-friendly digital experiences. My journey into tech began with curiosity and persistence—not with a computer science degree, but with the drive to learn and create.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        While pursuing my <span className="font-semibold underline decoration-blue-500">B.Com from Gujarat University</span>, I took my first step into the IT world at just <span className="font-bold text-yellow-600 dark:text-yellow-400">19 years old</span>, working as a Software Support Executive at <span className="font-semibold text-blue-600 dark:text-blue-400">Height8 Technologies</span>. What started as a support role gradually evolved into a career in UI/UX design and front-end development.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        From there, I moved through roles at <span className="font-semibold text-purple-600 dark:text-purple-400">Augmetic Technosys</span> and <span className="font-semibold text-green-600 dark:text-green-400">Add Pearlinfo Pvt. Ltd.</span>, sharpening my skills in HTML, CSS, JavaScript, and React. Over time, I shifted fully into development, taking full ownership of front-end projects and exploring modern design and dev tools.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-auto">
        Currently, I’m expanding my skill set into full-stack development, focusing on Node.js and backend technologies.
      </p>
    </motion.div>
  </motion.div>

  {/* Professional Experience */}
  <motion.div variants={item}>
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-transform duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <Zap className="text-purple-600 dark:text-purple-300" size={26} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Professional Experience</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        With over <span className="font-bold">2 years</span> in the tech industry, I’ve grown from software support roles to full-time front-end development and UI/UX design.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        I’ve worked with companies like <span className="font-semibold text-blue-600 dark:text-blue-400">Height8 Technologies</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Augmetic Technosys</span>, and <span className="font-semibold text-green-600 dark:text-green-400">Add Pearlinfo Pvt. Ltd.</span>, handling diverse projects for clients across the <span className="font-bold">USA</span>, <span className="font-bold">Norway</span>, and <span className="font-bold">Ghana</span>.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        My expertise includes <span className="font-semibold">HTML, CSS, JavaScript, React, WordPress</span>, and design tools like <span className="font-semibold">Figma</span> and <span className="font-semibold">Canva</span>. I’ve managed complete development cycles, created promotional content, and worked closely with clients, demonstrating strong professionalism and ownership throughout.
      </p>
    </motion.div>
  </motion.div>
</motion.div>


       

        {/* Tech Stack Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.div variants={item}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl shadow-lg mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Wrench className="text-blue-600 dark:text-blue-300" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                    Current Tech Stack
                  </h3>
                </div>
                
                <motion.ul
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {techItems.map((tech, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                          }
                        }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.div variants={item}>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-1 rounded-xl shadow-lg">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Globe className="text-green-600 dark:text-green-300" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-500">
                    Currently Learning
                  </h3>
                </div>
                
                <motion.ul
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {learningItems.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: index * 0.1
                          }
                        }
                      }}
                      whileHover={{ y: -3 }}
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                      <ArrowRight className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

                  <br /><br />

                   {/* Leadership Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.div variants={item}>
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 p-1 rounded-xl shadow-lg mb-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ 
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Trophy className="text-yellow-600 dark:text-yellow-400" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-700 dark:from-yellow-400 dark:to-yellow-500">
                    Leadership & Discipline
                  </h3>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  <span className="font-bold text-yellow-700 dark:text-yellow-400">National Gold Medalist in Kabaddi</span> and <span className="font-bold">University-level Cricket Captain</span>, I bring unmatched discipline, focus, and team leadership to every project.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-full text-sm font-medium">
                    <Medal size={16} /> Gold Medalist
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-full text-sm font-medium">
                    <Shield size={16} /> Team Captain
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-full text-sm font-medium">
                    <Target size={16} /> Competitive Mindset
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;