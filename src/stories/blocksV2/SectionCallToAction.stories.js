import SectionCallToAction from '../../blocks/SectionCallToAction/SectionCallToAction.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToAction',
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
      options: ['2-col-70-30', '1-col', '1-col-short', '1-col-short-orange'],
      description:
        'Layout do banner: 2-col-70-30 (duas colunas), 1-col (uma coluna alta), 1-col-short (uma coluna compacta), 1-col-short-orange (uma coluna compacta laranja)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2-col-70-30' }
      }
    },
    id: {
      control: 'text',
      description: 'ID opcional para o elemento section'
    },
    backgroundStyle: {
      control: 'select',
      options: ['dots', 'square'],
      description: 'Estilo do padrão de fundo: dots (pontos) ou square (grade quadriculada)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dots' }
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
    type: '2-col-70-30',
    id: 'section-cta-default',
    backgroundStyle: 'dots',
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

export const OneCol = {
  args: {
    type: '1-col',
    id: 'section-cta-single',
    backgroundStyle: 'dots',
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown:
        'Transform your digital infrastructure with our **cutting-edge edge computing** platform. Reduce latency by up to *90%* and improve user experience globally.',
      linkLabel: 'Contact Sales',
      link: 'https://www.azion.com/contact'
    }
  }
}

export const OneColShortOrange = {
  args: {
    type: '1-col-short-orange',
    id: 'section-cta-promo',
    backgroundStyle: 'dots',
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

export const OneColShortBlack = {
  args: {
    type: '1-col-short-black',
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
