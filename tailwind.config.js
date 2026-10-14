/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#7C3AED',
        secondary: '#EC4899',
        accent: '#06B6D4',
        neon: '#39FF14',
        gold: '#FFD700',
        plasma: '#FF6B35',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(124, 58, 237, 0.7), 0 0 60px rgba(124, 58, 237, 0.3)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.7), 0 0 60px rgba(236, 72, 153, 0.3)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.7), 0 0 60px rgba(6, 182, 212, 0.3)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.7), 0 0 60px rgba(57, 255, 20, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

