import SectionImageContent2Column from '../../blocks/SectionImageContent2Column/SectionImageContent2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionImageContent2Column',
  component: SectionImageContent2Column,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title text displayed on the left side (sticky)'
    },
    descriptionRawMarkdown: {
      control: { type: 'text' },
      description:
        'Markdown content that will be converted to HTML (supports headers, bold, italic, links, line breaks)'
    },
    image: {
      control: { type: 'text' },
      description: 'Image source URL'
    },
    alt: {
      control: { type: 'text' },
      description: 'Image alt text'
    },
    height: {
      control: { type: 'select' },
      options: ['default', 'large'],
      description: 'Height of the image box'
    },
    variant: {
      control: { type: 'select' },
      options: ['titleBulletsImage', 'titleImage', 'imageOnly'],
      description: 'Layout variation'
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 min-h-screen"><story /></div>'
    })
  ]
}

const Template = (args) => ({
  components: { SectionImageContent2Column },
  setup() {
    return { args }
  },
  template: `<SectionImageContent2Column v-bind="args" />`
})

export const Default = Template.bind({})
Default.args = {
  title: 'Framework compatibility and development environment',
  descriptionRawMarkdown:
    'Construa seu código em Typescript ou Javascript usando os frameworks mais comuns de mercado \\*\\*Next.js, Vue, React, Angular, Gatsby e Astro\\*\\*.\n\nCrie funções pequenas e independentes e comece a migrar das aplicações legadas.\n\n<Button href="https://www.azion.com/pt-br/documentacao/produtos/guias/build/aplicacao-browserless-functions/" type="link">Veja na prática</Button> <Button href="https://www.azion.com/pt-br/documentacao/produtos/guias/build/aplicacao-browserless-functions/" type="primary">Veja na prática</Button> <Button href="https://www.azion.com/pt-br/documentacao/produtos/guias/build/aplicacao-browserless-functions/" type="secondary">Veja na prática</Button>',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Development environment',
  height: 'default',
  variant: 'titleBulletsImage'
}
