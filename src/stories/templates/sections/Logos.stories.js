
import ContentSection from '../../../templates/contentsection'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Sections/Logos',
  tags: ['autodocs'],
}

const MOCK = {
    "overline": "Nossos Investidores",
    "title": "Apoiados por empresas visionárias"
}

const template = `
<Container class="surface-ground">
  <ContentSection titleTag="h2" position="center" isContentCentralized textCenter :title="args.title"
    :overline="args.overline">
    <template #content>
      <div class="flex items-center flex-col md:flex-row justify-center gap-6">
        <img alt="Monashees Logo" class="h-10 w-auto" loading="lazy" height="43" width="auto"
          src="http://www.azion.com/assets/pages/about/monashees.svg" />
        <img alt="Qualcomm Logo" class="h-10 w-auto" loading="lazy" height="43" width="auto"
          src="http://www.azion.com/assets/pages/about/qualcomm.svg" />
      </div>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template } },
};
