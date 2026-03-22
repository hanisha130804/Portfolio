import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel border-b border-primary/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white">
          Hanisha<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SM</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-opacity duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:hanishasm60@gmail.com"
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/30 hover:opacity-90 transition-all duration-300"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-panel border-t border-primary/10 px-6 py-4 flex flex-col gap-4 absolute top-full left-0 right-0"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:hanishasm60@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="px-5 py-3 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white mt-2"
          >
            Contact Me
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
