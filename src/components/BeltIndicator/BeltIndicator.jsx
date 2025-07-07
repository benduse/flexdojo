// src/components/BeltIndicator/BeltIndicator.jsx
import React from 'react';
import styles from './BeltIndicator.module.css';

const BELT_CONFIG = {
  white: {
    color: 'bg-belt-white',
    textColor: 'text-gray-800',
    label: 'White Belt',
    minXP: 0,
  },
  yellow: {
    color: 'bg-belt-yellow',
    textColor: 'text-gray-800',
    label: 'Yellow Belt',
    minXP: 100,
  },
  orange: {
    color: 'bg-belt-orange',
    textColor: 'text-white',
    label: 'Orange Belt',
    minXP: 250,
  },
  green: {
    color: 'bg-belt-green',
    textColor: 'text-white',
    label: 'Green Belt',
    minXP: 500,
  },
  blue: {
    color: 'bg-belt-blue',
    textColor: 'text-white',
    label: 'Blue Belt',
    minXP: 1000,
  },
  brown: {
    color: 'bg-belt-brown',
    textColor: 'text-white',
    label: 'Brown Belt',
    minXP: 2000,
  },
  black: {
    color: 'bg-belt-black',
    textColor: 'text-white',
    label: 'Black Belt',
    minXP: 5000,
  },
};

export function BeltIndicator({ currentBelt = 'white', xp = 0 }) {
  const belt = BELT_CONFIG[currentBelt] || BELT_CONFIG.white;
  
  // Calculate progress to next belt
  const beltLevels = Object.entries(BELT_CONFIG);
  const currentIndex = beltLevels.findIndex(([key]) => key === currentBelt);
  const nextBelt = beltLevels[currentIndex + 1];
  
  let progressPercent = 0;
  let xpToNext = 0;
  
  if (nextBelt) {
    const currentMinXP = belt.minXP;
    const nextMinXP = nextBelt[1].minXP;
    const xpInCurrentBelt = xp - currentMinXP;
    const xpNeededForNext = nextMinXP - currentMinXP;
    progressPercent = Math.min((xpInCurrentBelt / xpNeededForNext) * 100, 100);
    xpToNext = nextMinXP - xp;
  }

  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
      {/* Belt Icon */}
      <div className="relative">
        <div 
          className={`w-8 h-8 ${belt.color} rounded-sm shadow-md flex items-center justify-center`}
          aria-label={belt.label}
        >
          <div className="w-6 h-0.5 bg-black/30"></div>
        </div>
      </div>
      
      {/* Belt Info */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{belt.label}</span>
        {nextBelt && (
          <div className="flex items-center gap-2">
            <div className="w-20 h-1 bg-black/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/50 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs opacity-75">{xpToNext} XP to next</span>
          </div>
        )}
      </div>
    </div>
  );
}