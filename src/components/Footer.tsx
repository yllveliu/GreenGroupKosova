import { useEffect, useState } from 'react';
import { Facebook, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const getSectionHref = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-slate-900 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* LOGO + DESCRIPTION */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img
                src="/logo.png"
                alt="Green Group Kosova"
                loading="eager"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">
                  Green Group
                </span>
                <span className="text-xs text-primary-400 uppercase tracking-widest">
                  Kosova
                </span>
              </div>
            </Link>

            <p className="text-slate-400 mb-6 text-sm leading-6 max-w-xs sm:max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex gap-4">
  <a
    href="https://www.facebook.com/ggkosova"
    className="text-slate-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <Facebook size={20} />
  </a>

  <a
    href="mailto:ggkosova2014@gmail.com"
    className="text-slate-400 hover:text-white transition-colors"
    aria-label="Email"
  >
    <Mail size={20} />
  </a>

  <a
  href="https://www.google.com/maps?q=42.4358333,21.4481067"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-400 hover:text-white transition-colors"
  aria-label="Location"
>
  <MapPin size={20} />
</a>
</div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-slate-400">
              <li>
                <a href={getSectionHref('home')} className="hover:text-white transition-colors">
                  {t.footer.home}
                </a>
              </li>
              <li>
                <a href={getSectionHref('about')} className="hover:text-white transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href={getSectionHref('products')} className="hover:text-white transition-colors">
                  {t.footer.products}
                </a>
              </li>
              <li>
                <a href={getSectionHref('process')} className="hover:text-white transition-colors">
                  {t.footer.process}
                </a>
              </li>
              <li>
                <a href={getSectionHref('wholesale')} className="hover:text-white transition-colors">
                  {t.footer.wholesale}
                </a>
              </li>
              <li>
                <a href={getSectionHref('contact')} className="hover:text-white transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>{t.footer.freshMushrooms}</li>
              <li>{t.footer.cannedMushrooms}</li>
              <li>{t.footer.flowerSubstrate}</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="text-white font-medium mb-1">{t.footer.emailLabel}</p>
                <p>ggkosova2014@gmail.com</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1">{t.footer.phoneLabel}</p>
                <p>+383 44 844 297</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1">{t.footer.addressLabel}</p>
                <p>{t.footer.addressValue}</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1">{t.footer.hoursLabel}</p>
                <p>{t.footer.hoursValue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Green Group Kosova</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/30 hover:bg-primary-700 transition-all flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </footer>
  );
}