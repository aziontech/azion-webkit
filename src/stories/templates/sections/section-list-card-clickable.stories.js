import Container from '../../../templates/container'
import SectionListCardClickable from '../../../templates/sectionlistcardclickable'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-list-card-clickable',
  component: Container, SectionListCardClickable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.cards}

### Card Properties
- Each card requires: title, description, link, and action properties
- Action object should contain a label property (can be empty string)
- Cards are displayed in a responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
        `
      }
    }
  },
  argTypes: {
    overline: {
      control: 'text',
      description: 'Small text above the title'
    },
    title: {
      control: 'text',
      description: 'Main section title'
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML tag for the title'
    },
    description: {
      control: 'text',
      description: 'Section description text'
    },
    descriptionRawHtml: {
      control: 'text',
      description: 'Description with HTML content (overrides description)'
    },
    cards: {
      control: 'object',
      description: 'Array of card objects'
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionListCardClickable
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionListCardClickable v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)

export const Default = Template.bind({})
Default.args = {
  overline: 'Getting Started',
  title: 'Choose Your Path',
  titleTag: 'h2',
  description: 'Select from our available options to get started with Azion.',
  cards: [
    {
      title: 'Documentation',
      description: 'Complete guides and API reference',
      link: 'https://www.azion.com/docs/',
      action: {
        label: ''
      }
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      link: 'https://www.azion.com/tutorials/',
      action: {
        label: ''
      }
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      link: 'https://www.azion.com/community/',
      action: {
        label: ''
      }
    },
    {
      title: 'Documentation',
      description: 'Complete guides and API reference',
      link: 'https://www.azion.com/docs/',
      action: {
        label: ''
      }
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      link: 'https://www.azion.com/tutorials/',
      action: {
        label: ''
      }
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      link: 'https://www.azion.com/community/',
      action: {
        label: ''
      }
    }
  ]
}
