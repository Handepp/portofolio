/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      colors: {
        brand: "#00d1ff",
        surface: "#0e1417",
        "surface-dim": "#0e1417",
        "surface-bright": "#333a3d",
        "surface-lowest": "#090f12",
        "surface-low": "#161d1f",
      },
      borderRadius: {
        custom: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
