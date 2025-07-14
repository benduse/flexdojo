// src/components/PreviewPanel/PreviewPanel.jsx
import React, { useRef, useEffect } from 'react';

const styles = {
  container: {
    backgroundColor: '#1F2937',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    border: '1px solid #374151',
    height: 'fit-content',
  },
  header: {
    backgroundColor: '#111827',
    padding: '0.75rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #374151',
  },
  title: {
    color: '#F3F4F6',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  button: {
    backgroundColor: 'transparent',
    color: '#9CA3AF',
    border: '1px solid #374151',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all 200ms ease',
  },
  iframe: {
    width: '100%',
    height: '400px',
    border: 'none',
    backgroundColor: 'white',
    display: 'block',
  },
};

export function PreviewPanel({ code = {} }) {
  const iframeRef = useRef(null);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    const { html = '', css = '', js = '' } = code;
    
    const previewHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (error) {
              console.error('Error:', error);
            }
          </script>
        </body>
      </html>
    `;

    const blob = new Blob([previewHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
  };

  useEffect(() => {
    updatePreview();
  }, [code]);

  const handleRefresh = () => {
    updatePreview();
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>Preview</span>
        <div style={styles.actions}>
          <button 
            style={styles.button}
            onClick={handleRefresh}
            title="Refresh preview"
          >
            ↻ Refresh
          </button>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        style={styles.iframe}
        title="Code preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}