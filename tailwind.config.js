// tailwind.config.js (sebaiknya di root project)
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "wedding-gold": "#D4AF37", // Tambahkan warna gold
        "wedding-blue": "blue", // Tambahkan warna biru
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        // "fade": "fadeOut 0.3s ease-out",
        fade: "fadeOut 0.3s ease-out",
        progress: "progress 5s linear forwards",
        "spin-slow": "spinSlow 4s linear infinite",
        "pulse-disc": "pulseDisc 1s ease-in-out infinite",
        "disc-motion": "discMotion 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        progress: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseDisc: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
        discMotion: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.3) rotate(180deg)" },
          "100%": { transform: "scale(1) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
