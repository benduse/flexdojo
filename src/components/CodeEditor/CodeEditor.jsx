// src/components/CodeEditor/CodeEditor.jsx
import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#1F2937',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    border: '1px solid #374151',
    marginBottom: '1rem',
  },
  header: {
    backgroundColor: '#111827',
    padding: '0.75rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #374151',
  },
  tabs: {
    display: 'flex',
    gap: '0.25rem',
  },
  tab: {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#9CA3AF',
    border: 'none',
    borderRadius: '0.375rem 0.375rem 0 0',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 200ms ease',
  },
  activeTab: {
    backgroundColor: '#1F2937',
    color: '#F3F4F6',
  },
  runButton: {
    backgroundColor: '#7C3AED',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background-color 200ms ease',
  },
  runButtonHover: {
    backgroundColor: '#6D28D9',
  },
  editor: {
    width: '100%',
    minHeight: '400px',
    padding: '1rem',
    backgroundColor: '#1F2937',
    color: '#F3F4F6',
    border: 'none',
    fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
    fontSize: '14px',
    lineHeight: '1.6',
    resize: 'vertical',
    outline: 'none',
  },
};

export function CodeEditor({ onRun, initialCode = '' }) {
  const [activeTab, setActiveTab] = useState('html');
  const [code, setCode] = useState({
    html: initialCode || '<div class="container">\n  <h1>Hello FlexDojo!</h1>\n</div>',
    css: '/* Add your styles here */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}',
    js: '// Add your JavaScript here\nconsole.log("Welcome to FlexDojo!");',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleCodeChange = (value) => {
    setCode(prev => ({
      ...prev,
      [activeTab]: value,
    }));
  };

  const handleRun = () => {
    if (onRun) {
      onRun(code);
    }
  };

  const tabs = [
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'js', label: 'JavaScript' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              style={{
                ...styles.tab,
                ...(activeTab === tab.id ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          style={{
            ...styles.runButton,
            ...(isHovered ? styles.runButtonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleRun}
        >
          <span>▶</span>
          <span>Run Code</span>
        </button>
      </div>
      <textarea
        style={styles.editor}
        value={code[activeTab]}
        onChange={(e) => handleCodeChange(e.target.value)}
        placeholder={`Write your ${activeTab.toUpperCase()} code here...`}
        spellCheck={false}
      />
    </div>
  );
}