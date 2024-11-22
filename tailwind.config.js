/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        name: ["Edu AU VIC WA NT Pre", "cursive"],
        name1: ["Cedarville Cursive", "cursive"],
        name2: ["Dancing Script", "cursive"]
      },


    },
  },
  plugins: [],
}

