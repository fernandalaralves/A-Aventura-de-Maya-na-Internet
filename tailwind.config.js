/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6366f1', dark: '#4f46e5' },
        secondary: '#ec4899',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        shimmer: 'shimmer 2s infinite',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};