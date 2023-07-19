const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAF2EA',
        'secondary': '#CCAEA4',
        'tertiary': '#392E2C',
        'white': '#FFFFFF',
        'black': '#282828',
        'red': '#FF0000',
        'green': '#1AC100',
      },
      fontFamily: {
        'sans': ['B612', ...defaultTheme.fontFamily.sans],
        'Adamina': ['Adamina', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

