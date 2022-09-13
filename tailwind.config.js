/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}", "./public/**/*.{ejs,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFF",
        "trackr": {
          DEFAULT: "#10B981",
          100: "#E9FDE5",
          200: "#B1F8B1",
          300: "#7EF491",
          400: "#4AEF81",
          500: "#16EB81",
          600: "#10B981",
          700: "#0D9881",
          800: "#0A7777",
          900: "#074956",
        },
      },
    },
  },
  plugins: [],
};
