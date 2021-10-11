module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cloud-burst": {
          DEFAULT: "#1C2541",
          50: "#7C8EC7",
          100: "#6A7FBF",
          200: "#4A62AC",
          300: "#3B4E88",
          400: "#2B3965",
          500: "#1C2541",
          600: "#0D111D",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "aquamarine": {
          DEFAULT: "#6FFFE9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#D5FFF9",
          400: "#A2FFF1",
          500: "#6FFFE9",
          600: "#3CFFE1",
          700: "#09FFD9",
          800: "#00D5B4",
          900: "#00A289",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
