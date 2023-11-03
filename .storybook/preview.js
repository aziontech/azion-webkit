/** @type { import('@storybook/vue3').Preview } */

// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// import 'primevue/resources/themes/lara-light-blue/theme.css';
import '../src/assets/main.css';
import '../src/assets/themes/scss/themes/azion-light/theme.scss'
import '../src/assets/themes/scss/themes/azion-dark/theme.scss'
//end required //

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

export const decorators = [
    (Story) => {
      const addCustomClassToSbShowMain = () => {
        const sbShowMainElement = document.querySelector('.sb-show-main');
        if (sbShowMainElement) {
          sbShowMainElement.classList.add('azion-dark');
        }
      };
  
      addCustomClassToSbShowMain();
      return Story();
    },
  ];
  
