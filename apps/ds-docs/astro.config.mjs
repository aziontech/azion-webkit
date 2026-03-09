import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { searchIndexIntegration } from './src/integrations/search-index';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const monorepoRoot = resolve(__dirname, '..', '..');

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
  site: 'https://ds.azion.com',
  
  // Path aliases for clean imports
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@layouts': resolve(__dirname, 'src/layouts'),
        '@lib': resolve(__dirname, 'src/lib'),
        // Alias for icons package to ensure proper resolution from monorepo
        // Note: @aziontech/icons resolves naturally via package.json exports
        // Only alias specific sub-paths that need direct file access
        '@aziontech/icons/catalog': resolve(monorepoRoot, 'packages/icons/dist/catalog.json'),
      },
    },
    // Ensure woff2 font files are properly handled
    assetsInclude: ['**/*.woff2'],
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
