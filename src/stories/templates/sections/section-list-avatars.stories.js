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
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: { ContentSection, Container },
    setup() {
      return { args }
    },
    template: `
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
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Our Leadership',
  title: 'Guided by exceptional minds',
  avatars: [
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
      name: 'Rafael Umann',
      role: 'Chief Executive Officer',
      url: 'https://www.url.com/in/rafaelumann/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil.png',
      name: 'Alessandro Cauduro',
      role: 'Chief Artificial Intelligence Officer',
      url: 'https://www.url.com/in/alessandrocauduro/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-2.png',
      name: 'Fabiano Fraçao',
      role: 'Chief Revenue Officer',
      url: 'https://www.url.com/in/fabiano-fração-5b19632/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-gabriel-madureira.jpeg',
      name: 'Gabriel Madureira',
      role: 'Chief Marketing Officer',
      url: 'https://www.url.com/in/gabrielmadureira/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-3.png',
      name: 'Júlio Silvello',
      role: 'Chief Product Officer',
      url: 'https://www.url.com/in/juliosilvello/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-4.png',
      name: 'Marcus Grando',
      role: 'Chief Technology Officer',
      url: 'https://www.url.com/in/marcusgrando/'
    },
    {
      image: 'https://www.azion.com/assets/pages/about/perfil-5.png',
      name: 'Mauricio Pegoraro',
      role: 'Chief Information Security Officer',
      url: 'https://www.url.com/in/mauriciowp/'
    }
  ]
}
