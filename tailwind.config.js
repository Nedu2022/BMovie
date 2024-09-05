/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
      int: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
    },
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '31px',
      },
      colors: {
        background: '#1F1F1F',
        Ptext: '#E0E0E0',
        Stext:  '#A0A0A0',
        Ifields: '#333333',
        Cbackground:'#262626',
        Cred: '#DC143C', 
        Saccent:  '#00FFFF'
        
      },
    },
  },
  plugins: [],
}
