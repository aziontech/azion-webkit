import SectionCallToAction from '../../blocks/SectionCallToAction2Column/SectionCallToAction2column.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToAction2column',
  component: SectionCallToAction,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    },
    docs: {
      description: {
        component:
          'SectionCallToAction é um componente versátil para criar seções de call-to-action com diferentes layouts e estilos. Suporte completo a Markdown nas descrições e múltiplas variações visuais.'
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-[#0a0a0a] min-h-screen py-12"><story /></div>'
    })
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['70-30'],
      description: 'Layout do banner: 70-30 (duas colunas)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '70-30' }
      }
    },
    id: {
      control: 'text',
      description: 'ID opcional para o elemento section'
    },
    backgroundPattern: {
      control: 'object',
      description: 'Background pattern configuration',
      table: {
        type: { summary: '{ style: string, size: string }' },
        defaultValue: { summary: "{ style: 'dots', size: '12px' }" }
      }
    },
    cta: {
      control: 'object',
      description: 'Configuração do card principal de CTA (lado direito no layout 2-col)',
      table: {
        type: { summary: 'CardProps' }
      }
    },
    content: {
      control: 'object',
      description: 'Configuração do card de conteúdo secundário (lado esquerdo no layout 2-col)',
      table: {
        type: { summary: 'CardProps' }
      }
    }
  }
}

// Layout de duas colunas - mais comum para landing pages
export const Default = {
  name: 'Two Column Layout',
  args: {
    type: '70-30',
    id: 'section-cta-default',
    backgroundPattern: {
      style: 'dots',
      size: '12px'
    },
    content: {
      overline: 'Need enterprise solutions?',
      title: 'Not sure which plan is right for you?',
      descriptionRawMarkdown:
        'Select from a range of plans, from **free to enterprise**, tailored to your specific requirements and scale.',
      linkLabel: 'Explore Plans',
      link: 'https://www.azion.com/pricing'
    },
    cta: {
      overline: 'Get Started',
      title: 'Deploy in minutes',
      descriptionRawMarkdown:
        'Experience the power of **edge computing** with our global infrastructure.',
      linkLabel: 'Start Free Trial',
      link: 'https://console.azion.com/signup'
    }
  }
}
