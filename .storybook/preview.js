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

    // Ajuste o plano de fundo conforme necessário
    document.body.style.background = 'transparent';

    // Adiciona a classe 'surface-ground' ao elemento 'iframe' com a classe 'css-xzp052'
    const iframe = document.querySelector('.css-xzp052');
    if (iframe) {
      iframe.classList.add('surface-ground');
    }

    return Story();
  },
];

export default parameters;