/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        aWhite: "hsl(0, 0%, 98%)",
        mGray: "hsl(0, 0%, 41%)",
        aBlack: "hsl(0, 0%, 8%)"
      },
      fontFamily : {
        epilogue: ["Epilogue", "sans-serif"]
      },
      screens:{
        xs: "375px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
      }

    },
  },
  plugins: [],
}

