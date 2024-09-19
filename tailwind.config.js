/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E59C2D',
        primaryLight: '#EDDDB2',
        primaryLighter: '#EDE7D1',
        secondary: '#792927',
        tertiary: '#3E1D4C',
        cream: '#F0E9D3',
        bkg: '#F4F4F4',
        textLight: '#F0E9D3',
        placeholder: '#BCBCBC',
        textGray: '#595959',
        textDark: '#000000',
        hotRed: '#C10E1B',
        coldBlue: '#56B1FC',
      },
      fontFamily: {
        poppinsReg: ['PoppinsRegular', 'sans-serif'],
        poppinsMed: ['PoppinsMedium', 'sans-serif'],
        poppinsSemBold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
        poppinsExtBold: ['PoppinsExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
