/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#060606',
        'secondary': '#131313',
        'third': '#1C1C22',
        'vivid-cyan': '#7EADFC',
        'white-secondary': '#AFB3B7',
      }
    },
  },
  plugins: [],
}

