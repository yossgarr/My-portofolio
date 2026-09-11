import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Fungsi scroll beranimasi mulus dengan kompensasi tinggi navbar
  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu jika di HP

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 70; // Offset kompensasi tinggi navbar agar judul tidak tertutup
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#about"
          onClick={(e) => handleScroll(e, '#about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 font-bold text-lg text-white cursor-pointer"
        >
          <Terminal className="text-sky-400" size={22} />
          <span>Dev<span className="text-sky-400">Portfolio</span></span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Tombol CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg transition-colors cursor-pointer shadow-md shadow-sky-500/20"
          >
            Hubungi Saya
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}