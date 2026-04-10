import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Wholesale from './components/Wholesale';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import { Routes, Route, useLocation } from 'react-router-dom';

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white selection:bg-primary-100 selection:text-primary-900">
      <ScrollToHash />
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Products />
        <Process />
        <Wholesale />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </>
  );
}