/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        header_h: "5.375rem",
        top_margin: "6rem",
        x_margin: "6.25rem",
        sm_sidebar_w: "11.875rem",
        sidebar_w: "21.25rem",
      },
      colors: {
        primary: "#7e26ef",
        prime_black: "#1a1a1a",
        prime_shadow: "#262626",
        prime_blue: "#2969FF",
        prime_yellow: "#F6C845",
      },
      fontFamily: {
        noto: ["var(--font-nsKR)"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
