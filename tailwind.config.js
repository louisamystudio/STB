/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-sage': '#737D74',
        'brand-dark': '#333333',
        'brand-accent': '#f04e3e',
        'brand-light': '#f5f5f5'
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