import { ShoppingBag, Package, Truck, ArrowRight } from 'lucide-react';
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
    icon: <ShoppingBag className="text-primary-600" size={24} />,
  },
  {
    id: 'canned-mushrooms',
    title: t.products.cannedTitle,
    description: t.products.cannedDescription,
    image: CannedMushroomsImg,
    benefits: t.products.cannedBenefits,
    icon: <ShoppingBag className="text-primary-600" size={24} />,
  },
  {
    id: 'wholesale-supply',
    title: t.products.substrateTitle,
    description: t.products.substrateDescription,
    image: FlowerSubstrateImg,
    benefits: t.products.substrateBenefits,
    icon: <ShoppingBag className="text-primary-600" size={24} />,
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
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"
          >
            {t.products.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {t.products.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  {product.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
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
  className="mt-auto flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 group-hover:bg-primary-50 text-slate-900 group-hover:text-primary-700 font-semibold transition-all"
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
