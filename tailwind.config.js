/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/types/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/navigation/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          500: '#80CF8B',
        },
        morado: '#A786DF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        secondary: ['Saira', 'sans-serif'],
      },     
    },
  },
  plugins: [],
};
