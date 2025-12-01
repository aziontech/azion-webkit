import SectionCallToAction from '../../blocks/SectionCallToAction1column/SectionCallToAction1column.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToAction1column',
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
      options: ['short', 'short-orange'],
      description: 'short (uma coluna compacta), short-orange (uma coluna compacta laranja)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2-col-70-30' }
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

export const Orange = {
  args: {
    type: 'short-orange',
    id: 'section-cta-promo',
    backgroundPattern: {
      style: 'dots',
      size: '12px'
    },
    cta: {
      overline: 'Limited Time Offer',
      title: 'Construa suas aplicacoes de forma inteligente',
      descriptionRawMarkdown:
        'Try our **Enterprise plan** free for 30 days. No credit card required.',
      linkLabel: 'Free Account',
      link: 'https://console.azion.com/signup?promo=30days'
    }
  }
}

export const Black = {
  args: {
    type: 'short-black',
    id: 'section-cta-black',
    content: {
      overline: 'Special Offer',
      title: 'Limited Time Deal',
      descriptionRawMarkdown: 'Get 50% off your first month with our edge computing platform.',
      linkLabel: 'Claim Offer',
      link: 'https://www.azion.com/promo'
    },
    cta: {
      overline: 'Special Offer',
      title: 'Limited Time Deal',
      descriptionRawMarkdown: 'Get 50% off your first month with our edge computing platform.',
      linkLabel: 'Claim Offer',
      link: 'https://www.azion.com/promo'
    }
  }
}
