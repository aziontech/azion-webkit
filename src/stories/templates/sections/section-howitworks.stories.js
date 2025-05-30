import Container from '../../../templates/container'
import SectionSticky from '../../../templates/sectionsticky'

export default {
  title: 'Blocks/Sections/section-howitworks',
  tags: ['autodocs']
}

const MOCK = {
  overline: 'Como funciona',
  titleTag: 'h2',
  title: 'Como você pode usar o Azion WAF nos diversos contextos',
  sections: [
    {
      overline: 'Proteção',
      titleTag: 'h3',
      position: 'left',
      title: 'A versatilidade de configuração que você estava procurando',
      description:
        'Ative proteções prontas para uso ou crie regras e limites personalizados por meio de uma interface intuitiva ou APIs.',
      image: {
        light: '/assets/mocks/proteja-1.png',
        dark: '/assets/mocks/proteja-1.png',
        alt: 'Azion Console | Web Application Firewall'
      },
      buttons: [
        {
          label: 'Começar agora',
          link: 'https://console.azion.com/signup/'
        },
        {
          label: 'Pedir demonstração',
          link: '/en/contact-sales/',
          severity: 'secondary'
        }
      ]
    },
    {
      overline: 'Teste',
      titleTag: 'h3',
      title: 'Suas regras em seu pipeline de CI/CD',
      description:
        'Teste e implemente regras de firewall, aproveitando os pipelines CI/CD existentes.',
      image: {
        light: '/assets/mocks/proteja-1.png',
        dark: '/assets/mocks/proteja-1.png',
        alt: 'Azion Console | Web Application Firewall'
      },
      buttons: [
        {
          label: 'Começar agora',
          link: 'https://console.azion.com/signup/'
        },
        {
          label: 'Pedir demonstração',
          link: '/en/contact-sales/',
          severity: 'secondary'
        }
      ]
    },
    {
      overline: 'Observe',
      titleTag: 'h3',
      title:
        'Acompanhe dados em tempo real da Azion e de suas soluções de observabilidade favoritas',
      description:
        'Colete dados em tempo real e os transmita para suas plataformas de SIEM e analitica, para uma resposta automática a incidentes com os conectores do Data Stream da Azion.',
      image: {
        light: '/assets/mocks/proteja-1.png',
        dark: '/assets/mocks/proteja-1.png',
        alt: 'Azion Console | Web Application Firewall'
      },
      buttons: [
        {
          label: 'Começar agora',
          link: 'https://console.azion.com/signup/'
        },
        {
          label: 'Pedir demonstração',
          link: '/en/contact-sales/',
          severity: 'secondary'
        }
      ]
    }
  ]
}

const template = `
<Container class="surface-ground">
  <SectionSticky v-bind="args" />
</Container>
`

const Template = (args) => ({
  components: { Container, SectionSticky },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK
