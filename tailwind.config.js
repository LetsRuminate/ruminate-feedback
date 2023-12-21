/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
        anton: ["anton", "sans-serif"],
      },
      colors: {
        primary: {
          B500: "#023047",
          B400: "#116996",
        },
        secondary: {
          B450: "#005179",
        },
        neutral: {
          N150: "#BFBFBF",
        },
        input: "#6D778C",
        borderInput: "#888D95",
        buttonActive: "#3E5BD1",
        buttonDisabled: "#878da3",
        error: "#C80000",
        errorBG: "#fee2e2",
      },
      fontSize: {
        // Heading only
        headingOne: "48px",
        headingTwo: "48px", // for heading2, only boldness is different
        headingThree: "24px",
        headingFour: "20px",
        headingFive: "18px",
        headingSix: "16px",
        // Body only
        bodyOne: "20px",
        bodyTwo: "16px",
        bodyThree: "14px",
      },
    },
  },
};
