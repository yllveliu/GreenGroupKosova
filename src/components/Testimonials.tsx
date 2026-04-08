import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonialImages = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
          >
            {t.testimonials.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"
          >
            {t.testimonials.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialImages.map((item, index) => {
  const names = [
    t.testimonials.person1Name,
    t.testimonials.person2Name,
    t.testimonials.person3Name,
  ];

  const roles = [
    t.testimonials.person1Role,
    t.testimonials.person2Role,
    t.testimonials.person3Role,
  ];

  const contents = [
    t.testimonials.person1Content,
    t.testimonials.person2Content,
    t.testimonials.person3Content,
  ];

  return (
            <motion.div
              key={names[index]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative group flex flex-col h-full"
            >
              <div className="absolute top-10 right-10 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed relative z-10 italic">
                "{contents[index]}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* <img
                  src={item.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  referrerPolicy="no-referrer"
                /> */}
                <div>
                  <h4 className="font-bold text-slate-900">{names[index]}</h4>
                  <p className="text-xs text-primary-600 font-medium uppercase tracking-wider">{roles[index]}</p>
                </div>
              </div>
            </motion.div>
            );
})}
        </div>
      </div>
    </section>
  );
}
