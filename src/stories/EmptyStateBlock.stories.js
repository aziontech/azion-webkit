import EmptyStateBlock from '../templates/empty-state-block/index.vue';
import Error404Illustration from '../assets/svg/error-404.vue'
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Empty Block Base',
  component: EmptyStateBlock,
  tags: ['autodocs'],
  argsType: {
    overline: String,
    description: String,
  }
}

const Template = (args) => ({
  components: { EmptyStateBlock, LinkButton, Error404Illustration },
  setup() {
    return { args }
  },
  template: ` <EmptyStateBlock v-bind="args">
                <template #illustration>
                  <Error404Illustration />
                </template>
                <template #actions>
                  <div class="flex flex-col lg:flex-row justify-center gap-3">
                    <LinkButton label="Button" link="./" />
                    <LinkButton label="Button" link="./" outlined />
                  </div>
                </template>
              </EmptyStateBlock>`
})

export const Default = Template.bind({});
Default.args = {
    title: 'Empty state title',
    description: 'Create your first objetct here.',
}



