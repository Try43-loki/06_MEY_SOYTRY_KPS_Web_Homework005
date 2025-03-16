const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b3954",
        secondary: "#087e8b",
        thirdary: "#BFD7EA",
        danger: "#c81d25",
        "gray-white": "#f5f7f8",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
