import { motion } from 'motion/react';
import { CheckCircle2, Truck, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const benefitIcons = [
  {
    icon: <Truck className="text-primary-600" size={28} />,
  },
  {
    icon: <BarChart3 className="text-primary-600" size={28} />,
  },
  {
    icon: <ShieldCheck className="text-primary-600" size={28} />,
  },
];

export default function Wholesale() {
  const { t } = useLanguage();

  return (
    <section id="wholesale" className="section-padding bg-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-400 font-semibold tracking-widest uppercase text-sm"
            >
              {t.wholesale.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            >
              {t.wholesale.title}{' '}
                <span className="text-primary-400">{t.wholesale.titleHighlight}</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-primary-100/80 mb-8 leading-relaxed max-w-xl"
            >
              {t.wholesale.description}
            </motion.p>

            <div className="space-y-8 mb-12">
              {benefitIcons.map((benefit, index) => {
  const titles = [
    t.wholesale.benefit1Title,
    t.wholesale.benefit2Title,
    t.wholesale.benefit3Title,
  ];

  const descriptions = [
    t.wholesale.benefit1Description,
    t.wholesale.benefit2Description,
    t.wholesale.benefit3Description,
  ];

  return (
                <motion.div
                  key={titles[index]}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{titles[index]}</h4>
                    <p className="text-sm sm:text-base text-primary-100/60 leading-relaxed">{descriptions[index]}</p>
                  </div>
                </motion.div>
                );
})}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 !bg-primary-500 hover:!bg-primary-600">
                {t.wholesale.cta}
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t.wholesale.whyTitle}</h3>
              <div className="space-y-6">
                {t.wholesale.whyItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-4 text-primary-100/90 font-medium"
                  >
                    <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-primary-500/10 rounded-xl border border-primary-500/20">
                <p className="text-sm text-primary-200 text-center italic">
                  {t.wholesale.testimonialText}
                </p>
                <div className="mt-4 text-center">
                  <div className="font-bold text-white">{t.wholesale.testimonialName}</div>
                  <div className="text-xs text-primary-400 uppercase tracking-widest">{t.wholesale.testimonialRole}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
