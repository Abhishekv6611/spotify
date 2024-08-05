// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spoti: "#1ed760",
        customColor: "#205764",
      },
      gridTemplateColumns: {
        "15-85": "15vw 85vw",
      },
      maxWidth: {
        "100vw": "100vw",
      },
      gridTemplateRows: {
        "85-15": "85vh 15vh",
      },
      backgroundColor: {
        "custom-gradient": "linear-gradient(transparent, rgb(0, 0, 0, 1))",
      },
      maxInlineSize: {
        80: "80%",
      },
      blockSize: {
        auto: "auto", // Add custom utility for block-size: auto
      },
      margin: {
        "1rem": "1rem", // Add custom margin value
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".max-inline-size-80": {
          maxInlineSize: "80%",
        },
        ".block-size-auto": {
          blockSize: "auto",
        },
        ".my-1rem": {
          marginTop: "1rem",
          marginBottom: "1rem",
        },
        ".mx-0": {
          marginLeft: "0",
          marginRight: "0",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
