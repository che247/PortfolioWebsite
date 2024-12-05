/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/frontend/**/*.{jsx,js,html}",
    "./src/frontend/*.{jsx,js,html}",
    "./*.{jsx,js,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oSans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
    // colors: {
    //   background: "#0D1B2A",
    //   neutral: "#415A77",
    //   primary: "#1B263B",
    //   text: "#778DA9",
    //   accent: "#E0E1DD",
    //   black: colors.black
    // },
  },
  plugins: [],
};
