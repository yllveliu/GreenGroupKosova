import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import freshMushroomsImg from "../Assets/images/fresh-mushrooms.png";
import CannedMushroomsImg from "../Assets/images/canned-mushrooms.png";
import FlowerSubstrateImg from "../Assets/images/flower-substrate.png";
import { useLanguage } from '../context/LanguageContext';


export default function Products() {
  const { t } = useLanguage();

  const products = [
  {
    id: 'fresh-mushrooms',
    title: t.products.freshTitle,
    description: t.products.freshDescription,
    image: freshMushroomsImg,
    benefits: t.products.freshBenefits,
  },
  {
    id: 'canned-mushrooms',
    title: t.products.cannedTitle,
    description: t.products.cannedDescription,
    image: CannedMushroomsImg,
    benefits: t.products.cannedBenefits,
  },
  {
    id: 'wholesale-supply',
    title: t.products.substrateTitle,
    description: t.products.substrateDescription,
    image: FlowerSubstrateImg,
    benefits: t.products.substrateBenefits,
  },
];

  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
          >
            {/* Ne Ofrojmë */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6"
          >
            {t.products.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {t.products.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col h-full"
            >
              <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
  href="#contact"
  className="mt-auto flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 group-hover:bg-primary-50 text-slate-900 group-hover:text-primary-700 font-semibold transition-all"
>
  <span>{t.products.more}</span>
  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
