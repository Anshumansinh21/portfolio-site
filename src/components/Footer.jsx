import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Home,
  User,
  Briefcase,
  Phone,
  FileText,
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/anshumansinh-rathore/", name: "LinkedIn" },
  ];

  const navLinks = [
    { icon: <Home size={16} />, path: '/', name: 'Home' },
    { icon: <User size={16} />, path: '/about', name: 'About' },
    { icon: <Briefcase size={16} />, path: '/projects', name: 'Work' },
    { icon: <FileText size={16} />, path: '/experience', name: 'Experience' },
    { icon: <Phone size={16} />, path: '/contact', name: 'Contact' },
  ];

  const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Tailwind', color: 'text-cyan-400' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'HTML5', color: 'text-orange-500' },
    { name: 'CSS3', color: 'text-blue-500' },
    { name: 'Wordpress', color: 'text-purple-500' },
    { name: 'Figma', color: 'text-pink-500' },
    { name: 'Node.js', color: 'text-green-500' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anshumansinh
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Frontend Developer & UI/UX Designer creating digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={18} />
                <a
                  href="mailto:hello@anshumansinh.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ajrathore217@gmail.com
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-3">
                <Phone className="text-blue-600 dark:text-blue-400" size={18} />
                <span>+91 63534 92283</span>
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full bg-white dark:bg-gray-700 shadow-sm text-xs font-medium ${tech.color}`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Anshumansinh Rathore. All rights reserved.</p>
          <p className="mt-2 text-xs">Built with React</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
