import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      back: 'Back to Website',
      title: 'Privacy Policy',
      company: 'Green Group Kosova',
      intro:
        'This Privacy Policy outlines how Green Group Kosova collects, uses, and safeguards your information when you interact with our website or contact us for business inquiries and cooperation.This Privacy Policy outlines how Green Group Kosova collects, uses, and safeguards your information when you interact with our website or contact us for business inquiries and cooperation.',
      updated: 'Last updated: April 11, 2026',
      sections: [
        {
          title: '1. Information We Collect',
          body: 'We may collect personal information that you provide directly through our contact form, email communication, phone contact, or other business inquiry channels.',
          bullets: ['Name', 'Email address', 'Phone number', 'Message content', 'Business inquiry details'],
        },
        {
  title: '2. How We Use Your Information',
  body: 'We use the information you provide strictly for legitimate business purposes related to communication, customer support, and service improvement. We do not use your information for marketing automation or unsolicited communication.',
  bullets: [
    'Respond to inquiries and contact requests',
    'Communicate regarding products, wholesale cooperation, or supply requests',
    'Improve our website and communication process',
  ],
},
        {
          title: '3. Data Sharing',
          body: 'We do not sell or rent your personal information. We may use trusted third-party services, such as email or website tools, only when necessary to operate our business communication and website functionality.',
        },
        {
          title: '4. Data Security',
          body: 'We take reasonable technical and organizational measures to protect your information against unauthorized access, misuse, loss, or disclosure.',
        },
        {
          title: '5. Cookies and Website Usage',
          body: 'Our website may use basic technical cookies or analytics tools to improve user experience and understand website performance. These tools do not change the core purpose of our website, which is business communication and presentation.',
        },
        {
          title: '6. Your Rights',
          body: 'You may request access to, correction of, or deletion of your personal information by contacting us directly.',
        },
        {
          title: '7. Contact Information',
          body: 'If you have any questions about this Privacy Policy, you may contact us using the following details:',
        },
      ],
      labels: {
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
      },
      address: 'Livoq i Ultë, Gjilan, Kosovo',
    },
    al: {
      back: 'Kthehu te Faqja Kryesore',
      title: 'Politika e Privatësisë',
      company: 'Green Group Kosova',
      intro:
        'Kjo Politikë e Privatësisë shpjegon se si Green Group Kosova mbledh, përdor dhe mbron informacionin tuaj kur përdorni faqen tonë të internetit ose na kontaktoni për qëllime biznesi.',
      updated: 'Përditësuar së fundmi: 10 Prill 2026',
      sections: [
        {
          title: '1. Informacioni që Mbledhim',
          body: 'Ne mund të mbledhim të dhëna personale që ju i jepni drejtpërdrejt përmes formularit të kontaktit, komunikimit me email, kontaktit telefonik ose kanaleve të tjera të pyetjeve biznesore.',
          bullets: ['Emri', 'Adresa e emailit', 'Numri i telefonit', 'Përmbajtja e mesazhit', 'Detajet e kërkesës biznesore'],
        },
        {
  title: '2. Si e Përdorim Informacionin Tuaj',
  body: 'Informacionin që na jepni e përdorim vetëm për qëllime legjitime biznesore që lidhen me komunikimin, mbështetjen për klientët dhe përmirësimin e shërbimeve. Ne nuk përdorim të dhënat tuaja për marketing automatik ose komunikime të padëshiruara.',
  bullets: [
    'T’u përgjigjemi pyetjeve dhe kërkesave për kontakt',
    'Të komunikojmë për produktet, bashkëpunimin me shumicë ose kërkesat për furnizim',
    'Të përmirësojmë faqen dhe procesin tonë të komunikimit',
  ],
},
        {
          title: '3. Ndarja e të Dhënave',
          body: 'Ne nuk shesim dhe nuk japim me qira informacionin tuaj personal. Mund të përdorim shërbime të besueshme të palëve të treta, si mjete emaili ose mjete të faqes, vetëm kur janë të nevojshme për funksionimin e komunikimit biznesor dhe faqes sonë.',
        },
        {
          title: '4. Siguria e të Dhënave',
          body: 'Ne marrim masa të arsyeshme teknike dhe organizative për të mbrojtur informacionin tuaj nga qasja e paautorizuar, keqpërdorimi, humbja ose zbulimi.',
        },
        {
          title: '5. Cookies dhe Përdorimi i Faqes',
          body: 'Faqja jonë mund të përdorë cookies bazike teknike ose mjete analitike për të përmirësuar përvojën e përdoruesit dhe për të kuptuar performancën e faqes. Këto mjete nuk e ndryshojnë qëllimin kryesor të faqes sonë, i cili është prezantimi dhe komunikimi biznesor.',
        },
        {
          title: '6. Të Drejtat Tuaja',
          body: 'Ju mund të kërkoni qasje, korrigjim ose fshirje të të dhënave tuaja personale duke na kontaktuar drejtpërdrejt.',
        },
        {
          title: '7. Informacioni i Kontaktit',
          body: 'Nëse keni pyetje në lidhje me këtë Politikë të Privatësisë, mund të na kontaktoni përmes të dhënave në vijim:',
        },
      ],
      labels: {
        company: 'Kompania',
        email: 'Email',
        phone: 'Telefoni',
        address: 'Adresa',
      },
      address: 'Livoq i Ultë, Gjilan, Kosovë',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              {content.back}
            </Link>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <ShieldCheck className="text-primary-700" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    {content.title}
                  </h1>
                  <p className="text-slate-500 mt-1">{content.company}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-7 mb-8">{content.intro}</p>

              <div className="space-y-10">
                {content.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 leading-7 mb-4">{section.body}</p>

                    {'bullets' in section && section.bullets && (
                      <ul className="list-disc pl-6 text-slate-600 leading-7 space-y-2">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.title.startsWith('7.') && (
                      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-slate-700 space-y-2 mt-4">
                        <p>
  <span className="font-semibold text-slate-900">{content.labels.company}:</span>{' '}
  <Link
    to="/"
    className="hover:text-primary-700 transition-colors"
  >
    Green Group Kosova
  </Link>
</p>
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.email}:</span>{' '}
                          <a
  href="mailto:ggkosova2014@gmail.com"
  className="hover:text-primary-700 transition-colors"
>
  ggkosova2014@gmail.com
</a>
                        </p>
                        <p>
  <span className="font-semibold text-slate-900">{content.labels.phone}:</span>{' '}
  <a
    href="tel:+38344844297"
    className="hover:text-primary-700 transition-colors"
  >
    +383 44 844 297
  </a>
</p>
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.address}:</span>{' '}
                          <a
  href="https://www.google.com/maps?q=42.4358333,21.4481067"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-primary-700 transition-colors"
>
  {content.address}
</a>
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">{content.updated}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}