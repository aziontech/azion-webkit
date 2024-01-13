import ErrorStateBlock from '../templates/error-state-block/index.vue';
import Error404Illustration from '../assets/svg/error-404.vue'
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Error State',
  component: ErrorStateBlock,
  tags: ['autodocs'],
  argsType: {
    overline: String,
    description: String,
  }
}

const Template = (args) => ({
  components: { ErrorStateBlock, LinkButton, Error404Illustration },
  setup() {
    return { args }
  },
  template: ` <ErrorStateBlock v-bind="args">
                <template #illustration>
                  <Error404Illustration />
                </template>
                <template #main>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #actions>
                  <LinkButton label="Button" link="./" />
                  <LinkButton label="Button" link="./" outlined />
                </template>
              </ErrorStateBlock>`
})

export const Default = Template.bind({});
Default.args = {
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
}
