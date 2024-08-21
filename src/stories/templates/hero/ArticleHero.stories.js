import HeroArticle from '../../../templates/heroarticle';
import Breadcrumb from "primevue/breadcrumb";

export default {
  title: 'Blocks/Hero/Article',
  component: HeroArticle,
  tags: ['autodocs'],
  argTypes: {}
};


const MOCK = {
  breadcrumbItems: [
    {
      url: `/en/blog/`,
      target: "_self",
      label: "Blog",
    },
    {
      url: 'www.azion.com',
      target: "_self",
      label: 'This Article',
    },
  ],
  "date": "JUN 27, 2024 • 15 min read",
  "title": "Azion Edge SQL: enabling access and analysis of structured data at the edge",
  "authors": [
      {
          "avatar": "https://www.azion.com/assets/blog/images/uploads/img-prof.png",
          "title": "Mariana Bellorín Aguilera",
          "role": "Technical Writer"
      }
  ],
  "description": "Explore how Azion Edge SQL enhances database operations with edge computing for high scalability, low latency, and cost-effectiveness."
}

const template = `
<div class="surface-ground p-10">
  <HeroArticle v-bind="args">
    <template #breadcrumbs>
      <Breadcrumb :model="args.breadcrumbItems" class="-ml-1 lg:col-start-2" />
    </template>
  </HeroArticle>
</div>
`

const Template = (args) => ({
  components: { HeroArticle, Breadcrumb },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: template } },
};
