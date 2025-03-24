import Container from '../../../templates/container'
import SectionIntercalatedContent from '../../../templates/sectionintercalatedcontent'

export default {
  title: 'Blocks/Sections/section-intercalated-content',
  tags: ['autodocs']
}

const MOCK = {
  overline: 'Como funciona',
  title: 'Como você pode usar o Azion WAF nos diversos contextos',
  items: [
    {
      title: 'A versatilidade de configuração que você estava procurando',
      description: 'Ative proteções prontas para uso ou crie regras e limites personalizados por meio de uma interface intuitiva ou APIs.',
      position: 'left',
      imageLight: '/assets/mocks/proteja-1.png',
      imageDark: '/assets/mocks/proteja-1.png',
      alt: 'Azion Console | Web Application Firewall'
    },
    {
      title: 'Suas regras em seu pipeline de CI/CD',
      description: 'Teste e implemente regras de firewall, aproveitando os pipelines CI/CD existentes.',
      position: 'right',
      imageLight: '/assets/mocks/proteja-1.png',
      imageDark: '/assets/mocks/proteja-1.png',
      alt: 'Azion Console | Web Application Firewall'
    },
    {
      title: 'Acompanhe dados em tempo real da Azion e de suas soluções de observabilidade favoritas',
      description: 'Colete dados em tempo real e os transmita para suas plataformas de SIEM e analitica, para uma resposta automática a incidentes com os conectores do Data Stream da Azion.',
      position: 'left',
      imageLight: '/assets/mocks/proteja-1.png',
      imageDark: '/assets/mocks/proteja-1.png',
      alt: 'Azion Console | Web Application Firewall'
    }
  ]
}

const template = `
<div class="px-container fixed top-0 h-12 surface-ground w-full" />
<Container class="surface-ground">
  <SectionIntercalatedContent v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionIntercalatedContent, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK