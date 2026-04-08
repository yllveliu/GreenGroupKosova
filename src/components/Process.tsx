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
    icon: <Sprout size={32} />,
    image: cultivation,
  },
  {
    id: 'growth',
    icon: <Thermometer size={32} />,
    image: growth,
  },
  {
    id: 'harvesting',
    icon: <Scissors size={32} />,
    image: harvesting,
  },
  {
    id: 'packaging',
    icon: <Box size={32} />,
    image: packaging,
  },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
            >
              {t.process.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4"
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
            className="text-lg text-slate-600 max-w-md lg:text-right"
          >
            {t.process.description}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stepAssets.map((step, index) => {
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
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative mb-8">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/0 transition-colors"></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="text-center mt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{titles[index]}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{descriptions[index]}</p>
                </div>
              </motion.div>
              );
})}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-8 md:p-12 bg-primary-950 rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-white mb-4">{t.process.ctaTitle}</h3>
              <p className="text-primary-100/80 text-lg">
                {t.process.ctaDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {t.process.ctaItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white font-medium bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <CheckCircle2 size={18} className="text-primary-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
