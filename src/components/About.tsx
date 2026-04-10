import { motion } from 'motion/react';
import { Award, Users, Target, History } from 'lucide-react';
import aboutImg from "../Assets/images/about-farm.jpg";
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      label: t.about.statsFoundedLabel,
      value: t.about.statsFoundedValue,
      icon: <History className="text-primary-600" />,
    },
    {
      label: t.about.statsProductionLabel,
      value: t.about.statsProductionValue,
      icon: <Users className="text-primary-600" />,
    },
    {
      label: t.about.statsProductsLabel,
      value: t.about.statsProductsValue,
      icon: <Award className="text-primary-600" />,
    },
    {
      label: t.about.statsMarketLabel,
      value: t.about.statsMarketValue,
      icon: <Target className="text-primary-600" />,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-earth-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Green Group Kosova - Prodhimi i kërpudhave"
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 z-20 bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl max-w-[220px] sm:max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-700">
                  <Award size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                    {t.about.floatingCardTitle}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider truncate">
                    {t.about.floatingCardSubtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-52 sm:w-64 h-52 sm:h-64 bg-primary-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <div className="w-full">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-xs sm:text-sm"
            >
              {t.about.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 sm:mt-4 mb-4 sm:mb-6"
            >
              {t.about.titleStart}{' '}
              <span className="text-primary-600">{t.about.titleHighlight}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}