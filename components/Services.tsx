import React from 'react';
import { Layers, Factory, Truck, Package, ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; image: string }> = ({ title, desc, icon, image }) => (
  <div className="group relative h-96 overflow-hidden rounded-sm bg-brand-gray border border-white/5">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="absolute inset-0 pt-8 px-8 pb-3 flex flex-col justify-end">
      <div className="absolute top-6 right-6 p-3 bg-brand-red text-white rounded-sm transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <ArrowUpRight size={24} />
      </div>

      <div className="mb-2 text-brand-red transform group-hover:-translate-y-2 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-display font-black text-white mb-1 uppercase italic transform group-hover:-translate-y-2 transition-transform duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
        {desc}
      </p>
      
      <div className="w-full h-1 bg-brand-red mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase italic">
              Especialização <br/> <span className="text-brand-red">& Foco de Mercado</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left text-lg font-light">
            Especialistas em transporte rodoviário e logística de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={<Layers size={40} />}
            title="Perfis de Alumínio"
            desc="Transporte especializado de perfis e barras de alumínio, garantindo a integridade do material delicado."
            image="https://i.imgur.com/zfSTuDL.jpeg"
          />
          <ServiceCard
            icon={<Factory size={40} />}
            title="Cargas Siderúrgicas"
            desc="Transporte seguro e eficiente de produtos siderúrgicos, aço e derivados para a indústria."
            image="https://i.imgur.com/SwOn5KX.jpeg"
          />
          <ServiceCard
            icon={<Package size={40} />}
            title="Cargas Secas"
            desc="Soluções completas para o transporte de cargas secas em geral, com abrangência nacional."
            image="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2000&auto=format&fit=crop"
          />
          <ServiceCard
            icon={<Truck size={40} />}
            title="Logística Dedicada"
            desc="Veículos exclusivos e rotas otimizadas para atender a demanda específica do seu negócio."
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};