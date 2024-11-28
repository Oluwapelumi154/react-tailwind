/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    fontSize: {
      "50px": "50px",
      "15px": "15px",
      "18px": "18px",
    },
    margin: {
      "83px": "83px",
      "20px": "20px",
      "88px": "88px",
      "90px": "90px",
      "30px": "30px",
      "45px": "45px",
    },
    borderRadius: {
      "10px": "10px",
    },
    extend: {
      padding: {
        "12px": "12px",
        "28px": "28px",
        "20px": "20px",
        "23px": "23px",
        "13px": "13px",
        "90px": "90px",
      },
      height: {
        "600px": "600px",
      },
      width: {
        "450px": "450px",
        "210px": "210px",
      },
    },
    colors: {
      green: "#B9FF66",
      black: "#191A23",
      gray: "#f3f3f3",
      white: "#ffff",
    },
  },
  plugins: [],
};
