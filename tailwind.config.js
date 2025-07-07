// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dojo': {
          purple: '#7C3AED',
          orange: '#F97316',
          dark: '#111827',
          darker: '#0F172A',
        },
        'belt': {
          white: '#F9FAFB',
          yellow: '#FCD34D',
          orange: '#FB923C',
          green: '#4ADE80',
          blue: '#3B82F6',
          brown: '#92400E',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}