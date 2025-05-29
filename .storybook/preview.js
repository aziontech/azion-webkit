/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { setup } from '@storybook/vue3-vite';
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../src/assets/icons/azionicons.scss";
import '../src/assets/styles/avatar.css';
import '../src/assets/styles/hsform.css';
import '../src/assets/styles/text.css';
import '../src/assets/styles/main.css';
import 'azion-theme'

import { withThemeByClassName } from '@storybook/addon-themes';

setup((app) => {
  app.use(PrimeVue);
});

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Blocks',
        [
          'Hero',
          'Sections',
          'Banner',
          'Pages',
          'List'
        ],
        'Components Group',
        'Components',
        'Layout',
        'Elements'
      ],
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
      light: 'azion azion-light',
      dark: 'azion azion-dark',
    },
    defaultTheme: 'light',
  })
];
