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