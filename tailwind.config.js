/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      magilio: ['Magilio'],
    },
    extend: {
      colors: {
        primaryYellow: '#FFEBB0',
      },
      fontSize: {
        heading: '48px',
      },
    },
  },
  plugins: [],
};
