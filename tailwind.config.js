/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#123524',
        green: {
          DEFAULT: '#2F8F5B',
          light: '#8FE38B',
        },
        paper: '#F6FAF5',
        ink: '#0D1B12',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '28px',
        xl3: '36px',
      },
      keyframes: {
        drift: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '400px 0' },
        },
      },
      animation: {
        drift: 'drift 18s linear infinite',
      },
      boxShadow: {
        card: '0 20px 40px rgba(0,0,0,0.15)',
        hover: '0 24px 40px rgba(18,53,36,0.1)',
      },
    },
  },
  plugins: [],
}
