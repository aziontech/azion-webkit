import SectionCallToActionShared from '../../blocks/SectionCallToActionShared/SectionCallToActionShared.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToActionShared',
  component: SectionCallToActionShared,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    },
    docs: {
      description: {
        component:
          'SectionCallToActionShared is a shared version of the call-to-action component with identical functionality to SectionCallToAction.'
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
      options: ['2-col-70-30', '1-col', '1-col-short-orange', '1-col-short-black'],
      description: 'Layout type variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2-col-70-30' }
      }
    },
    id: {
      control: 'text',
      description: 'Optional HTML id attribute'
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
      description: 'Main CTA card configuration',
      table: {
        type: { summary: 'CardProps' }
      }
    },
    content: {
      control: 'object',
      description: 'Content card configuration (for 2-column layouts)',
      table: {
        type: { summary: 'CardProps' }
      }
    }
  }
}

export const Default = {
  name: 'Two Column Layout',
  args: {
    type: '2-col-70-30',
    id: 'section-cta-shared-default',
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

export const OneColShortOrange = {
  name: 'Short Orange Theme',
  args: {
    type: '1-col-short-orange',
    id: 'section-cta-shared-orange',
    backgroundPattern: {
      style: 'dots',
      size: '12px'
    },
    cta: {
      overline: 'Limited Time Offer',
      title: 'Build your applications intelligently',
      descriptionRawMarkdown:
        'Try our **Enterprise plan** free for 30 days. No credit card required.',
      linkLabel: 'Free Account',
      link: 'https://console.azion.com/signup?promo=30days'
    }
  }
}
