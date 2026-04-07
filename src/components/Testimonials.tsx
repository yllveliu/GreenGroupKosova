import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Driton Berisha',
    role: 'Pronar, Restorant',
    content: 'Cilësia e kërpudhave nga Green Group është gjithmonë në nivel të lartë. Ne kemi nevojë për produkte të freskëta çdo ditë dhe furnizimi i tyre është gjithmonë i rregullt dhe i sigurt.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Liridona Gashi',
    role: 'Partnere Bujqësore',
    content: 'Përdorimi i substratit të Green Group ka përmirësuar ndjeshëm prodhimin tonë. Cilësia është e qëndrueshme dhe rezultatet janë të dukshme në çdo cikël.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Besnik Hoxha',
    role: 'Distributor',
    content: 'Besueshmëria është shumë e rëndësishme në furnizim. Green Group nuk na ka zhgënjyer asnjëherë. Dorëzimi është gjithmonë në kohë dhe cilësia është e njëjtë në çdo porosi.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Testimonials() {
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
            PARTNERËT TANË
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"
          >
            DËSHMI NGA KLIENTËT
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative group"
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
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-primary-600 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
