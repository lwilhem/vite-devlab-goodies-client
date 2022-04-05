module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
    backgroundImage: {         
      'footer-bg': "url('src/asset/footer.svg')",
      'category_bg': "url('src/asset/category.svg')",     
      'bgLeoFly':"url('src/asset/leofly.png)",
          }     
        },     
    colors: {       
            'black': '#000000',
            'purple-extra-light': '#5B29E6',
            'purple-light': '#5125CC',
            'purple': '#4720B3',
            'purple-dark': '#3D1C99',
            'red-light': '#F23561',
            'red-pink': '#F01A75',
            'red': '#F04242',
            'cramberry': '#140933',
            'green': '#1EA81E',
            'white': '#FFFFFF',
            'blue': '#5B29E6',
            'pink': '#ff49db',
            },     

              font: {
                'Interstate-Bold':'@import url("https://use.typekit.net/gtz4qco.css%22);',
                'Poppins-Medium':'@import url("https://use.typekit.net/gtz4qco.css%22);',
                'Poppins-italic': '  @import url("https://use.typekit.net/gtz4qco.css%22);',
                'Poppins-extra-light': '@import url("https://use.typekit.net/gtz4qco.css%22);',
                      },
                        fontSize: { 
                          'xs': '.75rem',
                          'sm': '.875rem',
                          'tiny': '.875rem',
                          'base': '1rem',
                          'lg': '1.125rem',
                          'xl': '1.25rem',
                          '2xl': '1.5rem',
                          '3xl': '1.875rem',
                          '4xl': '2.25rem',
                          '5xl': '3rem',
                          '6xl': '4rem',
                          '7xl': '5rem',
                        },

                          backgroundSize:{
                            'bgHome':'40%',
                          }

          },
                                
  plugins: [
    require('@tailwindcss/aspect-ratio'),
          ],
    

}