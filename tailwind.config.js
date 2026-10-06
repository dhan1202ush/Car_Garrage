/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          black: "#0a0a0a",
          dark: "#141414",
          card: "#1c1c1e",
          border: "#2c2c2e",
          red: "#dc2626",
          redHover: "#b91c1c",
          muted: "#9ca3af",
          light: "#f3f4f6",
        }
      }
    },
  },
  plugins: [],
}
