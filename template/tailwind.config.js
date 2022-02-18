module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'react-blue': '#61dafb',
        'react-gray': '#282c34'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    },
  },
  plugins: [],
}