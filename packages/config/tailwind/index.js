/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./src/_app.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1000px",
        },
        padding: {
          DEFAULT: "1rem",
          lg: "0rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#040403",
          50: "#6D6D52",
          100: "#616149",
          200: "#4A4A37",
          300: "#333326",
          400: "#1B1B14",
          500: "#040403",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#DCBB4D",
          50: "#FAF6E6",
          100: "#F7EFD5",
          200: "#F0E2B3",
          300: "#E9D591",
          400: "#E3C86F",
          500: "#DCBB4D",
          600: "#C9A428",
          700: "#9A7E1E",
          800: "#6C5815",
          900: "#3D310C",
        },
      },
    },
  },
  plugins: [],
};
