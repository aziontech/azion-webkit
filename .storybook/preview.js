/** @type { import('@storybook/vue3').Preview } */
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../src/assets/icons/azionicons.scss";
import '../src/assets/main.css';
import 'azion-theme/dark';
import 'azion-theme/light';

import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'azion-dark',
          value: '#171717',
        },
        {
          name: 'azion-light',
          value: '#ffffff',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
  }
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'azion-light',
      dark: 'azion-dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview
