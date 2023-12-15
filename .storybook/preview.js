/** @type { import('@storybook/vue3').Preview } */

import { h } from 'vue';

// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import '../src/assets/main.css';
// import "primevue/resources/themes/lara-light-blue/theme.css";
import '../src/assets/themes/scss/themes/azion-light/theme.scss';
import '../src/assets/themes/scss/themes/azion-dark/theme.scss';
//end required //

function setTheme(theme) {
    let html = window.document.querySelector('html');
    html.classList.forEach((className) => {
        if (className.startsWith('azion-')) {
            html.classList.remove(className);
        }
    });
    html.classList.add(`azion-${theme}`);
}

let currentTheme = 'dark';
setTheme(currentTheme);

const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i
        }
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Choose a theme',
            defaultValue: 'dark',
            toolbar: {
                icon: 'moon',
                items: ['light', 'dark'],
            },
        },
    },
};

export const decorators = [
    (Story, context) => {
        const { globals } = context;
        const { theme } = globals;

        if (theme !== currentTheme) {
            currentTheme = theme;
            setTheme(currentTheme);
        }
        return Story();
    },
];

export default parameters;