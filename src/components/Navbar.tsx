import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import logo from "../Assets/images/logo.png";
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'process', href: '#process' },
  { key: 'wholesale', href: '#wholesale' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
  <img
    src={logo}
    alt="Green Group"
    className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
  />

  <div className="flex flex-col">
    <span
      className={cn(
        "font-display font-bold text-xl leading-none tracking-tight",
        scrolled ? "text-slate-900" : "text-white"
      )}
    >
      Green Group
    </span>

    <span
      className={cn(
        "text-[10px] font-medium tracking-[0.2em] uppercase",
        scrolled ? "text-primary-700" : "text-primary-200"
      )}
    >
      Kosova
    </span>
  </div>
</a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
  <a
    key={link.key}
    href={link.href}
    className={cn(
      'text-sm font-medium transition-colors hover:text-primary-600',
      scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
    )}
  >
    {t.navbar[link.key]}
  </a>
))}
  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-2 py-1">
  <button
    type="button"
    onClick={() => setLanguage('al')}
    className={cn(
      'px-3 py-1 rounded-full text-xs font-semibold transition-all',
      language === 'al'
        ? 'bg-white text-slate-900'
        : scrolled
        ? 'text-slate-600 hover:text-slate-900'
        : 'text-white/80 hover:text-white'
    )}
  >
    AL
  </button>

  <button
    type="button"
    onClick={() => setLanguage('en')}
    className={cn(
      'px-3 py-1 rounded-full text-xs font-semibold transition-all',
      language === 'en'
        ? 'bg-white text-slate-900'
        : scrolled
        ? 'text-slate-600 hover:text-slate-900'
        : 'text-white/80 hover:text-white'
    )}
  >
    EN
  </button>
</div>
          <a
            href="#contact"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all",
              scrolled 
                ? "bg-primary-700 text-white hover:bg-primary-800 shadow-md shadow-primary-700/20" 
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
            )}
          >
            <Phone size={16} />
            <span>{t.navbar.contactButton}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
  {/* Language Switcher Mobile */}
  <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-1 py-1">
    <button
      type="button"
      onClick={() => setLanguage('al')}
      className={cn(
        'px-2 py-1 rounded-full text-[10px] font-semibold',
        language === 'al'
          ? 'bg-white text-slate-900'
          : 'text-slate-700'
      )}
    >
      AL
    </button>

    <button
      type="button"
      onClick={() => setLanguage('en')}
      className={cn(
        'px-2 py-1 rounded-full text-[10px] font-semibold',
        language === 'en'
          ? 'bg-white text-slate-900'
          : 'text-slate-700'
      )}
    >
      EN
    </button>
  </div>

  {/* Hamburger */}
  <button
    className={cn(
      "p-2 rounded-lg",
      scrolled ? "text-slate-900" : "text-white"
    )}
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
  <a
    key={link.key}
    href={link.href}
    className="text-lg font-medium text-slate-600 hover:text-primary-600 px-2 py-1"
    onClick={() => setIsOpen(false)}
  >
    {t.navbar[link.key]}
  </a>
))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full bg-primary-700 text-white py-4 rounded-xl font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                <span>{t.navbar.contactButton}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
