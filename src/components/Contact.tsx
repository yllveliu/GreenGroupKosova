import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const [errors, setErrors] = useState({
  fullName: '',
  email: '',
  message: '',
});
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const isValidEmail = (value: string) => {
    return value.includes('@') && value.includes('.com');
  };

  const handleFakeSubmit = () => {
  const newErrors = {
    fullName: '',
    email: '',
    message: '',
  };

  if (!fullName.trim()) {
    newErrors.fullName = t.validation.nameRequired;
  }

  if (!email.includes('@') || !email.includes('.com')) {
    newErrors.email = t.validation.emailInvalid;
  }

  if (!message.trim()) {
    newErrors.message = t.validation.messageRequired;
  }

  setErrors(newErrors);

  if (!newErrors.fullName && !newErrors.email && !newErrors.message) {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3500);
  }
};

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6"
            >
              {t.contact.title}{' '}
              <span className="text-primary-600">{t.contact.titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl"
            >
              {t.contact.description}
            </motion.p>

            <div className="space-y-6 sm:space-y-8">
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
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 text-white rounded-xl sm:rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-md shadow-purple-500/20"
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
            className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg relative"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              {t.contact.formTitle}
            </h3>

          <form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    
    {/* Full Name */}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 ml-1">
        {t.contact.fullNameLabel}
      </label>

      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder={t.contact.fullNamePlaceholder}
        className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all`}
      />

      {errors.fullName && (
        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
      )}
    </div>

    {/* Email */}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 ml-1">
        {t.contact.emailLabel}
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.contact.emailPlaceholder}
        className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all`}
      />

      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}
    </div>

  </div>

  {/* Subject */}
  <div className="relative">
  <select
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    className="w-full bg-white border border-slate-200 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none"
  >
    <option>{t.contact.subjectOption1}</option>
    <option>{t.contact.subjectOption2}</option>
    <option>{t.contact.subjectOption3}</option>
    <option>{t.contact.subjectOption4}</option>
  </select>

  <ChevronDown
    size={18}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />
</div>

  {/* Message */}
  <div className="space-y-2">
    <label className="text-sm font-semibold text-slate-700 ml-1">
      {t.contact.messageLabel}
    </label>

    <textarea
      rows={5}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder={t.contact.messagePlaceholder}
      className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-slate-200'} rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none`}
    />

    {errors.message && (
      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
    )}
  </div>

  <button
    type="button"
    onClick={handleFakeSubmit}
    className="w-full btn-primary flex items-center justify-center gap-2 py-4 sm:py-5 text-base sm:text-lg"
  >
    <Send size={20} />
    {t.contact.submitButton}
  </button>
</form>

            <AnimatePresence>
              {showPopup && (
                <motion.div
  initial={{ opacity: 0, y: 12, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 12, scale: 0.98 }}
  transition={{ duration: 0.2 }}
  className="fixed bottom-4 left-4 right-4 sm:absolute sm:bottom-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[360px] bg-white border border-slate-200 shadow-xl rounded-2xl p-4 z-[100]"
>
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
      <Mail size={18} />
    </div>

    <div className="flex-1">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          {t.validation.popupTitle}
        </h4>
        <button
          type="button"
          onClick={() => setShowPopup(false)}
          className="text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
        {t.validation.popupText}
      </p>
    </div>
  </div>
</motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}