/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
    important: true,
    content: [
        './src/**/*.{astro,html,js,md,mdx,ts,vue}',
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
            }
        },
    },
    plugins: [
      typography,
    ],
}
