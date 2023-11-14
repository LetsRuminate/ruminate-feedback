/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
    // 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "B500": "#023047",
          "B400": "#116996",
        },
        secondary: {
          "B450": "#005179",
        },
        neutral: {
          "N150": "#BFBFBF",
        },
      },
      typography: {
        title: {
          primary: {
            "p-h2": { 
              name: 'H2/Primary',
              fontFamily: 'Manrope',
              fontWeight: 700,
              fontSize: '48px',
             },
            "p-h3": {
              name: "H3/Primary",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "24px",
            },
            "p-h4": {
              name: "H4/Primary",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "20px",
            },
            "p-h6": {
              name: "H6/Primary",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "16px",
            }
          },
        },
        body: {
          primary: {
            "p-b2": {
              name: "B2/Primary",
              fontFamily: "Manrope",
              fontWeight: 400,
              fontSize: "16px",
            }
          }
        }
      },
    },
  },
  plugins: [],
  fonts: {
    manrope: ["Manrope", "sans-serif"],
  },
};
