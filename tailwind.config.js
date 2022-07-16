/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      magilio: ['Magilio'],
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primaryYellow: '#FFEBB0',
        secondaryYellow: '#FFC176',
        tertiaryYellow: '#FFE779',
        quarternaryYellow: '#F5ECCB',
        primaryCream: '#FFFCF2',
        primaryOrange: '#FFA06F',
        secondaryOrange: '#FF7D4B',
        primaryBlack: '#171133',
        grey: '#D9D9D9',
        primaryGreen: '#2F4250',
        secondaryGreen: '#4F6266',
      },
      fontSize: {
        heading: '48px',
        subHeading: '36px',
      },
    },
  },
  plugins: [],
};
