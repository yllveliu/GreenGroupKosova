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
    <section id="about" className="section-padding bg-earth-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
  src={aboutImg}
  alt="Green Group Kosova - Prodhimi i kërpudhave"
  className="w-full h-full object-cover"
/>
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.about.floatingCardTitle}</h4>
<p className="text-xs text-slate-500 uppercase tracking-wider">{t.about.floatingCardSubtitle}</p>
                </div>
              </div>
              {/* <p className="text-sm text-slate-600 leading-relaxed">
                "Our commitment to quality starts from the very first spore. We don't just grow mushrooms; we cultivate trust."
              </p> */}
            </motion.div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
            >
              {t.about.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6"
            >
              {t.about.titleStart}{' '}
              <span className="text-primary-600">{t.about.titleHighlight}</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              <p>
                {t.about.paragraph1}
              </p>
              <p>
                {t.about.paragraph2}
              </p>
              <p>
                {t.about.paragraph3}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
