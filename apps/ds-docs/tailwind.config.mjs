/** @type {import('tailwindcss').Config} */
import { tokenUtilities } from '@aziontech/theme/tokens/build/tailwind-plugin';
import { primitives, surfacePrimitives, brandPrimitives } from '@aziontech/theme/tokens';

export default {
  darkMode: ['class', '.dark', '.azion.azion-dark'],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Primitives from @aziontech/theme (neutral, gray, orange, violet, etc.)
        ...primitives,
        // Surface scale from theme (surface-0, surface-50, … surface-950)
        surface: {
          ...surfacePrimitives.surface,
          DEFAULT: surfacePrimitives.surface[0],
          muted: surfacePrimitives.surface[50],
          subtle: surfacePrimitives.surface[100],
        },
        // Primary brand (orange) from theme — use for accents; docs body/links keep neutral below
        primaryBrand: brandPrimitives.primary,
        accent: brandPrimitives.accent,
        // Primary (neutral scale) for documentation typography and links
        primary: {
          50: primitives.neutral[50],
          100: primitives.neutral[100],
          200: primitives.neutral[200],
          300: primitives.neutral[300],
          400: primitives.neutral[400],
          500: primitives.neutral[500],
          600: primitives.neutral[600],
          700: primitives.neutral[700],
          800: primitives.neutral[800],
          900: primitives.neutral[900],
          950: primitives.neutral[950],
        },
        // Neutral colors for documentation (alias; primitives.neutral also available)
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
            h1: {
              fontSize: '1.5rem',
              fontWeight: '500',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: '500',
              letterSpacing: '-0.025em',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '500',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1rem',
              fontSize: '0.875rem',
              lineHeight: '1.625',
            },
            'ul, ol': {
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
              fontSize: '0.875rem',
            },
            li: {
              marginBottom: '0.5rem',
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
    tokenUtilities(),
    require('@tailwindcss/typography'),
  ],
};
