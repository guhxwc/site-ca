import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ChevronDown, Layers, Factory, Package, Truck } from 'lucide-react';
import { SERVICE_LIST, ServiceIcon } from '../lib/business';

const SERVICE_ICONS: Record<ServiceIcon, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  Factory,
  Package,
  Truck,
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Regiões e Rotas', href: '/regioes-e-rotas' },
    { name: 'Contato', href: '/contato' },
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
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/5 rounded-full px-6 py-2 border border-white/5 backdrop-blur-sm mr-6">
              <Link
                to="/"
                className="px-4 py-1 text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-brand-red transition-colors duration-200 font-display"
              >
                Início
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-1 text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-brand-red transition-colors duration-200 font-display"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  Serviços
                  <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden p-2">
                    {SERVICE_LIST.map((s) => {
                      const Icon = SERVICE_ICONS[s.icon];
                      return (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-red-50 transition-colors group/item"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover/item:bg-brand-red flex items-center justify-center transition-colors">
                            <Icon size={18} className="text-gray-500 group-hover/item:text-white transition-colors" />
                          </div>
                          <div className="pt-0.5">
                            <p className="text-sm font-bold text-gray-900 font-display leading-tight">{s.navTitle}</p>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">{s.menuDesc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-1 text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-brand-red transition-colors duration-200 font-display"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contato"
              className="flex items-center gap-3 px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 skew-x-[-10deg] group"
            >
              <span className="skew-x-[10deg] flex items-center gap-2">
                <Phone size={16} className="fill-current" />
                Cotação Rápida
              </span>
            </Link>
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
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-8 space-y-4">
          <Link
            to="/"
            className="flex items-center justify-between text-xl font-display font-bold text-white hover:text-brand-red border-b border-white/5 pb-4"
          >
            Início
            <ArrowRight size={16} className="opacity-50" />
          </Link>

          <div className="pb-4 border-b border-white/5">
            <span className="block text-xs uppercase tracking-widest text-gray-500 font-display mb-3">Serviços</span>
            <div className="space-y-1">
              {SERVICE_LIST.map((s) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-3 py-2 group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon size={16} className="text-brand-red" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-base font-display font-bold text-white/90 group-hover:text-brand-red">
                        {s.navTitle}
                      </span>
                      <ArrowRight size={14} className="opacity-50" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center justify-between text-xl font-display font-bold text-white hover:text-brand-red border-b border-white/5 pb-4"
            >
              {link.name}
              <ArrowRight size={16} className="opacity-50" />
            </Link>
          ))}

          <Link
            to="/contato"
            className="block w-full text-center mt-6 bg-brand-red text-white px-6 py-4 font-bold uppercase tracking-wider font-display"
          >
            Solicitar Cotação
          </Link>
        </div>
      </div>
    </header>
  );
};
