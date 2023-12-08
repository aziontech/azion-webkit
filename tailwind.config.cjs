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
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {};

      // Substitua os valores do clamp conforme necessário
      const minWidth = '0.75rem';
      const maxWidth = '10rem';

      // Adiciona uma classe para padding horizontal responsivo com clamp
      newUtilities['.px-container'] = {
        paddingLeft: `clamp(${minWidth}, -1.6842rem + 12.1711vw, ${maxWidth})`,
        paddingRight: `clamp(${minWidth}, -1.6842rem + 12.1711vw, ${maxWidth})`,
      };

      // Adiciona uma classe para padding horizontal fixo em .75rem no breakpoint sm
      newUtilities['@media (min-width: 640px) {.sm\\:px-container}'] = {
        paddingLeft: '.75rem',
        paddingRight: '.75rem',
      };

      addUtilities(newUtilities, variants('responsive', ['hover']));
    },
  ],
}
