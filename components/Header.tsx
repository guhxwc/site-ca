import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'A Empresa', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-black/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <img 
              src="https://i.imgur.com/KVPxxDG.png" 
              alt="C.A. Rodrigues Transportes" 
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl text-white uppercase italic tracking-tighter leading-none">
                C. A. Rodrigues
              </span>
              <span className="font-display font-bold text-xs md:text-sm text-brand-red tracking-[0.2em] uppercase leading-none mt-1">
                Transportes
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex bg-white/5 rounded-full px-6 py-2 border border-white/5 backdrop-blur-sm mr-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1 text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-brand-red transition-colors duration-200 font-display"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              className="flex items-center gap-3 px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 skew-x-[-10deg] group"
            >
              <span className="skew-x-[10deg] flex items-center gap-2">
                <Phone size={16} className="fill-current" />
                Cotação Rápida
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between text-xl font-display font-bold text-white hover:text-brand-red border-b border-white/5 pb-4"
            >
              {link.name}
              <ArrowRight size={16} className="opacity-50" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center mt-6 bg-brand-red text-white px-6 py-4 font-bold uppercase tracking-wider font-display"
          >
            Solicitar Cotação
          </a>
        </div>
      </div>
    </header>
  );
};