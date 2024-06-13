/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
    important: true,
    content: ['./src/**/*.{html,md,mdx,vue}', 'index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            transitionProperty: {
                width: 'width'
            },
            fontFamily: {
                mono: '"Roboto Mono"'
            },
            letterSpacing: {
                widest: '0.12em'
            },

            width: {
                slide: '300px'
            },
            padding: {
                '5%': '5%'
            },
            colors: {
                header: '#171717',
                'header-input': '#292929',
                'header-button-enabled': '#ffffff32',
                'header-button-hover': 'rgba(244, 244, 244, 0.04)',
                'header-avatar': '#363636'
            },
            borderColor: {
                header: '#3e3e3e',
                'header-hover': '#F3652B'
            },
            textColor: {
                header: '#b5b5b5'
            },
            animation: {
                fadeIn: 'fadeIn 220ms ease-in-out',
                fadeOut: 'fadeOut 220ms ease-in-out'
            },
            container: {
                padding: {
                    DEFAULT: '.75rem',
                    sm: '2rem',
                    xl: '5rem',
                    '2xl': '10rem'
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
            }
        }
    },
    plugins: [
        typography,
        function ({ addUtilities, variants }) {
            const newUtilities = {}

            newUtilities['.px-shell'] = {
                paddingLeft: 'clamp(1rem, 0.605rem + 1.974vi, 2.5rem)',
                paddingRight: 'clamp(1rem, 0.605rem + 1.974vi, 2.5rem)'
            }

            newUtilities['.px-container'] = {
                maxWidth: '1536px',
                margin: '0 auto',
                paddingLeft: 'clamp(1rem, 0.605rem + 1.974vi, 2.5rem)',
                paddingRight: 'clamp(1rem, 0.605rem + 1.974vi, 2.5rem)'
            }

            newUtilities['@media (min-width: 768px)'] = {
                '.px-shell': {
                    paddingLeft: '2.5rem',
                    paddingRight: '2.5rem'
                },
                '.px-container': {
                    paddingLeft: '2rem',
                    paddingRight: '2rem'
                }
            }

            // newUtilities['@media (min-width: 1024px)'] = {
            //     '.px-container': {
            //         paddingLeft: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem);',
            //         paddingRight: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem);'
            //     }
            // }

            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ]
}
