// src/App.jsx
import React from 'react';
import { AppLayout } from './layouts/AppLayout';
import { KataCard } from './components/KataCard';
import { CodeEditor } from './components/CodeEditor';
import { PreviewPanel } from './components/PreviewPanel';

function App() {
  // Sample kata data
  const currentKata = {
    title: "Center a Div",
    description: "One of the most classic challenges in CSS! Create a container that perfectly centers its content both horizontally and vertically using Flexbox.",
    difficulty: "easy",
    xpReward: 10,
    objectives: [
      "Use display: flex on the container",
      "Center content horizontally",
      "Center content vertically",
      "Make it responsive"
    ],
    tags: ["flexbox", "layout", "beginner"]
  };

  const handleRunCode = (code) => {
    console.log('Running code:', code);
    // We'll implement preview logic later
  };

  const containerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  return (
    <AppLayout>
      <div style={containerStyles}>
        <KataCard kata={currentKata} />
        
        <div style={gridStyles}>
          <CodeEditor onRun={handleRunCode} />
          <PreviewPanel />
        </div>
      </div>
    </AppLayout>
  );
}

export default App;