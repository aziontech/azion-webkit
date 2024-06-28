/** @type { import('@storybook/vue3').Preview } */

// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../src/assets/icons/azionicons.scss";

import '../src/assets/main.css';

import '../node_modules/@aziontech/azion-theme/src/azion-light/theme.scss';
import '../node_modules/@aziontech/azion-theme/src/azion-dark/theme.scss';
//end required //

setTimeout(function() {
    let sbdocs = document.querySelectorAll('.docs-story');
    if(sbdocs.length) {
        for(var i = 0; i <= sbdocs.length; i++) {
            let item = sbdocs[i];
            item.style.background = 'surface-ground';
        }
    }
}, 1000)

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
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Choose a theme',
            defaultValue: 'dark',
            toolbar: {
                icon: 'moon',
                items: [
                    { value: 'light', icon: 'sun', title: 'Light' },
                    { value: 'dark', icon: 'moon', title: 'Dark' },
                ],
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

    document.body.style.background = 'transparent';

    const iframe = document.querySelector('.css-xzp052');
    if (iframe) {
      iframe.classList.add('surface-ground');
    }

    return Story();
  },
];

export default parameters;
