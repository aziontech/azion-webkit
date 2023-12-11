/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  important: true,
  content: [
    './src/**/*.{html,md,mdx,vue}',
    'index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      },
      width: {
        'slide': '300px',
      },
      padding: {
        '5%': '5%',
      },
      colors: {
        header: '#171717',
        'header-input': '#292929',
        'header-button-enabled': '#ffffff32',
        'header-button-hover': 'rgba(244, 244, 244, 0.04)',
        'header-avatar': '#363636',
      },
      borderColor: {
        header: '#3e3e3e',
        'header-hover': '#F3652B'
      },
      textColor: {
        header: '#b5b5b5',
      },
      animation: {
        fadeIn: 'fadeIn 220ms ease-in-out',
        fadeOut: 'fadeOut 220ms ease-in-out'
      },
      container: {
        padding: {
          DEFAULT: 'clamp(0.75rem, -1.6842rem + 12.1711vw, 10rem);',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
    },
  },
  plugins: [
    typography,
    function ({ addUtilities, variants }) {
      const newUtilities = {};
  
      newUtilities['.px-container'] = {
        maxWidth: '1536px',
        margin: '0 auto',
        paddingLeft: 'clamp(.75rem, 5vw, 10rem)',
        paddingRight: 'clamp(.75rem, 5vw, 10rem)',
      };
  
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
