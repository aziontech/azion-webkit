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
        component: 'SectionCallToAction é um componente versátil para criar seções de call-to-action com diferentes layouts e estilos. Suporte completo a Markdown nas descrições e múltiplas variações visuais.'
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 min-h-screen py-12"><story /></div>'
    })
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['2-col-70-30', '1-col', '1-col-short', '1-col-short-orange'],
      description: 'Layout do banner: 2-col-70-30 (duas colunas), 1-col (uma coluna alta), 1-col-short (uma coluna compacta), 1-col-short-orange (uma coluna compacta laranja)',
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
      descriptionRawMarkdown: 'Select from a range of plans, from **free to enterprise**, tailored to your specific requirements and scale.',
      linkLabel: 'Explore Plans',
      link: 'https://www.azion.com/pricing'
    },
    cta: {
      overline: 'Get Started',
      title: 'Deploy in minutes',
      descriptionRawMarkdown: 'Experience the power of **edge computing** with our global infrastructure.',
      linkLabel: 'Start Free Trial',
      link: 'https://console.azion.com/signup'
    }
  }
}

// Layout de uma coluna - ideal para CTAs focados
export const SingleColumn = {
  args: {
    type: '1-col',
    id: 'section-cta-single',
    backgroundStyle: 'square',
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown: 'Transform your digital infrastructure with our **cutting-edge edge computing** platform. Reduce latency by up to *90%* and improve user experience globally.',
      linkLabel: 'Contact Sales',
      link: 'https://www.azion.com/contact'
    }
  }
}

// Layout compacto - ideal para seções intermediárias
export const CompactLayout = {
  args: {
    type: '1-col-short',
    id: 'section-cta-compact',
    backgroundStyle: 'dots',
    cta: {
      overline: 'Quick Start',
      title: 'Ready to Begin?',
      descriptionRawMarkdown: 'Deploy your first application in **under 5 minutes** with our intuitive platform.',
      linkLabel: 'Get Started',
      link: 'https://console.azion.com'
    }
  }
}

// Layout laranja - ideal para promoções e ofertas especiais
export const PromotionalLayout = {
  args: {
    type: '1-col-short-orange',
    id: 'section-cta-promo',
    backgroundStyle: 'dots',
    cta: {
      overline: 'Limited Time Offer',
      title: 'Free for 30 days',
      descriptionRawMarkdown: 'Try our **Enterprise plan** free for 30 days. No credit card required.',
      linkLabel: 'Start Free Trial',
      link: 'https://console.azion.com/signup?promo=30days'
    }
  }
}

// Demonstração de Markdown avançado
export const WithAdvancedMarkdown = {
  args: {
    type: '2-col-70-30',
    id: 'section-cta-markdown',
    backgroundStyle: 'square',
    content: {
      overline: 'Documentation',
      title: 'Learn Edge Computing',
      descriptionRawMarkdown: 'Access our comprehensive **documentation**, *tutorials*, and guides to master edge computing concepts.',
      linkLabel: 'View Documentation',
      link: 'https://docs.azion.com'
    },
    cta: {
      overline: 'Performance',
      title: 'Ultra-fast delivery',
      descriptionRawMarkdown: 'Achieve **sub-50ms latency** globally with our edge network. Perfect for *gaming*, *streaming*, and **real-time applications**.',
      linkLabel: 'See Performance',
      link: 'https://www.azion.com/performance'
    }
  }
}

// Exemplo com background de pontos
export const DotsBackground = {
  args: {
    type: '1-col',
    id: 'section-cta-dots',
    backgroundStyle: 'dots',
    cta: {
      overline: 'Global Network',
      title: 'Edge Locations Worldwide',
      descriptionRawMarkdown: 'Deploy your applications across **100+ edge locations** in 6 continents for optimal performance.',
      linkLabel: 'View Network Map',
      link: 'https://www.azion.com/network'
    }
  }
}

// Exemplo com background quadriculado
export const SquareBackground = {
  args: {
    type: '1-col-short',
    id: 'section-cta-square',
    backgroundStyle: 'square',
    cta: {
      overline: 'Security',
      title: 'Enterprise-grade Security',
      descriptionRawMarkdown: 'Protect your applications with **DDoS protection**, *WAF*, and advanced security features.',
      linkLabel: 'Learn Security',
      link: 'https://www.azion.com/security'
    }
  }
}

// Exemplo para desenvolvedores
export const DeveloperFocused = {
  args: {
    type: '2-col-70-30',
    id: 'section-cta-developer',
    backgroundStyle: 'dots',
    content: {
      overline: 'For Developers',
      title: 'Build with Modern Tools',
      descriptionRawMarkdown: 'Use our **REST APIs**, *SDKs*, and CLI tools to integrate edge computing into your workflow.',
      linkLabel: 'View API Docs',
      link: 'https://api.azion.com'
    },
    cta: {
      overline: 'Get Started',
      title: 'Deploy your first app',
      descriptionRawMarkdown: 'From **zero to production** in minutes with our developer-friendly platform.',
      linkLabel: 'Start Building',
      link: 'https://console.azion.com'
    }
  }
}

// Exemplo para empresas
export const EnterpriseFocused = {
  args: {
    type: '1-col',
    id: 'section-cta-enterprise',
    backgroundStyle: 'square',
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale without limits',
      descriptionRawMarkdown: 'Handle **millions of requests** per second with our enterprise-grade infrastructure. *99.99% uptime* guaranteed.',
      linkLabel: 'Contact Sales',
      link: 'https://www.azion.com/enterprise'
    }
  }
}

// Showcase de todos os layouts
export const AllLayouts = {
  render: () => ({
    template: `
      <div class="space-y-16">
        <SectionCallToAction 
          type="2-col-70-30"
          background-style="dots"
          :content="twoColumnContent"
          :cta="twoColumnCta"
        />
        <SectionCallToAction 
          type="1-col"
          background-style="square"
          :cta="singleColumnCta"
        />
        <SectionCallToAction 
          type="1-col-short"
          background-style="dots"
          :cta="compactCta"
        />
        <SectionCallToAction 
          type="1-col-short-orange"
          background-style="dots"
          :cta="promoCta"
        />
      </div>
    `,
    components: { SectionCallToAction },
    data() {
      return {
        twoColumnContent: {
          overline: 'Solutions',
          title: 'Edge Computing Platform',
          descriptionRawMarkdown: 'Comprehensive **edge computing** solutions for modern applications.',
          linkLabel: 'Learn More',
          link: '#'
        },
        twoColumnCta: {
          overline: 'Get Started',
          title: 'Try it free',
          descriptionRawMarkdown: 'Start your **free trial** today and experience the power of edge computing.',
          linkLabel: 'Start Free',
          link: '#'
        },
        singleColumnCta: {
          overline: 'Enterprise',
          title: 'Scale Your Business',
          descriptionRawMarkdown: 'Enterprise-grade **infrastructure** with *24/7 support* and guaranteed SLA.',
          linkLabel: 'Contact Sales',
          link: '#'
        },
        compactCta: {
          overline: 'Quick Start',
          title: 'Deploy in Minutes',
          descriptionRawMarkdown: 'Get your application **live** in under 5 minutes.',
          linkLabel: 'Deploy Now',
          link: '#'
        },
        promoCta: {
          overline: 'Special Offer',
          title: '50% Off First Month',
          descriptionRawMarkdown: 'Limited time offer for **new customers**. No setup fees.',
          linkLabel: 'Claim Offer',
          link: '#'
        }
      }
    }
  })
}
