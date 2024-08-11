const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brand: "#F9F6F1",
      secondary: "#004d96",
      "primary-light": "#FFEEEF",
      dark: "#1D3557",
      white: "#FFFFFF",
      hold: "#f69400",
      fav: "#fd7014",
      danger: "#8c0101",
      "light-grey": "#f4f4f4",
      grey: "#717171",
      complete: "#05c192",
      love: "#E72929",
      black: "#0c0c0c",
    },
    extend: {},
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: 0,
          transform: "translate3d(0, -100%, 0)",
        },
        "100%": {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      },

      "fade-out-up": {
        "0%": {
          opacity: 1,
          transform: "transalteY(0)",
        },
        "100%": {
          visibility: "hidden",
          opacity: 0,
          // transform: "translate3d(0, -100%,0)",
          transform: "translateY(-100%)",
        },
      },

      "slide-in-down": {
        "0%": {
          visibility: "hidden",
          transform: "translate3d(0, -100%, 0)",
        },
        "100%": {
          transform: "translate3d(0, 0, 0)",
        },
      },
      jiggle: {
        "0%": {
          transform: "scale3d(1, 1, 1)",
        },
        "30%": {
          transform: "scale3d(1.25, 0.75, 1)",
        },
        "40%": {
          transform: "scale3d(0.75, 1.25, 1)",
        },
        "50%": {
          transform: "scale3d(1.15, 0.85, 1)",
        },
        "65%": {
          transform: "scale3d(0.95, 1.05, 1)",
          color: "#fcfcfd",
        },
        "75%": {
          transform: "scale3d(1.05, 0.95, 1)",
        },
        "100%": {
          transform: "scale3d(1, 1, 1)",
          color: "#fd7014",
        },
      },

      glow: {
        "0%": {
          color: "#fcfcfd",
        },
        "30%": {
          color: "#fd7014",
        },
        "100%": {
          color: "#fd7014",
          // borderRadius: "100%",
        },
      },
    },
    animation: {
      fadeindown: "fade-in-down 1s ease-in 0.25s 1",
      fadeoutup: "fade-out-up 1s ease-in-out 0.5s  1",
      slideindown: "slide-in-down 1s ease-in-out 0.25s 1",
      glow: "glow 0.6s ease-in-out 0.25s 1",
      jiggle: "jiggle 0.6s ease-in-out 0.25s 1",
    },
  },
  plugins: [],
};
