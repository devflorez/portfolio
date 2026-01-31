/** @type {import('tailwindcss').Config} */
const colors = {
  dark: '#0B0D10',
  offwhite: '#E5E7EB',
  muted: '#9CA3AF',
  accent: '#2563EB',
  'accent-soft': '#3B82F6',
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUnder: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeUnder: 'fadeUnder 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
