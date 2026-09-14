import React from 'react';

export const PageBanner: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}> = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm font-display mb-4 block">
        {eyebrow}
      </span>
      <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase italic tracking-tighter max-w-4xl">
        {title}
      </h1>
      <p className="text-gray-400 text-lg leading-relaxed max-w-2xl border-l-2 border-brand-red pl-6">
        {description}
      </p>
    </div>
  );
};
