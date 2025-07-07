// src/components/Navigation/Navigation.jsx
import React from 'react';
import styles from './Navigation.module.css';

export function Navigation() {
  const navItems = [
    { id: 'daily', label: 'Daily Kata', active: true },
    { id: 'flexbox', label: 'Flexbox' },
    { id: 'grid', label: 'Grid' },
    { id: 'animations', label: 'Animations' },
    { id: 'sparring', label: 'Sparring' },
  ];

  return (
    <nav className="bg-dojo-darker border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                ${item.active 
                  ? 'bg-dojo-purple text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}