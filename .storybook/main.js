// /** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
}
export default config
