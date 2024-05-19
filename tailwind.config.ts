import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["src/**/*.{js, jsx, ts,tsx}", "./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          25: "#f3f8ff",
          50: "#ebf5fb",
          100: "#cddee8",
          200: "#9bbdd0",
          300: "#689bb9",
          400: "#367aa1",
          500: "#04598a", // base
          600: "#03476e",
          700: "#023553",
          800: "#022437",
          900: "#01121c",
          950: "#010513",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
