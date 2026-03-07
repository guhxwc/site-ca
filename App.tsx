import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;