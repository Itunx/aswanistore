/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" ,
  ],
 
  theme: {
    screens:{
      
       'sm':'640px',

      'md':'768px',

       'lg':'1024px',

       'xl':'1280px',

      
    },
    width: {
      
      '200': '200px',
      '600': '600px',
      '790': '790px',
      '1540':'1540px'
     }
    ,
    height: {
      '300':'300px',
      '500':'500px',
      '600': '600px',
      '790': '790px',
      
     },
     backgroundImage: {
      'cloth-pattern': "url('/images/cloth.jpg')",
      // 'footer-texture': "url('/img/footer-texture.png')"
    },
    
      colors:{
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'cyan':'#3d3d57',
      'red':'#FF0000',
      'gray': '#a0aec0',
      'black':'#000000',
      'blue':'#0000FF',
      'peach':'#FFE5B4',
      'tan':'#DFDFC0',
      'palegoldenrod':'#eee8aa',
      'Beige':'#f5f5dc',
      'cream':'#FFFDD0.',
    },
    fontFamily:{
      // 'Lato':[],
      // 'sans': ['ui-sans-serif', 'system-ui', ],
      // 'Shantell Sans':['Shantell Sans', 'cursive',],
      'Mynerve':[ 'Mynerve','cursive'],
      'Tilt Warp':['Tilt Warp', 'cursive'],
    
    },
  },
  plugins: [],
}
