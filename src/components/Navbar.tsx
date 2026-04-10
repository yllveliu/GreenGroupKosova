import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { key: 'home', section: 'home' },
  { key: 'about', section: 'about' },
  { key: 'products', section: 'products' },
  { key: 'process', section: 'process' },
  { key: 'wholesale', section: 'wholesale' },
  { key: 'contact', section: 'contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isLegalPage =
    location.pathname === '/privacy-policy' ||
    location.pathname === '/terms-conditions';

  const getNavHref = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || isLegalPage ? 'glass-nav py-3' : 'bg-transparent py-3 sm:py-4'
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Green Group Kosova"
            loading="eager"
            className="h-11 sm:h-12 lg:h-14 w-auto"
          />

          <div className="flex flex-col">
            <span
              className={cn(
                'font-display font-bold text-lg sm:text-xl leading-none tracking-tight',
                scrolled || isLegalPage ? 'text-slate-900' : 'text-white'
              )}
            >
              Green Group
            </span>

            <span
              className={cn(
                'text-[11px] font-medium tracking-[0.18em] uppercase',
                scrolled || isLegalPage ? 'text-primary-700' : 'text-primary-200'
              )}
            >
              Kosova
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={getNavHref(link.section)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary-600',
                scrolled || isLegalPage
                  ? 'text-slate-600'
                  : 'text-white/90 hover:text-white'
              )}
            >
              {t.navbar[link.key]}
            </a>
          ))}

          <div
            className={cn(
              'flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md',
              scrolled || isLegalPage
                ? 'border border-slate-200 bg-white'
                : 'border border-white/20 bg-white/10'
            )}
          >
            <button
              type="button"
              onClick={() => setLanguage('al')}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold transition-all',
                language === 'al'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : scrolled || isLegalPage
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
                  ? 'bg-white text-slate-900 shadow-sm'
                  : scrolled || isLegalPage
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/80 hover:text-white'
              )}
            >
              EN
            </button>
          </div>

          <a
            href={getNavHref('contact')}
            className={cn(
              'flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all',
              scrolled || isLegalPage
                ? 'bg-primary-700 text-white hover:bg-primary-800 shadow-md shadow-primary-700/20'
                : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
            )}
          >
            <Phone size={16} />
            <span>{t.navbar.contactButton}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <div
            className={cn(
              'flex items-center gap-1 rounded-full px-1 py-1 backdrop-blur-md',
              scrolled || isLegalPage
                ? 'border border-slate-200 bg-white'
                : 'border border-white/20 bg-white/10'
            )}
          >
            <button
              type="button"
              onClick={() => setLanguage('al')}
              className={cn(
                'px-2.5 py-1 rounded-full text-xs font-semibold transition-all',
                language === 'al'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : scrolled || isLegalPage
                    ? 'text-slate-700'
                    : 'text-white/80'
              )}
            >
              AL
            </button>

            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                'px-2.5 py-1 rounded-full text-xs font-semibold transition-all',
                language === 'en'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : scrolled || isLegalPage
                    ? 'text-slate-700'
                    : 'text-white/80'
              )}
            >
              EN
            </button>
          </div>

          <button
            className={cn(
              'p-2 rounded-lg',
              scrolled || isLegalPage ? 'text-slate-900' : 'text-white'
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
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={getNavHref(link.section)}
                  className="text-lg font-medium text-slate-600 hover:text-primary-600 px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar[link.key]}
                </a>
              ))}

              <a
                href={getNavHref('contact')}
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