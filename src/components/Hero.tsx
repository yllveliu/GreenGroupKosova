import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from "../Assets/images/hero-mushrooms.png";
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Mushroom Farm"
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            {t.hero.titleStart}{' '}
            <span className="text-primary-400">{t.hero.titleHighlight}</span>{' '}
            {t.hero.titleEnd}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#products" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              {t.hero.primaryButton}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#wholesale" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 group !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
              {t.hero.secondaryButton}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex w-full justify-start gap-12 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-white">16+</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">{t.hero.statYears}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-white">200t+</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">{t.hero.statProduction}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">{t.hero.statProcess}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div> */}
    </section>
  );
}
