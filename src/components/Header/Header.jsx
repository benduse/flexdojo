import React from 'react';
import { BeltIndicator } from '../BeltIndicator';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-dojo-purple to-dojo-orange p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">FlexDojo</h1>
          <p className="text-sm opacity-90">Train. Build. Flex</p>
        </div>
        <div className="flex items-center gap-4">
          <BeltIndicator currentBelt="white" />
          <button 
            id="install-btn"
            className="hidden bg-dojo-dark text-white px-4 py-2 rounded-lg"
          >
            Install Dojo
          </button>
        </div>
      </div>
    </header>
  );
}