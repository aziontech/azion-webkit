/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../src/assets/icons/azionicons.scss";
import '../src/assets/main.css';
import 'azion-theme/dark';
import 'azion-theme/light';

import { withThemeByClassName } from '@storybook/addon-themes';

setup((app) => {
  app.use(PrimeVue);
});

export const parameters = {
  options: {
    storySort: {
      order: ['Blocks', '2. Components Group', '2.1 Components', '3. Elements'],
    },
  },
  backgrounds: {
    options: {
      'azion-dark': {
        name: 'azion-dark',
        value: '#171717',
      },
      'azion-light': {
        name: 'azion-light',
        value: '#ffffff',
      }
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'azion-light',
      dark: 'azion-dark',
    },
    defaultTheme: 'light',
  })
];
