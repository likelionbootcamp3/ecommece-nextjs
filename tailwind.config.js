const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["3.5rem", "1"],
        h2: ["2.75rem", "1.25"],
        h3: ["1.5rem", "1.25"],
        h4: ["1.25rem", "1.5"],
        h5: ["1rem", "1.5"],
        h6: ["0.875rem", "1.5"],
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", ...fontFamily.sans],
        body: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#23A6F0",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
