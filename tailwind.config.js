/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#a9b1d6",
        primary: "#bb9af7",
        secondary: "#2ac3de",
        "background-color": "#272822",
        red: "#F92672",
        orange: "#FD971F",
        yellow: "#E6DB74",
        green: "#A6E22E",
        blue: "#66D9EF",
        purple: "#AE81FF",
      },
    },
  },
  plugins: [],
}
