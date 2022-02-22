module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('src/asset/footer.svg')",
      }
    },
    colors: {
      'black': '#00000',
      'purple-extra-light': '#5B29E6',
      'purple-light': '#5125CC',
      'purple': '#4720B3',
      'purple-dark': '#3D1C99',
      'red-light': '#F23561',
      'red-pink': '#F01A75',
      'red': '#F04242',
      'cramberry': '#140933',
      'green': '#1EA81E',
      'black': '#FFFFFF', 
      'blue': '#5B29E6',
      'pink': '#ff49db',
    },
    font: {
      'Interstate-Bold':'@import url("https://use.typekit.net/gtz4qco.css");',
      'Poppins-Medium':'@import url("https://use.typekit.net/gtz4qco.css");',
      'Poppins-italic': '  @import url("https://use.typekit.net/gtz4qco.css");',
      'Poppins-extra-light': '@import url("https://use.typekit.net/gtz4qco.css");',
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
