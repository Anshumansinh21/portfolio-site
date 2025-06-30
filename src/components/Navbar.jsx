import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../img/My_Logo.jpeg'; // Adjust if needed

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
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setOpen(false);
            navigate('/');
          }}
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover shadow-md" />
          <span className="text-xl font-bold text-white hover:text-blue-400 transition duration-200">
            Anshumansinh
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold px-2 transition duration-300 ${
                  isActive ? 'text-blue-400' : 'text-white hover:text-blue-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-white hover:bg-blue-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
