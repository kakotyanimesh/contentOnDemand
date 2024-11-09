/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // this ensure that my tailwind will apply to files that are listed here
  ],
  theme: {
    extend: {
      fontFamily : {
        "CabinetGrotesk" : ["CabinetGrotesk", 'sans-serif'],
        'interLogo' : ['interLogo', 'sans-serif'],
        'Hoover' : ['Hoover', 'sans-serif'],
        'jakarta' : ['jakarta']
      },
      animation : {
        'spin-slow' : 'spin 10s linear infinite'
      }
    },
  },
  plugins: [],
}

