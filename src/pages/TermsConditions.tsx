import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function TermsConditions() {
  const { language } = useLanguage();

  const content = {
    en: {
      back: 'Back to Website',
      title: 'Terms & Conditions',
      company: 'Green Group Kosova',
      intro:
        'These Terms & Conditions govern your use of the Green Group Kosova website. By accessing or using this website, you agree to these terms.',
      updated: 'Last updated: April 10, 2026',
      sections: [
        {
          title: '1. Acceptance of Terms',
          body: 'By accessing and using this website, you accept and agree to be bound by these Terms & Conditions and all applicable laws and regulations.',
        },
        {
          title: '2. Use of Website',
          body: 'This website is provided for informational and business communication purposes. You may use it only for lawful purposes and in a way that does not harm the website, the business, or other users.',
        },
        {
          title: '3. Intellectual Property',
          body: 'All content on this website, including text, branding, design elements, images, and structure, is the property of Green Group Kosova unless otherwise stated. Unauthorized copying, reproduction, or commercial use is not permitted.',
        },
        {
          title: '4. Prohibited Activities',
          body: 'You may not use this website to engage in unlawful activity, attempt unauthorized access, distribute harmful code, misuse contact forms, or interfere with the operation of the website.',
        },
        {
          title: '5. Business Information',
          body: 'We aim to keep website information accurate and up to date. However, product details, availability, business terms, and communication outcomes may change without prior notice.',
        },
        {
          title: '6. Limitation of Liability',
          body: 'Green Group Kosova shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or its content.',
        },
        {
          title: '7. External Services and Links',
          body: 'Our website may use third-party services or link to external platforms for communication or analytics. We are not responsible for the content, policies, or availability of third-party services.',
        },
        {
          title: '8. Changes to These Terms',
          body: 'We may update these Terms & Conditions at any time. Continued use of the website after updates means you accept the revised version.',
        },
        {
          title: '9. Contact Information',
          body: 'If you have any questions regarding these Terms & Conditions, you may contact us using the following details:',
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
      title: 'Termat dhe Kushtet',
      company: 'Green Group Kosova',
      intro:
        'Këto Terma dhe Kushte rregullojnë përdorimin e faqes së internetit të Green Group Kosova. Duke hyrë ose përdorur këtë faqe, ju pranoni këto kushte.',
      updated: 'Përditësuar së fundmi: 10 Prill 2026',
      sections: [
        {
          title: '1. Pranimi i Kushteve',
          body: 'Duke hyrë dhe përdorur këtë faqe interneti, ju pranoni dhe bini dakord të jeni të lidhur me këto Terma dhe Kushte si dhe me ligjet dhe rregulloret në fuqi.',
        },
        {
          title: '2. Përdorimi i Faqes',
          body: 'Kjo faqe ofrohet për qëllime informative dhe komunikimi biznesor. Ju mund ta përdorni vetëm për qëllime të ligjshme dhe në mënyrë që të mos dëmtoni faqen, biznesin ose përdoruesit e tjerë.',
        },
        {
          title: '3. Pronësia Intelektuale',
          body: 'E gjithë përmbajtja e kësaj faqeje, përfshirë tekstin, identitetin vizual, elementet e dizajnit, imazhet dhe strukturën, është pronë e Green Group Kosova përveç rasteve kur thuhet ndryshe. Kopjimi, riprodhimi ose përdorimi komercial pa autorizim nuk lejohet.',
        },
        {
          title: '4. Aktivitetet e Ndaluara',
          body: 'Ju nuk mund ta përdorni këtë faqe për aktivitete të paligjshme, përpjekje për qasje të paautorizuar, shpërndarje të kodit të dëmshëm, keqpërdorim të formularëve të kontaktit ose ndërhyrje në funksionimin e faqes.',
        },
        {
          title: '5. Informacioni Biznesor',
          body: 'Ne synojmë ta mbajmë informacionin e faqes të saktë dhe të përditësuar. Megjithatë, detajet e produkteve, disponueshmëria, kushtet e bashkëpunimit dhe rezultatet e komunikimit mund të ndryshojnë pa njoftim paraprak.',
        },
        {
          title: '6. Kufizimi i Përgjegjësisë',
          body: 'Green Group Kosova nuk mban përgjegjësi për ndonjë dëm direkt, indirekt, rastësor ose pasues që lind nga përdorimi ose pamundësia për të përdorur këtë faqe ose përmbajtjen e saj.',
        },
        {
          title: '7. Shërbimet dhe Lidhjet e Jashtme',
          body: 'Faqja jonë mund të përdorë shërbime të palëve të treta ose të përmbajë lidhje drejt platformave të jashtme për komunikim ose analitikë. Ne nuk mbajmë përgjegjësi për përmbajtjen, politikat ose disponueshmërinë e këtyre shërbimeve.',
        },
        {
          title: '8. Ndryshimet në Këto Kushte',
          body: 'Ne mund t’i përditësojmë këto Terma dhe Kushte në çdo kohë. Përdorimi i vazhdueshëm i faqes pas ndryshimeve nënkupton pranimin e versionit të përditësuar.',
        },
        {
          title: '9. Informacioni i Kontaktit',
          body: 'Nëse keni pyetje në lidhje me këto Terma dhe Kushte, mund të na kontaktoni përmes të dhënave në vijim:',
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
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              {content.back}
            </Link>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <FileText className="text-primary-700" size={24} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {content.title}
                  </h1>
                  <p className="text-slate-500 mt-1">{content.company}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-7 mb-8">{content.intro}</p>

              <div className="space-y-10">
                {content.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 leading-7">{section.body}</p>

                    {section.title.startsWith('9.') && (
                      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-slate-700 space-y-2 mt-4">
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.company}:</span>{' '}
                          Green Group Kosova
                        </p>
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.email}:</span>{' '}
                          ggkosova2014@gmail.com
                        </p>
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.phone}:</span>{' '}
                          +383 44 844 297
                        </p>
                        <p>
                          <span className="font-semibold text-slate-900">{content.labels.address}:</span>{' '}
                          {content.address}
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