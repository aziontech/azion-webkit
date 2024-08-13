import HeroArticle from '../../templates/heroarticle';
import data from '../../mock/articleHero'

export default {
  title: '2. Components Group/ArticleHero',
  component: HeroArticle,
  tags: ['autodocs'],
  argTypes: {}
};

const ArticleHeroTemplate = `
<HeroArticle v-bind="args">
  <template #breadcrumbs> [#breadcrumbs] </template>
</HeroArticle>
`

const Template = (args) => ({
  components: { HeroArticle },
  setup() {
    return { args }
  },
  template: ArticleHeroTemplate
})

export const Default = Template.bind({})
Default.args = data
