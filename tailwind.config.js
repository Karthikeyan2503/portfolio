/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        surface: "#020617",
        primary: "#06b6d4", // cyan-500
        primaryHover: "#0891b2",
        muted: "#94a3b8",
        border: "#1e293b",
      },
    },
  },
  plugins: [],
};
