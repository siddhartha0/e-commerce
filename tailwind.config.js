const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brand: "#F9F6F1",
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
      "second-brand": "#4F46E5",
      secondary: "#FFC107",
      success: "#26CB17",
      blue: {
        900: "#1E1B4B",
        800: "#332E81",
        700: "#3730A3",
        600: "#3730A3",
        400: "#8881F8",
        300: "#AAA5FC",
        200: "#CAC7FE",
        100: "#E2E0FF",
        50: "#F5F4FF",
      },
      yellow: {
        900: "#BB6902",
        800: "#BB6902",
        700: "#E29400",
        600: "#FFCB2D",
        500: "#FFC107",
        400: "#FFCB2D",
        300: "#FFF885",
        200: "#FFFAB1",
        100: "#FFFFC5",
      },
      red: {
        900: "#7E0C1D",
        800: "#83182C",
        700: "#83182C",
        600: "#B7192C",
        500: "#DC3545",
        400: "#EC474F",
        300: "#F57779",
        200: "#F9A8A8",
        100: "#FCCFCF",
        50: "#FFFBFB",
      },
      pink: {
        900: "#B5078E",
        800: "#C20B9A",
        700: "#D225AC",
        600: "#FF10CA",
        500: "#FF46D6",
        400: "#E146C0",
        300: "#FD96E6",
        200: "#FFA8EC",
        100: "#F3B8F5",
      },
      green: {
        900: "#052E05",
        800: "#155314",
        700: "#156212",
        600: "#18A20E",
        500: "#26CB17",
        400: "#4EE63D",
        300: "#75F165",
        200: "#A9F99D",
        100: "#D2FCCB",
      },
      black: {
        900: "#111111",
        800: "#155314",
        700: "#156212",
        600: "#1B1B1B",
        500: "#282828",
        400: "#4EE63D",
        300: "#75F165",
        200: "#A9F99D",
        100: "#D2FCCB",
      },
      gray: {
        700: "#565656",
        600: "#757575",
        500: "#777777",
        400: "#979797",
        300: "#AAAAAA",
        200: "#BCBCBC",
        100: "#D7D7D7",
      },
      other: {
        base: "#111111",
        black: { 600: "#1B1B1B", 500: "#282828" },
        white: { 200: "#F1F0FF", 100: "#F4F4F4" },
      },
    },
    extend: {},
    keyframes: {
      "fade-in-down": {
        "0%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translate3d(0, -100%, 0)",
        },
        "50% ": {
          visibility: "hidden",
          opacity: 0 /* Make it visible but still transparent */,
        },

        "80% ": {
          visibility: "visible",
          opacity: 0 /* Make it visible but still transparent */,
        },
        "100% ": {
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
          filter: "drop-shadow(10px 7px 10px #fd7014)",
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
      scale: {
        "0%": { transform: "scale(.5)" },
        "0%": { transform: "scale(.8)", filter: "brightness(90%)" },
        "100%": { transform: "scale(1)", filter: "brightness(70%)" },
      },
      pulsing: {
        "0%": { transform: "scale(1)", filter: "brightness(70%)" },
        "50%": { transform: "scale(1.1)", filter: "brightness(90%)" },
        "100%": { transform: "scale(1)", filter: "brightness(70%)" },
      },
      float: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      fadeindown: "fade-in-down 1s ease-in 0.25s 1",
      fadeoutup: "fade-out-up 1s ease-in-out 0.5s  1",
      slideindown: "slide-in-down 1s ease-in-out 0.25s 1",
      glow: "glow 0.6s ease-in-out 0.25s 1",
      jiggle: "jiggle 0.6s ease-in-out 0.25s 1",
      scale: "scale .8s ease-in-out both",
      pulsing: "pulsing 1s ease-in-out both",
      float: "float 1s ease-in-out both",
    },
  },
  plugins: [],
};
