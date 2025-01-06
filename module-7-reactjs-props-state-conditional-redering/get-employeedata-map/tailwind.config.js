/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },

      colors: {
        'regal-blue': '#243c5a',
      },
      
    },
  },
  plugins: [],
}

