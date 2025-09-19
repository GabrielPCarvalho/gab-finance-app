const colors = require('./src/styles/theme').colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        'regular': ['Poppins_400Regular'],
        'medium': ['Poppins_500Medium'],
        'semibold': ['Poppins_600SemiBold'],
        'bold': ['Poppins_700Bold'],
      },
    },
  },
  plugins: [],
}

