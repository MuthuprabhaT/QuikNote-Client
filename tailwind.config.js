/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // // Colors used in the project
      colors: {
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
