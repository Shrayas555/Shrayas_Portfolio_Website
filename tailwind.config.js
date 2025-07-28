/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        charcoal: '#23272A', // deep charcoal (jacket)
        slate: '#495057',    // slate gray (pants)
        silver: '#CED4DA',   // silver/gray (shirt)
        mutedblue: '#5B6C8F', // muted blue (cool accent)
        accent: '#A3A3A3', // platinum/silver for ultra-modern accent
        // Additional colors for skill gradients
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        red: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        yellow: {
          400: '#facc15',
          500: '#eab308',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          800: '#1e40af',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
        },
        purple: {
          500: '#a855f7',
        },
        pink: {
          500: '#ec4899',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
        },
        emerald: {
          500: '#10b981',
        },
        gray: {
          600: '#4b5563',
          800: '#1f2937',
        },
      },
      keyframes: {
        'glow-border': {
          '0%, 100%': { borderColor: '#fff' },
          '50%': { borderColor: '#22d3ee' }, // cyan-400
        },
      },
      animation: {
        'glow-border': 'glow-border 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 