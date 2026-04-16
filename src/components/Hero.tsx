import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from "../Assets/images/hero-mushrooms.webp";
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 lg:pt-28 overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
  <img
    src={heroImg}
    alt="Mushroom Farm"
    width="1920"
    height="1080"
    className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
    referrerPolicy="no-referrer"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/70" />
</div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm font-medium mb-5 sm:mb-6 backdrop-blur-sm max-w-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            {t.hero.badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6"
          >
            {t.hero.titleStart}{' '}
            <span className="text-primary-400">{t.hero.titleHighlight}</span>{' '}
            {t.hero.titleEnd}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#products"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              {t.hero.primaryButton}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#wholesale"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 group !bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
            >
              {t.hero.secondaryButton}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-t border-white/10 pt-6 sm:pt-8"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                12+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                {t.hero.statYears}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                200t+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                {t.hero.statProduction}
              </span>
            </div>

            <div className="flex flex-col items-center text-center col-span-2 lg:col-span-1">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                100%
              </span>
              <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                {t.hero.statProcess}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}