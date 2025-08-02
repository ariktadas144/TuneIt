/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primary: "#A288F2", // custom gradient colors can be added here
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
}
