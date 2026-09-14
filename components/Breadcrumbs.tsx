import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC<{ items: { name: string; path: string }[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-display">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={12} className="text-gray-600" />}
            {i === items.length - 1 ? (
              <span className="text-brand-red">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
