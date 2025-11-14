/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Nova paleta de cores do site
        blue: {
          DEFAULT: '#4167B2',
          light: '#AEC3E7',
          dark: '#1F3A5F',
        },
        light: '#F4F4F4',
        white: '#FFFFFF',
        gray: {
          light: '#D3D3D3',
          DEFAULT: '#828282',
          dark: '#595959',
        },
        dark: {
          DEFAULT: '#222222',
        },
        // Mantendo primary/secondary/accent para compatibilidade
        primary: {
          50: '#F4F4F4',
          100: '#AEC3E7',
          200: '#AEC3E7',
          300: '#AEC3E7',
          400: '#4167B2',
          500: '#4167B2',
          600: '#4167B2',
          700: '#1F3A5F',
          800: '#1F3A5F',
          900: '#1F3A5F',
        },
        secondary: {
          50: '#F4F4F4',
          100: '#D3D3D3',
          200: '#D3D3D3',
          300: '#828282',
          400: '#828282',
          500: '#595959',
          600: '#595959',
          700: '#222222',
          800: '#222222',
          900: '#222222',
        },
        accent: {
          50: '#F4F4F4',
          100: '#AEC3E7',
          200: '#AEC3E7',
          300: '#4167B2',
          400: '#4167B2',
          500: '#4167B2',
          600: '#1F3A5F',
          700: '#1F3A5F',
          800: '#222222',
          900: '#222222',
        },
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      maxHeight: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};