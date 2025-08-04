import SectionVideoRight from '../../../templates/sectionvideoright'
import Rules from '../../rules'

const MOCK = {
  overline: 'ABOUT US',
  titleTag: 'h2',
  title: 'Our mission is to power the hyper-connected economy',
  description:
    'From the beginning, our goal has been to create technologies that unlock new possibilities.',
  video: {
    title: 'Azion Overview',
    src: 'https://www.youtube.com/embed/6Pyn2T8EmC8',
    image: {
      alt: "Image of a globe illustrating Azion's connections",
      dark: {
        src: 'https://www.azion.com/assets/pages/about/globe-about.png'
      },
      light: {
        src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
      }
    }
  },
  videoPlayOverlay: false,
  cards: [],
  position: 'left'
}

const MOCK_WITH_CARDS = {
  ...MOCK,
  cards: [
    {
      title: 'Release',
      description: 'Release conidently and consistently.',
      cta: {
        link: '',
        action: {
          label: 'Learn more'
        }
      }
    },
    {
      title: 'Target',
      description: 'Deliver personalized experiences',
      cta: {
        link: '',
        action: {
          label: 'Learn more'
        }
      }
    },
    {
      title: 'Remediate',
      description: 'Find and fix issues faster.',
      cta: {
        link: '',
        action: {
          label: 'Learn more'
        }
      }
    },
    {
      title: 'Experiment',
      description: 'Continuously measure and optimize.',
      cta: {
        link: '',
        action: {
          label: 'Learn more'
        }
      }
    }
  ]
}

const config = (args) => {
  return {
    components: { SectionVideoRight },
    setup() {
      return { args }
    },
    template: '<SectionVideoRight v-bind="args" />'
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = MOCK

const MOCK_WITH_FORM = {
  ...MOCK,
  form: {
    hubspot: {
      formId: '12345678',
      companyId: '98765432'
    },
    title: 'Get Started with Azion'
  },
  timerDuration: 10000
}

const MOCK_WITH_FORM_AND_CARDS = {
  ...MOCK_WITH_CARDS,
  form: {
    hubspot: {
      formId: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      companyId: '5759082'
    },
    title: 'Get Started with Azion'
  },
  timerDuration: 10000
}

const MOCK_QUICK_TIMER = {
  ...MOCK,
  form: {
    hubspot: {
      formId: '12345678',
      companyId: '98765432'
    },
    title: 'Get Started with Azion'
  },
  timerDuration: 3000
}

const MOCK_SLOW_TIMER = {
  ...MOCK,
  form: {
    hubspot: {
      formId: '12345678',
      companyId: '98765432'
    },
    title: 'Get Started with Azion'
  },
  timerDuration: 30000
}

const MOCK_NO_TIMER = {
  ...MOCK,
  form: {
    hubspot: {
      formId: '12345678',
      companyId: '98765432'
    },
    title: 'Get Started with Azion'
  },
  timerDuration: 0
}

const TemplateWithCards = (args) => config(args)
export const DefaultWithCards = TemplateWithCards.bind({})
DefaultWithCards.args = MOCK_WITH_CARDS

export const PositionRight = Template.bind({})
PositionRight.args = { ...MOCK, position: 'right' }
PositionRight.parameters = {
  docs: {
    description: {
      story: 'Section with content positioned on the right side'
    }
  }
}

export const PositionRightWithCards = TemplateWithCards.bind({})
PositionRightWithCards.args = { ...MOCK_WITH_CARDS, position: 'right' }
PositionRightWithCards.parameters = {
  docs: {
    description: {
      story: 'Section with content positioned on the right side and cards'
    }
  }
}

const TemplateWithForm = (args) => config(args)
export const WithVideoBlocker = TemplateWithForm.bind({})
WithVideoBlocker.args = MOCK_WITH_FORM

const TemplateWithFormAndCards = (args) => config(args)
export const WithVideoBlockerAndCards = TemplateWithFormAndCards.bind({})
WithVideoBlockerAndCards.args = MOCK_WITH_FORM_AND_CARDS

const TemplateQuickTimer = (args) => config(args)
export const QuickTimer = TemplateQuickTimer.bind({})
QuickTimer.args = MOCK_QUICK_TIMER
QuickTimer.parameters = {
  docs: {
    description: {
      story: 'VideoBlocker with 3-second timer for faster engagement'
    }
  }
}

const TemplateSlowTimer = (args) => config(args)
export const SlowTimer = TemplateSlowTimer.bind({})
SlowTimer.args = MOCK_SLOW_TIMER
SlowTimer.parameters = {
  docs: {
    description: {
      story: 'VideoBlocker with 30-second timer for longer videos'
    }
  }
}

const TemplateNoTimer = (args) => config(args)
export const NoTimer = TemplateNoTimer.bind({})
NoTimer.args = MOCK_NO_TIMER
NoTimer.parameters = {
  docs: {
    description: {
      story: 'VideoBlocker with immediate form display (no timer)'
    }
  }
}

export default {
  title: 'Blocks/Sections/section-video-right',
  component: SectionVideoRight,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Controls the layout position of content and main slot'
    },
    timerDuration: {
      control: { type: 'number', min: 0, step: 1000 },
      description:
        'Duration in milliseconds before form appears (only applies when form prop is provided)'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.overline}
${Rules.title}
${Rules.description}
${Rules.cards}

### VideoBlocker Integration
When the \`form\` prop is provided, the component will use VideoBlocker instead of the standard BaseModal. 
VideoBlocker provides:
- Configurable timer before showing form (default: 10 seconds)
- Protective overlay to hide YouTube branding
- HubSpot form integration
- Click overlay to pause video and show form immediately

### Timer Configuration
The \`timerDuration\` prop allows you to customize when the form appears:
- **Default (10000ms)**: Form appears after 10 seconds
- **Quick (3000ms)**: Form appears after 3 seconds for faster engagement
- **Slow (30000ms)**: Form appears after 30 seconds for longer videos
- **No Timer (0ms)**: Form appears immediately when video starts

### Usage Examples
- **Default**: Standard video modal without form
- **WithVideoBlocker**: Video with form integration (no cards)
- **WithVideoBlockerAndCards**: Video with form integration and cards
- **QuickTimer**: Fast 3-second timer for quick engagement
- **SlowTimer**: 30-second timer for longer content
- **NoTimer**: Immediate form display
        `
      }
    }
  }
}
