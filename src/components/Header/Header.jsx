// src/components/Header/Header.jsx
import React from 'react';
import { BeltIndicator } from '../BeltIndicator';

const headerStyles = {
  header: {
    background: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)',
    padding: '1.25rem 1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    color: 'white',
  },
  h1: {
    fontSize: '2rem',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.025em',
  },
  tagline: {
    fontSize: '0.875rem',
    opacity: 0.9,
    marginTop: '0.125rem',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  installButton: {
    backgroundColor: 'rgba(17, 24, 39, 0.9)',
    backdropFilter: 'blur(8px)',
    color: '#F3F4F6',
    padding: '0.625rem 1.25rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all 200ms ease',
  },
  installButtonHover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
};

export function Header() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.headerContent}>
        <div style={headerStyles.logo}>
          <h1 style={headerStyles.h1}>FlexDojo</h1>
          <p style={headerStyles.tagline}>Train. Build. Flex</p>
        </div>
        <div style={headerStyles.headerActions}>
          <BeltIndicator currentBelt="white" xp={30} />
          <button 
            id="install-btn"
            style={{
              ...headerStyles.installButton,
              ...(isHovered ? headerStyles.installButtonHover : {}),
              display: 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Install Dojo
          </button>
        </div>
      </div>
    </header>
  );
}