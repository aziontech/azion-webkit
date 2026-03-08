import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { searchIndexIntegration } from './src/integrations/search-index';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    searchIndexIntegration(),
  ],
  
  // Site configuration
  site: 'https://docs.azion.com',
  
  // Path aliases for clean imports
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
      },
    },
  },
  
  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  
  // Output configuration
  output: 'static',
  
  // Build configuration
  build: {
    inlineStylesheets: 'auto',
  },
});
