import { motion } from 'motion/react';
import { CheckCircle2, Truck, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const benefitIcons = [
  {
    icon: <Truck className="text-primary-600" size={26} />,
  },
  {
    icon: <BarChart3 className="text-primary-600" size={26} />,
  },
  {
    icon: <ShieldCheck className="text-primary-600" size={26} />,
  },
];

export default function Wholesale() {
  const { t } = useLanguage();

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
    <section id="wholesale" className="py-12 sm:py-16 lg:py-24 bg-primary-950 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:40px_40px]" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="w-full">

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-400 font-semibold tracking-widest uppercase text-xs sm:text-sm"
            >
              {t.wholesale.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6"
            >
              {t.wholesale.title}{' '}
              <span className="text-primary-400">{t.wholesale.titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-primary-100/80 mb-6 sm:mb-8 leading-relaxed max-w-xl"
            >
              {t.wholesale.description}
            </motion.p>

            {/* Benefits */}
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              {benefitIcons.map((benefit, index) => (
                <motion.div
                  key={titles[index]}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-3 sm:gap-6 items-start"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    {benefit.icon}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                      {titles[index]}
                    </h4>
                    <p className="text-sm sm:text-base text-primary-100/70 leading-relaxed break-words">
                      {descriptions[index]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 !bg-primary-500 hover:!bg-primary-600"
              >
                {t.wholesale.cta}
                <ArrowRight size={18} />
              </a>
            </motion.div>

          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl">

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-5 sm:mb-6 text-center">
                {t.wholesale.whyTitle}
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {t.wholesale.whyItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 text-primary-100/90 font-medium"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 shrink-0 mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>

                    <span className="text-sm sm:text-base break-words leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary-500/10 rounded-xl border border-primary-500/20">
                <p className="text-xs sm:text-sm text-primary-200 text-center italic leading-relaxed">
                  {t.wholesale.testimonialText}
                </p>

                <div className="mt-3 sm:mt-4 text-center">
                  <div className="font-bold text-white text-sm sm:text-base">
                    {t.wholesale.testimonialName}
                  </div>
                  <div className="text-[10px] sm:text-xs text-primary-400 uppercase tracking-widest">
                    {t.wholesale.testimonialRole}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}