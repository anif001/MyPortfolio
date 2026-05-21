/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#97DFFC',
          periwinkle: '#858AE3',
          purple: '#613DC1',
          deep: '#4E148C',
          dark: '#2C0735',
        },
        space: {
          darker: '#050505',
          dark: '#0d0d0d',
          card: 'rgba(255, 255, 255, 0.015)',
          cardHover: 'rgba(255, 255, 255, 0.035)',
          border: 'rgba(255, 255, 255, 0.03)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-slow': 'glow 6s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'drift': 'drift 20s linear infinite',
        'drift-reverse': 'driftReverse 25s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        driftReverse: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(15px) translateX(-10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
