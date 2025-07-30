import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../img/My_Logo.jpeg';
motion

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setOpen(false);
            navigate('/');
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-10 h-10 rounded-full object-cover shadow-md border border-gray-700" 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Anshumansinh
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium px-2 py-1 transition duration-300 ${
                    isActive 
                      ? 'text-blue-400 border-b-2 border-blue-500' 
                      : 'text-gray-300 hover:text-blue-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Premium Glowing Button */}
          <motion.a
            href="https://askansh.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative isolate overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-sm opacity-70 transition-all duration-500 group-hover:opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-purple-800/10 rounded-lg transition-all duration-500 group-hover:from-blue-800/20 group-hover:to-purple-800/20"></div>
            <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-sm font-medium text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <span>AskAnsh</span>
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </div>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <motion.a
            href="https://askansh.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-md blur-sm"></div>
            <div className="relative px-4 py-1.5 rounded-md bg-gray-900/80 border border-gray-700 text-xs font-medium text-white">
              AskAnsh
            </div>
          </motion.a>
          
          <button 
            onClick={() => setOpen(!open)} 
            className="focus:outline-none p-1 rounded-md hover:bg-gray-800 transition"
          >
            {open ? (
              <X className="w-6 h-6 text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          className="md:hidden px-4 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-md text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'bg-gray-800 text-blue-400 border-l-4 border-blue-500'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Mobile Glowing Button */}
          <motion.a
            href="https://askansh.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-md blur-sm"></div>
            <div className="relative w-full py-3 rounded-md bg-gray-900/80 border border-gray-700 text-center text-sm font-medium text-white flex items-center justify-center gap-2">
              <span>AskAnsh AI</span>
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </div>
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;