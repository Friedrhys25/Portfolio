/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // new palette (primary three colors)
        ink: "#4d262d",
        paper: "#4d3226",
        muted: "#8b6b66",
        line: "#3b1d20",
        brass: "#b57f86",
        bone: "#e9d8d9",
        panel: "#4d2641",
      },
      boxShadow: {
        hard: "16px 16px 0 #11110f",
        "hard-sm": "8px 8px 0 #11110f",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Bahnschrift", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(46px) skewY(1deg)" },
          "100%": { opacity: "1", transform: "translateY(0) skewY(0)" },
        },
      },
      animation: {
        reveal: "reveal 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
