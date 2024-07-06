/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Aclonica: ["Aclonica", "sans-serif"],
    },
    keyframes: {
      topdown: {
        "0%": { top: "-50px" },
        "100%%": { top: "0px" },
      },
    },
    animation: {
      topdown: "topdown .3s linear",
    },
  },
  plugins: [],
};
