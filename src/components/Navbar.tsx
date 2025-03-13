import React, { useState } from 'react';
import { Menu, X, Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full z-20 top-0 bg-background/80 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="text-primary-dark font-bold text-xl">
          Venkatesh C
        </a>
        
        <div className="flex md:order-2">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:7708624152" className="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400">
                <Phone size={16} />
                <span>7708624152</span>
              </a>
              <a 
                href="https://linkedin.com/in/venkatesh-c6296" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
            <a 
              href="/resume.pdf" 
              download="Venkatesh_C_Resume.pdf"
              className="flex items-center space-x-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
        
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-background/80 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 pl-3 pr-4 text-primary-dark hover:text-primary rounded md:p-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;