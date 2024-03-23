/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary': "#F97316",
        'brandPrimary': "#9CA3AF",
        'card-color': "#FA782F66"
      }
    },
  },
  plugins: [],
}

