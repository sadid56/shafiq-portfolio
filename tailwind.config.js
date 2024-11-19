/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e00549",
        secondary: "#00d9a7",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), addVariablesForColors],
  daisyui: {
    themes: ["light"],
  },
};

// Function to add Tailwind colors as global CSS variables
function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  const colorVars = {};

  function extractColors(obj, prefix = "") {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string") {
        colorVars[`--${prefix}${key}`] = value;
      } else {
        extractColors(value, `${prefix}${key}-`);
      }
    }
  }

  extractColors(colors);

  addBase({
    ":root": colorVars,
  });
}
