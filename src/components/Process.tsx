import { Thermometer, Sprout, Scissors, Box, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import cultivation from "../Assets/images/cultivation.png";
import growth from "../Assets/images/growth.png";
import harvesting from "../Assets/images/harvesting.png";
import packaging from "../Assets/images/packaging.png";

const stepAssets = [
  {
    id: 'cultivation',
    icon: <Sprout size={28} />,
    image: cultivation,
  },
  {
    id: 'growth',
    icon: <Thermometer size={28} />,
    image: growth,
  },
  {
    id: 'harvesting',
    icon: <Scissors size={28} />,
    image: harvesting,
  },
  {
    id: 'packaging',
    icon: <Box size={28} />,
    image: packaging,
  },
];

export default function Process() {
  const { t } = useLanguage();

  const titles = [
    t.process.cultivationTitle,
    t.process.growthTitle,
    t.process.harvestingTitle,
    t.process.packagingTitle,
  ];

  const descriptions = [
    t.process.cultivationDescription,
    t.process.growthDescription,
    t.process.harvestingDescription,
    t.process.packagingDescription,
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 lg:mb-16 gap-6 sm:gap-8">

          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-xs sm:text-sm"
            >
              {t.process.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 sm:mt-4"
            >
              {t.process.title}{' '}
              <span className="text-primary-600">{t.process.titleHighlight}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-md lg:text-right lg:ml-auto"
          >
            {t.process.description}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">

          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10">
            {stepAssets.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group w-full"
              >
                {/* Image */}
                <div className="relative mb-8">
                  <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                    <img
                      src={step.image}
                      alt={titles[index]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 lg:bg-primary-900/20 lg:group-hover:bg-primary-900/0 transition-colors" />
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center text-primary-600 lg:group-hover:bg-primary-600 lg:group-hover:text-white transition-all duration-300 z-20">
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="text-center mt-8 sm:mt-10 px-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {titles[index]}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {descriptions[index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 p-5 sm:p-8 md:p-10 lg:p-12 bg-primary-950 rounded-2xl sm:rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">

            <div className="w-full max-w-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                {t.process.ctaTitle}
              </h3>
              <p className="text-primary-100/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t.process.ctaDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-xl">
              {t.process.ctaItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-white font-medium bg-white/5 px-4 py-4 rounded-xl border border-white/10 min-w-0"
                >
                  <CheckCircle2 size={18} className="text-primary-400 shrink-0 mt-0.5" />
                  <span className="flex-1 text-sm sm:text-base break-words leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}