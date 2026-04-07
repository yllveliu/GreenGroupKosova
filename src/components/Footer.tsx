import { Leaf, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logo from "../Assets/images/logo.png";
export default function Footer() {
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
              Green Group Kosova është kompani e specializuar në prodhimin dhe furnizimin me kërpudha champignon,
              kërpudha të konzervuara dhe substrat cilësor për bujqësi.
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
            <h4 className="text-white font-bold mb-6 text-sm">LIDHJE TË SHPEJTA</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#home">Ballina</a></li>
              <li><a href="#about">Rreth Nesh</a></li>
              <li><a href="#products">Produktet</a></li>
              <li><a href="#process">Procesi</a></li>
              <li><a href="#wholesale">Furnizim</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">PRODUKTET</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Kërpudha të Freskëta</li>
              <li>Kërpudha të Konzervuara</li>
              <li>Substrat për Lule</li>
              <li>Furnizim për Biznese</li>
            </ul>
          </div>

          {/* KONTAKTI */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">KONTAKTI</h4>

            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-white">Email</p>
                <p>ggkosova2014@gmail.com</p>
              </div>

              <div>
                <p className="text-white">Telefoni</p>
                <p>+383 44 844 297</p>
              </div>

              <div>
                <p className="text-white">Adresa</p>
                <p>Livoç i Ultë, Gjilan</p>
              </div>

              <div>
                <p className="text-white">Orari</p>
                <p>07:00 – 15:00</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Green Group Kosova</p>

          <button onClick={scrollToTop} className="text-white">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}