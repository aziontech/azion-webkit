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
      description: 'Markdown content that will be converted to HTML (supports headers, bold, italic, links, line breaks)'
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
  descriptionRawMarkdown: `A plataforma oferece suporte para **frameworks modernos** incluindo Next.js, Vue, React, Angular, Gatsby e Astro.

Functions fornece observabilidade abrangente com *traces de execução* e métricas de performance para otimização.

O sistema suporta execução WebAssembly, APIs Node.js e compatibilidade WinterTC para desenvolvimento flexível.

[Saiba mais sobre nossa documentação](https://docs.azion.com)`,
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Development environment',
  height: 'default',
  variant: 'titleBulletsImage'
}

export const TitleImage = Template.bind({})
TitleImage.args = {
  title: 'Tecnologia de ponta para desenvolvedores',
  descriptionRawMarkdown: `## Recursos avançados

Nossa plataforma oferece **performance excepcional** com:

- Edge computing distribuído globalmente
- *Latência ultra-baixa* em todas as regiões
- Escalabilidade automática e inteligente

### Integração simples

Conecte-se facilmente com suas ferramentas favoritas e comece a desenvolver em minutos.

[Documentação completa](https://docs.azion.com) | [Tutoriais](https://learn.azion.com)`,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  alt: 'Technology dashboard',
  height: 'large',
  variant: 'titleImage'
}
