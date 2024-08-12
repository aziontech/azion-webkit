import LinkButton from '../../templates/linkbutton'
import EmptyStateBlock from '../../templates/emptystateblock';
import Error404Illustration from '../../assets/svg/error-404.vue'

export default {
  title: '1. Blocks/BaseEmptyState',
  component: EmptyStateBlock,
  tags: ['autodocs'],
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



