import React from 'react';
import { ShieldCheck, Clock, ClipboardCheck, Anchor, Handshake, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section className="bg-brand-red py-24 relative overflow-hidden border-y border-white/10">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter mb-4">Diferenciais Competitivos</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Por que escolher a C. A. Rodrigues Transportes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-black/20 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-brand-black/40 transition-colors"
          >
            <ShieldCheck size={48} className="text-white mb-6" />
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">Segurança em Primeiro Lugar</h3>
            <p className="text-white/70 text-sm leading-relaxed">Protocolos rigorosos, frota inspecionada e equipe treinada para garantir zero incidentes.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-black/20 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-brand-black/40 transition-colors"
          >
            <Clock size={48} className="text-white mb-6" />
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">Pontualidade Garantida</h3>
            <p className="text-white/70 text-sm leading-relaxed">Rastreamento avançado e previsibilidade total nas entregas. Seu prazo é nosso compromisso.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-brand-black/20 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-brand-black/40 transition-colors"
          >
            <ClipboardCheck size={48} className="text-white mb-6" />
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">Organização Estruturada</h3>
            <p className="text-white/70 text-sm leading-relaxed">Processos definidos, documentação completa e transparência em cada etapa.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/20 pt-16"
        >
          <div className="text-center mb-12">
             <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest">Valores Corporativos</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <motion.div whileHover={{ scale: 1.05 }} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-brand-red transition-all text-white">
                   <Anchor size={28} />
                </div>
                <h4 className="text-white font-bold uppercase text-sm">Confiabilidade</h4>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-brand-red transition-all text-white">
                   <ShieldCheck size={28} />
                </div>
                <h4 className="text-white font-bold uppercase text-sm">Cuidado com a Carga</h4>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-brand-red transition-all text-white">
                   <Handshake size={28} />
                </div>
                <h4 className="text-white font-bold uppercase text-sm">Parceria Contínua</h4>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-brand-red transition-all text-white">
                   <Compass size={28} />
                </div>
                <h4 className="text-white font-bold uppercase text-sm">Profissionalismo</h4>
             </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};