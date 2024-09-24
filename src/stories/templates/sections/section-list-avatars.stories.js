
import ContentSection from '../../../templates/contentsection'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-list-avatars',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.avatars}
        `,
      },
    },
  },
}

const MOCK = {
  "overline": "Our Leadership",
  "title": "Guided by exceptional minds",
  "avatars": [
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-6.png",
      "name": "Rafael Umann",
      "role": "Chief Executive Officer",
      "linkedin": "https://www.linkedin.com/in/rafaelumann/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil.png",
      "name": "Alessandro Cauduro",
      "role": "Chief Artificial Intelligence Officer",
      "linkedin": "https://www.linkedin.com/in/alessandrocauduro/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-1.png",
      "name": "Andressa Giongo",
      "role": "Chief People Officer",
      "linkedin": "https://www.linkedin.com/in/andressa-giongo-90661311/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-2.png",
      "name": "Fabiano Fraçao",
      "role": "Chief Revenue Officer",
      "linkedin": "https://www.linkedin.com/in/fabiano-fração-5b19632/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-3.png",
      "name": "Júlio Silvello",
      "role": "Chief Product Officer",
      "linkedin": "https://www.linkedin.com/in/juliosilvello/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-4.png",
      "name": "Marcus Grando",
      "role": "Chief Technology Officer",
      "linkedin": "https://www.linkedin.com/in/marcusgrando/"
    },
    {
      "image": "https://www.azion.com/assets/pages/about/perfil-5.png",
      "name": "Mauricio Pegoraro",
      "role": "Chief Information Security Officer",
      "linkedin": "https://www.linkedin.com/in/mauriciowp/"
    }

  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection titleTag="h2" position="center" isContentCentralized textCenter :title="args.title"
    :overline="args.overline">
    <template #main>
      <div class="flex flex-wrap gap-2 gap-y-4 w-full justify-center">
        <a v-for="{ linkedin, name, role, image } in args.avatars" :href="linkedin" target="_blank"
          class="flex flex-col gap-5 w-40 items-center group">
          <img loading="lazy" width="80" height="80" class="rounded filter grayscale group-hover:grayscale-0" :src="image" />
          <div class="flex flex-col gap-1 text-center">
            <p class="text-color"> {{ name }} </p>
            <p class="text-color-secondary text-xs text-balance">
              {{ role }}
            </p>
          </div>
        </a>
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
