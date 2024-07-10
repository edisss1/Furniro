import { transform } from "typescript"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Poppins"', "sans-serif"],
        secondary: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        infoImage:
          "url('https://firebasestorage.googleapis.com/v0/b/furniro-69e84.appspot.com/o/infoImage.png?alt=media&token=4b831e57-103c-4cf9-8bb5-63f931d00583')",
        shopHeaderImage:
          "url('https://firebasestorage.googleapis.com/v0/b/furniro-69e84.appspot.com/o/shopHeaderImage.png?alt=media&token=761cb37e-3786-44ba-b483-5802f2540912')",
      },
      keyframes: {
        appear: {
          "0%": { display: "none", opacity: 0, transform: "translateX(100%)" },
          "100%": {
            display: "block",
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        vanish: {
          "0%": { display: "block", opacity: 1, transform: "translateX(0)" },
          "100%": {
            display: "none",
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        appear: "appear 0.3s linear",
        vanish: "vanish 0.3s linear",
      },
    },
  },
  plugins: [],
}
