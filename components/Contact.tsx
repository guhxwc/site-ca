import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "5544999240991"; // Format: CountryCode + AreaCode + Number
    
    const text = `*Nova Solicitação de Cotação via Site*
    
*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}

*Necessidade Logística:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-brand-gray py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs font-display">Entre em Contato</span>
              <h2 className="text-4xl font-display font-black text-white mt-2 uppercase italic">Vamos Conversar?</h2>
              <p className="text-gray-400 mt-4 font-light">
                Estamos prontos para ser seu parceiro logístico confiável. Agende uma conversa para discutir seus requisitos específicos.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="group flex items-center gap-4 p-4 bg-brand-black/50 border border-white/5 rounded-sm hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <p className="text-white font-display font-bold text-lg">(44) 99924 - 0991</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-brand-black/50 border border-white/5 rounded-sm hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-mail Comercial</p>
                  <p className="text-white font-display font-bold text-lg break-all">carlosrodrigues.transportes@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-brand-black/50 border border-white/5 rounded-sm hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Localização</p>
                  <p className="text-white font-display font-bold text-lg">Sarandi – Paraná</p>
                  <p className="text-gray-500 text-sm">Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-brand-black p-8 md:p-12 rounded-sm border border-white/5 relative">
             <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
                <img 
                  src="https://i.imgur.com/KVPxxDG.png" 
                  alt="Logo C.A. Rodrigues" 
                  className="w-32 h-auto"
                />
             </div>
             
             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="md:col-span-2">
                   <h3 className="text-white font-display font-bold text-xl mb-6 flex items-center gap-2">
                     <span className="w-1 h-6 bg-brand-red inline-block skew-x-[-12deg]"></span>
                     Formulário de Contato
                   </h3>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-gray/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-red focus:bg-brand-black transition-all" 
                    placeholder="Seu nome" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider ml-1">Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-brand-gray/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-red focus:bg-brand-black transition-all" 
                    placeholder="Nome da empresa" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider ml-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-gray/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-red focus:bg-brand-black transition-all" 
                    placeholder="exemplo@empresa.com" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider ml-1">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-gray/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-red focus:bg-brand-black transition-all" 
                    placeholder="(00) 00000-0000" 
                  />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider ml-1">Necessidade Logística</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-gray/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-red focus:bg-brand-black transition-all" 
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full md:w-auto bg-brand-red hover:bg-red-700 text-white font-display font-bold text-lg uppercase px-12 py-4 rounded-sm transition-all flex items-center justify-center gap-2 skew-x-[-5deg] hover:skew-x-0">
                    <Send size={20} />
                    Enviar via WhatsApp
                  </button>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};