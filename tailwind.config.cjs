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
        footer: '#1e1e1e'
      },
      borderColor: {
        header: '#3e3e3e',
        'header-hover': '#F3652B'
      },
      textColor: {
        header: '#b5b5b5',
        footer: '#CCCCCC'
      },
      animation: {
        fadeIn: 'fadeIn 220ms ease-in-out',
        fadeOut: 'fadeOut 220ms ease-in-out'
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
}
