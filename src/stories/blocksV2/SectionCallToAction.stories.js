import SectionCallToAction from '../../blocks/SectionCallToAction/SectionCallToAction.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToAction',
  component: SectionCallToAction,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 p-12"><story /></div>'
    })
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['2-col-70-30', '1-col', '1-col-short', '1-col-short-orange'],
      description: 'Banner layout type'
    },
    id: {
      control: 'text',
      description: 'Optional ID for the section element'
    },
    cta: {
      control: 'object',
      description: 'CTA card configuration (right/main card)'
    },
    content: {
      control: 'object',
      description: 'Content card configuration (left/secondary card)'
    }
  }
}

export const TwoColumnLayout = {
  args: {
    type: '2-col-70-30',
    id: 'section-cta-2col',
    content: {
      overline: 'Need enterprise solutions?',
      title: 'Not sure which plan is right for you?',
      descriptionRawMarkdown:
        'Select from a range of plans, from free to enterprise, tailored to your requirements.',
      button: {
        label: 'Explore our plans',
        href: 'https://www.azion.com'
      }
    },
    cta: {
      overline: 'Developer',
      title: 'Begin your deployment today',
      descriptionRawMarkdown:
        'Explore our **free plan**, test our products and start to elevate the quality of your projects!',
      button: {
        label: 'View Docs',
        href: 'https://docs.azion.com'
      }
    }
  }
}

export const SingleColumn = {
  args: {
    type: '1-col',
    id: 'section-cta-1col',
    content: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown:
        'Transform your digital infrastructure with our cutting-edge edge computing platform.',
      button: {
        label: 'Contact Sales',
        href: 'https://www.azion.com/contact'
      }
    },
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown:
        'Transform your digital infrastructure with our cutting-edge edge computing platform.',
      button: {
        label: 'Contact Sales',
        href: 'https://www.azion.com/contact'
      }
    }
  }
}

export const SingleColumnShort = {
  args: {
    type: '1-col-short',
    id: 'section-cta-short',
    content: {
      overline: 'Quick Start',
      title: 'Ready to Begin?',
      descriptionRawMarkdown: 'Get started in minutes with our edge computing platform.',
      button: {
        label: 'Get Started',
        href: 'https://www.azion.com'
      }
    },
    cta: {
      overline: 'Quick Start',
      title: 'Ready to Begin?',
      descriptionRawMarkdown: 'Get started in minutes with our edge computing platform.',
      button: {
        label: 'Get Started',
        href: 'https://www.azion.com'
      }
    }
  }
}

export const SingleColumnShortOrange = {
  args: {
    type: '1-col-short-orange',
    id: 'section-cta-orange',
    content: {
      overline: 'Special Offer',
      title: 'Limited Time Deal',
      descriptionRawMarkdown: 'Get 50% off your first month with our edge computing platform.',
      button: {
        label: 'Claim Offer',
        href: 'https://www.azion.com/promo'
      }
    },
    cta: {
      overline: 'Special Offer',
      title: 'Limited Time Deal',
      descriptionRawMarkdown: 'Get 50% off your first month with our edge computing platform.',
      button: {
        label: 'Claim Offer',
        href: 'https://www.azion.com/promo'
      }
    }
  }
}

export const WithMarkdownDescription = {
  args: {
    type: '1-col',
    id: 'section-cta-markdown',
    content: {
      overline: 'Advanced Features',
      title: 'Edge Computing Solutions',
      descriptionRawMarkdown:
        'Deploy applications with **ultra-low latency** and *global scalability*. Perfect for modern applications.',
      button: {
        label: 'Learn More',
        href: 'https://www.azion.com/features'
      }
    },
    cta: {
      overline: 'Advanced Features',
      title: 'Edge Computing Solutions',
      descriptionRawMarkdown:
        'Deploy applications with **ultra-low latency** and *global scalability*. Perfect for modern applications.',
      button: {
        label: 'Learn More',
        href: 'https://www.azion.com/features'
      }
    }
  }
}

export const MultipleVariants = {
  render: () => ({
    template: `
      <div class="space-y-8">
        <SectionCallToAction 
          type="2-col-70-30"
          :content="twoColumnContent"
          :cta="twoColumnCta"
        />
        <SectionCallToAction 
          type="1-col"
          :content="singleColumnContent"
          :cta="singleColumnCta"
        />
        <SectionCallToAction 
          type="1-col-short-orange"
          :content="orangeContent"
          :cta="orangeCta"
        />
      </div>
    `,
    components: { SectionCallToAction },
    data() {
      return {
        twoColumnContent: {
          overline: 'Platform',
          title: 'Edge Computing',
          descriptionRawMarkdown: 'Global edge network for optimal performance.',
          button: {
            label: 'Get Started',
            href: '#'
          }
        },
        twoColumnCta: {
          overline: 'Support',
          title: '24/7 Support',
          descriptionRawMarkdown: 'Expert assistance whenever you need it.',
          button: {
            label: 'Contact Us',
            href: '#'
          }
        },
        singleColumnContent: {
          overline: 'Enterprise',
          title: 'Enterprise Solutions',
          descriptionRawMarkdown: 'Scalable infrastructure for large organizations.',
          button: {
            label: 'Learn More',
            href: '#'
          }
        },
        singleColumnCta: {
          overline: 'Enterprise',
          title: 'Enterprise Solutions',
          descriptionRawMarkdown: 'Scalable infrastructure for large organizations.',
          button: {
            label: 'Learn More',
            href: '#'
          }
        },
        orangeContent: {
          overline: 'Promo',
          title: 'Special Offer',
          descriptionRawMarkdown: 'Limited time discount on our platform.',
          button: {
            label: 'Claim Now',
            href: '#'
          }
        },
        orangeCta: {
          overline: 'Promo',
          title: 'Special Offer',
          descriptionRawMarkdown: 'Limited time discount on our platform.',
          button: {
            label: 'Claim Now',
            href: '#'
          }
        }
      }
    }
  })
}
