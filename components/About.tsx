import React from 'react';
import { Shield, Clock, Award, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray/30 skew-x-[-12deg] translate-x-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="absolute top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-red opacity-60"></div>
             <div className="relative z-10 overflow-hidden rounded-sm skew-x-[-2deg] border border-white/10 shadow-2xl">
               <img 
                  src="https://i.imgur.com/W3Xl72V.jpeg" 
                  alt="Logística Industrial" 
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
               />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                 <p className="text-white font-display font-black text-5xl italic">2012</p>
                 <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Fundada em Sarandi - PR</p>
               </div>
             </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm font-display mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase italic">
              Confiabilidade e <br/><span className="text-gray-500">Crescimento.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l border-brand-red/30 pl-6">
              A <strong>C. A. Rodrigues Transportes</strong> é referência no transporte de cargas siderúrgicas e perfis de alumínio. Sediada em Sarandi, no eixo de Maringá-PR, com coletas frequentes no polo industrial de Arapongas. Nossa missão é oferecer soluções logísticas seguras, pontuais e organizadas, com foco total na integridade da carga e satisfação do cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors"
              >
                <Shield className="text-brand-red mb-3" size={32} />
                <h4 className="font-display font-bold text-white text-lg uppercase mb-1">Segurança</h4>
                <p className="text-sm text-gray-400">Protocolos rigorosos e frota inspecionada.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors"
              >
                <Clock className="text-brand-red mb-3" size={32} />
                <h4 className="font-display font-bold text-white text-lg uppercase mb-1">Pontualidade</h4>
                <p className="text-sm text-gray-400">Previsibilidade total nas entregas.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors"
              >
                <Award className="text-brand-red mb-3" size={32} />
                <h4 className="font-display font-bold text-white text-lg uppercase mb-1">Qualidade</h4>
                <p className="text-sm text-gray-400">Processos definidos e documentação completa.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors"
              >
                <Crosshair className="text-brand-red mb-3" size={32} />
                <h4 className="font-display font-bold text-white text-lg uppercase mb-1">Logística Dedicada</h4>
                <p className="text-sm text-gray-400">Soluções sob medida para sua necessidade.</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};