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
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white selection:bg-primary-100 selection:text-primary-900">
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
}