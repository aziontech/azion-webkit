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
    backgroundStyle: {
      control: 'select',
      options: ['dots', 'square'],
      description: 'Background pattern style for the CTA card'
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

export const TwoCol7030 = {
  args: {
    type: '2-col-70-30',
    id: 'section-cta-2col',
    content: {
      overline: 'Need enterprise solutions?',
      title: 'Not sure which plan is right for you?',
      descriptionRawMarkdown:
        'Select from a range of plans, from free to enterprise, tailored to your requirements.',
      linkLabel: 'Explore our plans',
      link: 'https://www.azion.com'
    },
    cta: {
      overline: 'Developer',
      title: 'Begin your deployment today',
      descriptionRawMarkdown:
        'Explore our **free plan**, test our products and start to elevate the quality of your projects!',
      linkLabel: 'View Docs',
      link: 'https://docs.azion.com'
    }
  }
}

export const OneCol = {
  args: {
    type: '1-col',
    id: 'section-cta-1col',
    content: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown:
        'Transform your digital infrastructure with our cutting-edge edge computing platform.',
      linkLabel: 'Contact Sales',
      link: 'https://www.azion.com/contact'
    },
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale Your Infrastructure',
      descriptionRawMarkdown:
        'Transform your digital infrastructure with our cutting-edge edge computing platform.',
      linkLabel: 'Contact Sales',
      link: 'https://www.azion.com/contact'
    }
  }
}

export const OneColShort = {
  args: {
    type: '1-col-short',
    id: 'section-cta-short',
    content: {
      overline: 'Quick Start',
      title: 'Ready to Begin?',
      descriptionRawMarkdown: 'Get started in minutes with our edge computing platform.',
      linkLabel: 'Get Started',
      link: 'https://www.azion.com'
    },
    cta: {
      overline: 'Quick Start',
      title: 'Ready to Begin?',
      descriptionRawMarkdown: 'Get started in minutes with our edge computing platform.',
      linkLabel: 'Get Started',
      link: 'https://www.azion.com'
    }
  }
}

export const OneColShortOrange = {
  args: {
    type: '1-col-short-orange',
    id: 'section-cta-orange',
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
