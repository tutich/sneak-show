/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "orange-1": "hsl(25, 100%, 94%)",
        "orange-2": "hsl(26, 100%, 55%)",

        "blue-100": "hsl(223, 64%, 98%)",
        "blue-200": "hsl(220, 14%, 75%)",
        "blue-300": "hsl(219, 9%, 45%)",
        "blue-400": "hsl(220, 13%, 13%)",

        "white-100": "hsl(0, 0%, 100%)",

        "black-100": "hsl(0, 0%, 0%)",
      },

      fontSize: {
        paragraph: '16px',
      },
     
    },
  },
  plugins: [],
}