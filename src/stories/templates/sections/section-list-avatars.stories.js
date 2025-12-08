import Container from '../../../templates/container'
import SectionListAvatars from '../../../blocks/SectionListAvatar'
import Rules from '../../rules'

export default {
  title: 'Blocks/rebranding/SectionListAvatars',
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
    components: {
      Container,
      SectionListAvatars
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionListAvatars v-bind="args" />
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
