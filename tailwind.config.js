/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "custom-blue":"#608BFF",
      "custom-green":"#E7F6DD",
      "custom-green-bold":"#679D43",
      "custom-black":"#000",
      "custom-orange":"#ff5000",
      "custom-white":"#fff",
      "custom-tg":"#27A6E5",
      "custom-tg2":"#B900D7",
      "custom-back":"#27424D",
      "custom-yellow":"#FFC909",
      "custom-footer":"#171717",
      "custom-hr":"#615555"
    }
  },
  plugins: [],
}

