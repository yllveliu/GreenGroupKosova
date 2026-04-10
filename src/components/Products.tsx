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
    <section id="products" className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs sm:text-sm"
          >
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 sm:mt-4 mb-4 sm:mb-6"
          >
            {t.products.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {t.products.description}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-primary-700 transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                  {product.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 group-hover:bg-primary-50 text-slate-900 group-hover:text-primary-700 font-semibold text-sm sm:text-base transition-all"
                >
                  <span>{t.products.more}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}