/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-sage': '#8B9B8E',
        'brand-dark': '#1C1C1C',
        'brand-accent': '#E63946',
        'brand-light': '#F5F5F5',
        'brand-dark-gradient': 'linear-gradient(180deg, #232323 0%, #1C1C1C 100%)'
      },
      fontFamily: {
        italiana: ['Italiana', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        widest: '0.3em'
      },
      spacing: {
        section: '2rem'
      },
      borderRadius: {
        DEFAULT: '0.5rem'
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.05)'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333333',
            h1: {
              fontFamily: 'Italiana, Georgia, serif',
              letterSpacing: '0.2em'
            },
            h2: {
              fontFamily: 'Italiana, Georgia, serif',
              borderBottom: '2px solid #737D74'
            },
            a: {
              color: '#f04e3e',
              '&:hover': {
                color: '#d03e2e'
              }
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}