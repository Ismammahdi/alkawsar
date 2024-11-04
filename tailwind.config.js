// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"], // Use this for general English text
        bengali: ["Noto Serif Bengali", "serif"], // Use this for Bengali text
      },
    },
  },
  plugins: [],
};
