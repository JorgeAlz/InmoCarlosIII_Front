/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': '1675px', // Tamaño personalizado
      },
    },
  },
  plugins: [],
}

