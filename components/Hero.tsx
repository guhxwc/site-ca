import React from 'react';
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-brand-black">
      {/* Background Video - Frota em operação */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          poster="/video/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/hero-truck.mp4" type="video/mp4" />
        </video>
        {/* Advanced Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/60"></div>
        
        {/* Grid Texture Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <motion.div 
            className="lg:col-span-8 pt-20 lg:-ml-16 xl:-ml-28 2xl:-ml-40"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded-sm backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-brand-red font-bold uppercase tracking-widest text-xs font-display">
                Desde 2012 | Sarandi – PR
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tighter font-display uppercase italic">
              Transportadora especializada{' '}
              <span className="text-brand-red">em cargas siderúrgicas e perfis de alumínio</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 border-l-2 border-brand-red pl-6">
              Transporte de aço, produtos siderúrgicos, perfis e barras de alumínio e cargas secas para
              indústria, saindo de Sarandi/Maringá-PR com atendimento em todo o Brasil.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-brand-red overflow-hidden rounded-sm skew-x-[-10deg] transition-all hover:bg-red-700"
              >
                <div className="absolute inset-0 w-3 bg-white/20 skew-x-[20deg] group-hover:animate-shine"></div>
                <div className="flex items-center justify-center gap-3 skew-x-[10deg]">
                  <span className="font-bold text-white uppercase tracking-wider font-display">Cotação Online</span>
                  <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              
              <a
                href="#services"
                className="group px-8 py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 rounded-sm skew-x-[-10deg] transition-all"
              >
                <div className="flex items-center justify-center gap-3 skew-x-[10deg]">
                  <span className="font-bold text-white uppercase tracking-wider font-display">Nossos Serviços</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Stats/Highlights */}
          <motion.div 
            className="hidden lg:block lg:col-span-4 pb-4 lg:ml-6 xl:ml-16 2xl:ml-28"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-brand-red p-6 rounded-r-lg">
              <h3 className="text-white font-display font-bold text-xl mb-4 uppercase">Destaques</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin size={16} className="text-brand-red" />
                  Base em Sarandi-PR
                </li>
                 <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <ArrowRight size={16} className="text-brand-red" />
                  Atuação em todo o Brasil
                </li>
                 <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <ArrowRight size={16} className="text-brand-red" />
                  Logística Dedicada
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent z-10 flex items-end justify-center pb-6">
        <a href="#about" className="flex flex-col items-center gap-2 group cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-brand-red transition-colors font-display">Descubra Mais</span>
          <ChevronDown size={20} className="text-white/40 group-hover:text-brand-red animate-bounce" />
        </a>
      </div>
      
      {/* Decorative Red Line */}
      <div className="absolute bottom-0 left-0 w-2/3 h-1 bg-brand-red z-20"></div>
    </section>
  );
};