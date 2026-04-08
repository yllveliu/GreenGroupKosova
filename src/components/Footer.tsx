import { Leaf, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logo from "../Assets/images/logo.png";
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* LOGO + DESCRIPTION */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-8 group">
              <img
                src={logo}
                alt="Green Group Kosova"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">Green Group</span>
                <span className="text-xs text-primary-400 uppercase tracking-widest">
                  Kosova
                </span>
              </div>
            </a>

            <p className="text-slate-400 mb-6 text-sm">
              {t.footer.description}
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/ggkosova" className="text-slate-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#home">{t.footer.home}</a></li>
<li><a href="#about">{t.footer.about}</a></li>
<li><a href="#products">{t.footer.products}</a></li>
<li><a href="#process">{t.footer.process}</a></li>
<li><a href="#wholesale">{t.footer.wholesale}</a></li>
<li><a href="#contact">{t.footer.contact}</a></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">{t.footer.productsTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>{t.footer.freshMushrooms}</li>
<li>{t.footer.cannedMushrooms}</li>
<li>{t.footer.flowerSubstrate}</li>
<li>{t.footer.businessSupply}</li>
            </ul>
          </div>

          {/* KONTAKTI */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">{t.footer.contactTitle}</h4>

            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-white">{t.footer.emailLabel}</p>
                <p>ggkosova2014@gmail.com</p>
              </div>

              <div>
                <p className="text-white">{t.footer.phoneLabel}</p>
                <p>+383 44 844 297</p>
              </div>

              <div>
                <p className="text-white">{t.footer.addressLabel}</p>
                <p>{t.footer.addressValue}</p>
              </div>

              <div>
                <p className="text-white">{t.footer.hoursLabel}</p>
                <p>{t.footer.hoursValue}</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Green Group Kosova</p>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all flex items-center justify-center"
          aria-label="Scroll to top"
        >
        <ArrowUp size={20} />
        </button>
        </div>
      
    </footer>
  );
}