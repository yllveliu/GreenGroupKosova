import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

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
              {t.contact.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8"
            >
              {t.contact.title}{' '}
              <span className="text-primary-600">{t.contact.titleHighlight}</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-12 leading-relaxed"
            >
              {t.contact.description}
            </motion.p>

            <div className="space-y-8">
              {[
  { icon: <Phone />, title: t.contact.phoneTitle, detail: t.contact.phoneDetail, sub: t.contact.phoneSub },
  { icon: <Mail />, title: t.contact.emailTitle, detail: t.contact.emailDetail, sub: t.contact.emailSub },
  { icon: <MapPin />, title: t.contact.locationTitle, detail: t.contact.locationDetail, sub: t.contact.locationSub },
  { icon: <Clock />, title: t.contact.hoursTitle, detail: t.contact.hoursDetail, sub: t.contact.hoursSub },
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
    href="viber://chat?number=+38344844297"
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
  >
    <MessageCircle size={24} />
    {t.contact.viberButton}
  </a>
</motion.div>
</div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.contact.formTitle}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">{t.contact.fullNameLabel}</label>
                  <input
                    type="text"
                    placeholder={t.contact.fullNamePlaceholder}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">{t.contact.subjectLabel}</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none">
                  <option>{t.contact.subjectOption1}</option>
<option>{t.contact.subjectOption2}</option>
<option>{t.contact.subjectOption3}</option>
<option>{t.contact.subjectOption4}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">{t.contact.messageLabel}</label>
                <textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-5 text-lg"
              >
                <Send size={20} />
                {t.contact.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
