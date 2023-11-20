/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bases: '#164863',
        primary: '#205F81',
        secondary: '#427D9D',
        third: '#9BBEC8',
        fourth: '#DDF2FD',
        black: '#1F1F1F',
        white: '#EFEFEF',
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      maxWidth: {
        mt: '528px',
      },
      screens: {
        lm: '425px',
        mt: '528px',
      },
    },
  },
  plugins: [],
};
