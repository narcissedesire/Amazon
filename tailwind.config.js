/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding:{
        DEFAULT: '15px'
      }
    },
    extend: {
      colors:{
        primary: "#242a2b",
        secondary: "#808080",
        grey: '#e8f0f1'
      }
    },
    fontFamily:{
      primary: 'Poppins'
    },
    boxShadow:{
      custom1:'0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
      custom2:'0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      custom3:'0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    backgroundImage:{
      services: "url()",
      testimonials: "url()",
      departements: "url()",
      quoteLeft: "url()",
      quoteRight: "url()"
    }
  },
  plugins: [],
}

