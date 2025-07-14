// src/components/Navigation/Navigation.jsx
import React from 'react';

const styles = {
  nav: {
    backgroundColor: '#0F172A',
    borderBottom: '1px solid #374151',
    padding: '0.5rem 0',
  },
  navContainer: {
    display: 'flex',
    gap: '1rem', // Increased gap from 0.5rem to 1rem
    overflowX: 'auto',
    padding: '0.75rem 1rem',
    maxWidth: '1400px',
    margin: '0 auto',
    // Hide scrollbar but keep functionality
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  navButton: {
    padding: '0.75rem 1.5rem', // Increased padding
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    transition: 'all 200ms ease-in-out',
    color: '#9CA3AF',
    backgroundColor: 'transparent',
    border: '2px solid transparent', // Added border for better definition
    cursor: 'pointer',
  },
  navButtonHover: {
    color: '#F3F4F6',
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  navButtonActive: {
    backgroundColor: '#7C3AED',
    color: 'white',
    borderColor: '#7C3AED',
    boxShadow: '0 0 0 3px rgba(124, 58, 237, 0.1)',
  },
};

export function Navigation() {
  const [hoveredId, setHoveredId] = React.useState(null);
  const navItems = [
    { id: 'daily', label: 'Daily Kata', active: true },
    { id: 'flexbox', label: 'Flexbox' },
    { id: 'grid', label: 'Grid' },
    { id: 'animations', label: 'Animations' },
    { id: 'sparring', label: 'Sparring' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        {navItems.map((item) => (
          <button
            key={item.id}
            style={{
              ...styles.navButton,
              ...(item.active ? styles.navButtonActive : {}),
              ...(hoveredId === item.id && !item.active ? styles.navButtonHover : {}),
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}