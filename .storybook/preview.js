/** @type { import('@storybook/vue3').Preview } */

import { h } from 'vue'; // Importe a função h do Vue

// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import '../src/assets/main.css';
// import "primevue/resources/themes/lara-light-blue/theme.css";
import '../src/assets/themes/scss/themes/azion-light/theme.scss';
import '../src/assets/themes/scss/themes/azion-dark/theme.scss';
//end required //

// Função para definir o tema
function setTheme(theme) {
    let html = window.document.querySelector('html');
    // Remova todas as classes que começam com "azion-"
    html.classList.forEach((className) => {
        if (className.startsWith('azion-')) {
            html.classList.remove(className);
        }
    });
    // Adicione a nova classe do tema
    html.classList.add(`azion-${theme}`);
}

// Defina o tema inicial
let currentTheme = 'dark';
setTheme(currentTheme);

// Configuração do Storybook
const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
                icon: 'circlehollow',
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

        // Renderiza o componente Story diretamente
        return Story();
    },
];

export default parameters;
