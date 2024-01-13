import ContentTabs from '../templates/content-tabs-block/index.vue';
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Content Tabs',
  component: ContentTabs,
  tags: ['autodocs'],
  argsType: {
    title: String,
    content: Array,
  }
}

const content = [{
    title: 'Power your big data, stream processing, SIEM, and serverless application platforms with real-time data analytics.',
    description: "Data is gathered from various utilities like Edge Caching and WAF (Web Application Firewall) to your stream injector of choice.",
    tabName: 'Data Streaming'
  },
  {
    title: 'Power your big data, stream processing, SIEM, and serverless application platforms with real-time data analytics.',
    description: "Data is gathered from various utilities like Edge Caching and WAF (Web Application Firewall) to your stream injector of choice.",
    tabName: 'Real-Time Metrics'
  },
  {
    title: 'Power your big data, stream processing, SIEM, and serverless application platforms with real-time data analytics.',
    description: "Data is gathered from various utilities like Edge Caching and WAF (Web Application Firewall) to your stream injector of choice.",
    tabName: 'Real-Time Events'
  },
  {
    title: 'Power your big data, stream processing, SIEM, and serverless application platforms with real-time data analytics.',
    description: "Data is gathered from various utilities like Edge Caching and WAF (Web Application Firewall) to your stream injector of choice.",
    tabName: 'Edge Pulse'
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
                <template #actions-0>
                  <LinkButton label="Learn More" link="" outlined />
                </template>
              </ContentTabs>`
})

export const Default = Template.bind({});
Default.args = {
    title: 'Observe your apps',
    content: content,
}
