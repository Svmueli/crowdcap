// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: '#9a5cff',
        neonPink: '#ff61d6',
        neonBlue: '#56e8ff',
        neonGreen: '#56ff82',
        darkBg: '#0d0d0d', // Deep black background
      },
      backgroundImage: {
        'outer-gradient': 'linear-gradient(145deg, #0d0d0d, #1a1a1a)',
        'neon-gradient': 'linear-gradient(90deg, #9a5cff, #ff61d6, #56e8ff, #56ff82)',
      },
      boxShadow: {
        neon: '0 0 20px rgba(86, 232, 255, 0.8)', // Neon glow effect
      },
    },
  },
  plugins: [],
};
