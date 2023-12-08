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
  ],
  plugins: [
    typography,
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {};

      const minWidth = '0.75rem';
      const maxWidth = '10rem';

      // Adiciona uma classe para padding horizontal responsivo com clamp
      newUtilities['.px-container'] = {
        paddingLeft: `clamp(${minWidth}, -1.6842rem + 12.1711vw, ${maxWidth})`,
        paddingRight: `clamp(${minWidth}, -1.6842rem + 12.1711vw, ${maxWidth})`,
      };

      // Adiciona uma classe para padding horizontal responsivo com valores específicos em breakpoints
      newUtilities['@media (min-width: 640px) {.px-container-md}'] = {
        paddingLeft: '8px', // Valor equivalente a px-8 no breakpoint md
        paddingRight: '8px',
      };

      // Adiciona uma classe para padding horizontal responsivo com valores específicos em breakpoints
      newUtilities['@media (min-width: 768px) {.px-container-lg}'] = {
        paddingLeft: '4px', // Valor equivalente a px-3 no breakpoint default
        paddingRight: '4px',
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
