/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C4C4C4",
        secondary: "#7E7E7E",
      },
      screens: {
        xl: { min: "1279px" },

        lg: { min: "1200px" },

        md: { min: "1180px" },

        sm: { min: "639px" },
      },
      spacing: {
        'fulLHD': '1250px',
      }
    },
  },
  plugins: [],
};
