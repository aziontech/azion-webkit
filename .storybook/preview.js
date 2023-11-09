/** @type { import('@storybook/vue3').Preview } */

// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import '../src/assets/main.css';
// import "primevue/resources/themes/lara-light-blue/theme.css";
import '../src/assets/themes/scss/themes/azion-light/theme.scss';
import '../src/assets/themes/scss/themes/azion-dark/theme.scss';
//end required //

(function setTheme(theme) {
    let html = window.document.querySelector('html');
    html.classList.add(`azion-${theme}`);
})('dark');

setTimeout(function() {
    let sbdocs = document.querySelectorAll('.sbdocs');
    if(sbdocs.length) {
        for(var i = 0; i <= sbdocs.length; i++) {
            let item = sbdocs[i];
            item.style.background = 'transparent';
        }
    }
}, 1000)

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview


