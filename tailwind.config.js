/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "color-body": "#ffffff",
        "color-footer": "#052347",
        "color-main-text": "#051441",
        "color-sub-text": "#5C70E5",
        "color-description": "#5D677E",
        "color-orange": "#FF7D00",
        "color-blue": "#365DE6",
        "color-light": "#F4F7FD",
      },
    },

    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },

    container: {
      center: true,
      padding: "1rem",

      screens: {
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  plugins: [],
}

