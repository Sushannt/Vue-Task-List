/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      primaryText: ["Montserrat", "sans-serif"],
      secondaryText: ["Roboto Slab", "serif"],
      tertiaryText: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        //
        shade1: "#041C32",
        shade2: "#04293A",
        shade3: "#064663",
        shade4: "#ECB365",
      },
    },
  },
  plugins: [],
};
