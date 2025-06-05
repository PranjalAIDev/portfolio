/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7ccafb',
          400: '#36b0f7',
          500: '#0c97e9',
          600: '#0078c7',
          700: '#0262a2',
          800: '#065285',
          900: '#0a456e',
          950: '#072c49',
        },
        secondary: {
          50: '#f6f4fe',
          100: '#efe9fd',
          200: '#e1d7fc',
          300: '#cbb8f9',
          400: '#b28ff4',
          500: '#9a66eb',
          600: '#8744de',
          700: '#7433c0',
          800: '#612b9e',
          900: '#512681',
          950: '#331557',
        },
        accent: {
          50: '#fef6ee',
          100: '#fdead8',
          200: '#fad5b1',
          300: '#f7b87f',
          400: '#f3914a',
          500: '#f06b1f',
          600: '#e14e13',
          700: '#ba3812',
          800: '#942d16',
          900: '#782715',
          950: '#411109',
        },
        dark: {
          100: '#d5d6d8',
          200: '#aaadb1',
          300: '#80848b',
          400: '#555b64',
          500: '#2b323d',
          600: '#222831',
          700: '#191e25',
          800: '#111318',
          900: '#08090c',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};