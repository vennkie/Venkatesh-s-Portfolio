/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        metallic: {
          50: '#f7f7f8',
          100: '#e9eaec',
          200: '#d4d6da',
          300: '#a5a9b4',
          400: '#8b8f9e',
          500: '#6b6f7b',
          600: '#515461',
          700: '#3f414a',
          800: '#27282d',
          900: '#1a1b1f',
        },
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        'primary-dark': '#3D52A0',
        'primary': '#7091E6',
        'primary-light': '#8697C4',
        'secondary': '#ADBBDA',
        'background': '#EDE8F5',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};