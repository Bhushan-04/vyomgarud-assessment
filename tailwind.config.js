/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0b0d10",
        panel: "#0f1113",
        muted: "#9aa3ad",
        accent: "#ff7b00",
        glass: "rgba(255,255,255,0.03)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(3,6,8,0.7)'
      }
    }
  },
  plugins: []
}
