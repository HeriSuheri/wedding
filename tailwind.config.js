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
        fade: 'fadeOut 0.3s ease-out',
        'progress': 'progress 5s linear forwards' 
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
