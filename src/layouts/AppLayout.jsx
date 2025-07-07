import React from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import './AppLayout.module.css'; 

export function AppLayout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}