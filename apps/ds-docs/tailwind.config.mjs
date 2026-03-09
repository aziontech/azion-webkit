/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#fff5ef',
          100: '#ffe7d8',
          200: '#ffcfb3',
          300: '#ffb180',
          400: '#ff8e4d',
          500: '#fe601f',
          600: '#d94a03',
          700: '#b03c02',
          800: '#8a2f02',
          900: '#692402',
          950: '#401602',
        },
        // Neutral colors for documentation
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f9fafb',
          subtle: '#f3f4f6',
        },
        // Text colors
        text: {
          primary: '#111827',
          secondary: '#4b5563',
          muted: '#9ca3af',
        },
        // Status colors for component status badges
        status: {
          stable: '#10b981',
          beta: '#3b82f6',
          deprecated: '#f59e0b',
          planned: '#6b7280',
          experimental: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['Proto Mono', 'monospace'],
        code: ['Roboto Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.text.primary'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.surface.subtle'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: '#1f2937',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
          },
        },
      }),
      // Documentation-specific spacing
      spacing: {
        'docs-sidebar': '280px',
        'docs-header': '64px',
      },
      // Max widths for content
      maxWidth: {
        'docs-content': '800px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
