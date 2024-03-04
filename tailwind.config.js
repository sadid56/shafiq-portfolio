/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    theme: {
      extend: {
        colors:{
            primary:"#e00549",
            secondary:"#00d9a7"
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light"],
    },
  }