import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
            >
              KONTAKTI
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8"
            >
              Na Kontaktoni për <span className="text-primary-600">Bashkëpunim</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-12 leading-relaxed"
            >
              Keni interes për furnizim me kërpudha të freskëta apo produkte të tjera? Na kontaktoni për oferta dhe bashkëpunim të qëndrueshëm.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, title: 'Na Telefononi', detail: '+383 44 844 297', sub: 'E hënë – e shtunë, 7am-3pm' },
                { icon: <Mail />, title: 'Na shkruani', detail: 'ggkosova2014@gmail.com', sub: 'Përgjigjemi brenda 24 orëve' },
                { icon: <MapPin />, title: 'Na vizitoni', detail: 'Livoç i Ultë, Gjilan', sub: 'Kosovë, 60000' },
                { icon: <Clock />, title: 'Orari i punës', detail: '07:00 - 15:00', sub: 'E hënë – e shtunë' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-primary-700 font-medium">{item.detail}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <a 
                href="https://wa.me/38344844297" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={24} />
                Na kontaktoni në WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Dërgoni një Mesazh</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Emri i plotë</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Subjekti</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none">
                  <option>Kërkesë për furnizim</option>
                  <option>Pyetje për produkte</option>
                  <option>Kërkesë për bashkëpunim</option>
                  <option>Tjetër</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Mesazhi</label>
                <textarea
                  rows={5}
                  placeholder="Si mund të ju ndihmojmë?"
                  className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-5 text-lg"
              >
                <Send size={20} />
                Dërgo Mesazhin
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
