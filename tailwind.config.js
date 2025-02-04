/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "float 20s ease-in-out infinite both alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "none",
          },
          "50%": {
            transform: "translate(50%, 20%) rotateY(10deg) scale(1.2)",
          },
        },
      },
      colors: {
        primary: "#f97316",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        handwriting: ["Merienda", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
