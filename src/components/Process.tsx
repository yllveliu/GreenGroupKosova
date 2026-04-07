import { Thermometer, Sprout, Scissors, Box, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import cultivation from "../Assets/images/cultivation.png";
import growth from "../Assets/images/growth.png";
import harvesting from "../Assets/images/harvesting.png";
import packaging from "../Assets/images/packaging.png";

const steps = [
  {
    id: 'cultivation',
    title: 'Kultivimi',
    description: 'Procesi fillon me substrat të përgatitur me kujdes, duke krijuar bazën e duhur për rritje të shëndetshme dhe cilësi të qëndrueshme të kërpudhave.',
    icon: <Sprout size={32} />,
    image: cultivation,
  },
  {
    id: 'growth',
    title: 'Kushtet e Rritjes',
    description: 'Temperatura, lagështia dhe kushtet e rritjes monitorohen vazhdimisht për të siguruar cilësi të njëtrajtshme dhe standard të lartë në çdo prodhim.',
    icon: <Thermometer size={32} />,
    image: growth,
  },
  {
    id: 'harvesting',
    title: 'Vjelje në Kohën e Duhur',
    description: 'Kërpudhat vjelën me kujdes në fazën optimale të pjekurisë, duke ruajtur freskinë, strukturën dhe cilësinë për përdorim të menjëhershëm në treg dhe gastronomi.',
    icon: <Scissors size={32} />,
    image: harvesting,
  },
  {
    id: 'packaging',
    title: 'Paketimi',
    description: 'Produktet paketohen menjëherë pas vjeljes dhe ruhen në kushte të përshtatshme për të garantuar freski dhe cilësi deri te klienti, në çdo furnizim.',
    icon: <Box size={32} />,
    image: packaging,
  },
];

export default function Process() {
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
              Procesi
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4"
            >
              Si Garantojmë <span className="text-primary-600"> Cilësi dhe Freski</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 max-w-md lg:text-right"
          >
            Nga kultivimi deri te shpërndarja, çdo hap i procesit kontrollohet për të siguruar produkte të freskëta dhe cilësi të qëndrueshme për klientët tanë.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
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
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
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
              <h3 className="text-3xl font-bold text-white mb-4">Furnizim i Qëndrueshëm për Biznese</h3>
              <p className="text-primary-100/80 text-lg">
                Falë procesit të kontrolluar dhe përvojës shumëvjeçare, sigurojmë furnizim të rregullt me kërpudha të freskëta dhe produkte cilësore për markete, restorante dhe partnerë në Kosovë dhe rajon.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {[
                'Furnizim i rregullt',
                'Cilësi e qëndrueshme',
                'Produkte të freskëta',
                'Partneritet i besueshëm'
              ].map((item) => (
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
