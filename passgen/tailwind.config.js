/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "tailwindCSS.classAttributes": ["class", "className", "ngClass", "class:list"]
};
