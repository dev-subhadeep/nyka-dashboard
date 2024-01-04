/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        typography1: "#1C2A53",
        typography2: "#555F7E",
        typography3: "#8E95A9",
        background: "#F8F8F8",
        btnbg: "#C4CDD5",
        btnbg2: "#919EAB",
        btnbrdr: "#DFE3E8",
        cta: "#0E1866",
        input: "#7949FF",
      },
    },
  },
  plugins: [],
}
