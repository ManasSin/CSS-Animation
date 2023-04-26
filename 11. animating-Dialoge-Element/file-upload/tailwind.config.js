/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slidein: "slidein 200ms ease-out 1",
        dismiss: "dismess 100ms ease-out 1",
      },
      keyframes: {
        slidein: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "100%", transform: "translateX(0)" },
        },
        dismiss: {
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
