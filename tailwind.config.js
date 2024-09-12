/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',       // Black for song titles
        'medium-gray': '#6B7280', // Medium grey for artist names
        'white': '#FFFFFF',       // White for background
      },
      boxShadow: {
        thin: '0 2px 8px rgba(0, 0, 0, 0.1)', // Thin shadow border
      },
    },
  },
  plugins: [],
}
