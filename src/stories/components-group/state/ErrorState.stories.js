import LinkButton from '../../../templates/linkbutton'
import ErrorStateBlock from '../../../templates/errorstateblock';
import Error404Illustration from '../../../assets/svg/error-404.vue'

export default {
  title: 'Components Group/ErrorState',
  component: ErrorStateBlock,
  tags: ['autodocs'],
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
                  <img src="/assets/mocks/_slot.png" />
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
