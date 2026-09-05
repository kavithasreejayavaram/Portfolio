/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#07090e',
          card: '#0d111a',
          cardHover: '#131924',
          border: '#1e293b',
          borderHighlight: '#334155',
          accent: '#3b82f6',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          textMuted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.15)' },
          '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
