/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 576px) { ... }
    },
    extend: {
      fontFamily: {
        dig: ["Digital Numbers Regular"],
        fre: ["Fredoka One Regular"],
        maho: ["Mahoda Display Regular"],
      },
    },
  },
  plugins: [],
};
