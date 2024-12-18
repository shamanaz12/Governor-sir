// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",      // This includes all files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // This includes all files in the components directory
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF5733', // Custom color
      },
    },
  },
  plugins: [],
}
