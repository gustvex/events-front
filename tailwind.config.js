/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#1A2232",
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
