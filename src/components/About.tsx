import { motion } from 'motion/react';
import { Award, Users, Target, History } from 'lucide-react';
import aboutImg from "../assets/images/about-farm.jpg";

const stats = [
  { label: 'Themeluar', value: '2014', icon: <History className="text-primary-600" /> },
  { label: 'Prodhim vjetor', value: '200t+', icon: <Users className="text-primary-600" /> },
  { label: 'Kërpudha & substrat', value: '3 produkte', icon: <Award className="text-primary-600" /> },
  { label: 'Kosovë & rajon', value: 'Tregu ynë', icon: <Target className="text-primary-600" /> },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-earth-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
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
              className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Prodhim i Kontrolluar</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Republika e Kosovës</p>
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
              Historia Jonë
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8"
            >
              Përvojë Familjare në <span className="text-primary-600">Prodhimin e Kërpudhave Cilësore</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                Green Group-Kosova është një biznes familjar i themeluar në Gjilan, i fokusuar në prodhimin e kërpudhave champignon dhe substratit cilësor për bujqësi.
              </p>
              <p>
                Me mbi 15 vite përvojë, ne kemi ndërtuar një proces të qëndrueshëm prodhimi që garanton freski, cilësi dhe standarde të larta për tregun vendor dhe rajonal.
              </p>
              <p>
                Produktet tona përfshijnë kërpudha të freskëta, të konzervuara dhe substrat për kultivim, të përshtatshme për biznese, markete dhe fermerë.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
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
