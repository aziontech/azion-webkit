import ContentTabs from '../templates/content-tabs-block/index.vue';
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Content Tabs Base',
  component: ContentTabs,
  tags: ['autodocs'],
  argsType: {
    title: String,
    content: Array,
  }
}

const content = [{
    title: 'Header 1',
    description: "lorem ipsum dolor sit amet, consectetur",
    tabName: 'Tab 1'
  },
  {
    title: 'Header 2',
    description: "lorem ipsum dolor sit amet, consectetur dolore mag dolor sit amet, consectetur",
    tabName: 'Tab 2'
  },
  {
    title: 'Header 1',
    description: "lorem ipsum dolor sit amet, consectetur dolore mag dolor sit amet, consectetur dol  Lorem ipsum dolor sit amet, consectetur",
    tabName: 'Tab 3'
  },
]

const Template = (args) => ({
  components: { ContentTabs, LinkButton },
  setup() {
    return { args }
  },
  template: ` <ContentTabs v-bind="args">
                <template #content-1>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #main-1>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #main-0>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
              </ContentTabs>`
})

export const Default = Template.bind({});
Default.args = {
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
    content: content,
}
