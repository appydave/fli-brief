/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#e0e5ec',
        text: {
          primary: '#2d3748',
          secondary: '#4a5568',
        },
        accent: '#3498db',
      },
    },
  },
  plugins: [],
}