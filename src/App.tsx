import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Wholesale from './components/Wholesale';
// import AIPlanner from './components/AIPlanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Wholesale />
        {/* <AIPlanner /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
