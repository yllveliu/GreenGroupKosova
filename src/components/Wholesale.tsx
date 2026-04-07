import { motion } from 'motion/react';
import { CheckCircle2, Truck, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Furnizim i Rregullt',
    description: 'Sigurojmë furnizim të vazhdueshëm me kërpudha të freskëta, të përshtatur sipas nevojave të biznesit tuaj.',
    icon: <Truck className="text-primary-600" size={28} />,
  },
  {
    // Fix: replaced 'Growth Analytics' with 'Market Insights' for better B2B context
    title: 'Dorëzim në Kohë',
    description: 'Produktet dorëzohen në kohë dhe në kushte të përshtatshme, duke ruajtur freskinë deri te klienti.',
    icon: <BarChart3 className="text-primary-600" size={28} />,
  },
  {
    title: 'Cilësi e Qëndrueshme',
    description: 'Çdo produkt përgatitet dhe kontrollohet për të garantuar standard të njëtrajtshëm në çdo furnizim.',
    icon: <ShieldCheck className="text-primary-600" size={28} />,
  },
];

export default function Wholesale() {
  return (
    <section id="wholesale" className="section-padding bg-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-400 font-semibold tracking-widest uppercase text-sm"
            >
              Partneritet
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8"
            >
              Furnizim i Besueshëm për <span className="text-primary-400">Biznesin Tuaj</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100/80 mb-10 leading-relaxed"
            >
              Bashkëpunojmë me restorante, markete dhe distributorë për të siguruar kërpudha të freskëta dhe produkte cilësore me furnizim të rregullt dhe të qëndrueshëm.
            </motion.p>

            <div className="space-y-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-primary-100/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 !bg-primary-500 hover:!bg-primary-600">
                Na kontakto për furnizim
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Pse të Bashkëpunoni me Ne?</h3>
              <div className="space-y-6">
                {[
                  'Furnizim i rregullt për biznese',
                  'Produkte të freskëta çdo ditë',
                  'Cilësi e qëndrueshme',
                  'Dorëzim i sigurt dhe në kohë',
                  'Partneritet afatgjatë',
                  'Shërbim i besueshëm'
                ].map((item, index) => (
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
              
              <div className="mt-12 p-6 bg-primary-500/10 rounded-2xl border border-primary-500/20">
                <p className="text-sm text-primary-200 text-center italic">
                  "Green Group Kosova na furnizon vazhdimisht me kërpudha të freskëta dhe cilësi të qëndrueshme. Bashkëpunim i besueshëm dhe korrekt."
                </p>
                <div className="mt-4 text-center">
                  <div className="font-bold text-white">Agon Krasniqi</div>
                  <div className="text-xs text-primary-400 uppercase tracking-widest">Partner biznesi</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
