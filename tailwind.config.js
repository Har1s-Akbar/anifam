/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm: '320px',
      md: '620px',
      lg: '900px',
    },
    extend: {},
  },
  plugins: [],
}
