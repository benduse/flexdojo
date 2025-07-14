// src/components/KataCard/KataCard.jsx
import React from 'react';

const styles = {
  card: {
    backgroundColor: '#1F2937',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    border: '1px solid #374151',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#F3F4F6',
    margin: 0,
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  difficulty: {
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  difficultyEasy: {
    backgroundColor: '#10B981',
    color: 'white',
  },
  difficultyMedium: {
    backgroundColor: '#F59E0B',
    color: 'white',
  },
  difficultyHard: {
    backgroundColor: '#EF4444',
    color: 'white',
  },
  xpReward: {
    color: '#A78BFA',
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  description: {
    color: '#D1D5DB',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  objectivesSection: {
    marginBottom: '1.5rem',
  },
  objectivesTitle: {
    color: '#F3F4F6',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  objectivesList: {
    listStyle: 'none',
    padding: 0,
  },
  objective: {
    color: '#D1D5DB',
    padding: '0.5rem 0',
    paddingLeft: '1.5rem',
    position: 'relative',
  },
  objectiveIcon: {
    position: 'absolute',
    left: 0,
    top: '0.625rem',
    color: '#7C3AED',
  },
  tagsContainer: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#374151',
    color: '#D1D5DB',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
  },
};

const DIFFICULTY_STYLES = {
  easy: styles.difficultyEasy,
  medium: styles.difficultyMedium,
  hard: styles.difficultyHard,
};

export function KataCard({ kata }) {
  const {
    title = "Today's Kata",
    description = "No description available",
    difficulty = "easy",
    xpReward = 10,
    objectives = [],
    tags = [],
  } = kata || {};

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.meta}>
          <span style={{ ...styles.difficulty, ...DIFFICULTY_STYLES[difficulty] }}>
            {difficulty}
          </span>
          <span style={styles.xpReward}>+{xpReward} XP</span>
        </div>
      </div>

      <p style={styles.description}>{description}</p>

      {objectives.length > 0 && (
        <div style={styles.objectivesSection}>
          <h3 style={styles.objectivesTitle}>Objectives:</h3>
          <ul style={styles.objectivesList}>
            {objectives.map((objective, index) => (
              <li key={index} style={styles.objective}>
                <span style={styles.objectiveIcon}>▸</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags.length > 0 && (
        <div style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}