/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    core: {
      builder: '@storybook/builder-vite',
    },
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    docs: {}
}
export default config
