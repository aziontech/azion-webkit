import TitleSection from '../../templates/titlesection/TitleSection.vue'

export default {
  title: 'Elements/TitleSection',
  component: TitleSection,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible title section component that renders semantic heading tags (h1-h6) with consistent styling.'
      }
    }
  },
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML heading tag to render'
    },
    title: {
      control: { type: 'text' },
      description: 'The title text to display'
    }
  },
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { TitleSection },
  setup() {
    return { args }
  },
  template: '<TitleSection v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  tag: 'h2',
  title: 'This is a Default Title Section'
}

export const H1Title = Template.bind({})
H1Title.args = {
  tag: 'h1',
  title: 'Main Page Title (H1)'
}

export const H2Title = Template.bind({})
H2Title.args = {
  tag: 'h2',
  title: 'Section Title (H2)'
}

export const H3Title = Template.bind({})
H3Title.args = {
  tag: 'h3',
  title: 'Subsection Title (H3)'
}

export const H4Title = Template.bind({})
H4Title.args = {
  tag: 'h4',
  title: 'Sub-subsection Title (H4)'
}

export const H5Title = Template.bind({})
H5Title.args = {
  tag: 'h5',
  title: 'Minor Heading (H5)'
}

export const H6Title = Template.bind({})
H6Title.args = {
  tag: 'h6',
  title: 'Smallest Heading (H6)'
}

export const LongTitle = Template.bind({})
LongTitle.args = {
  tag: 'h2',
  title:
    'This is a Very Long Title That Demonstrates How the Component Handles Extended Text Content and Text Balance'
}

export const ProductTitle = Template.bind({})
ProductTitle.args = {
  tag: 'h1',
  title: 'Azion Edge Platform'
}

export const SectionHeading = Template.bind({})
SectionHeading.args = {
  tag: 'h2',
  title: 'Getting Started with Edge Computing'
}

export const FeatureTitle = Template.bind({})
FeatureTitle.args = {
  tag: 'h3',
  title: 'Real-time Data Processing'
}

export const AllHeadingLevels = () => ({
  components: { TitleSection },
  template: `
    <div class="space-y-6">
      <TitleSection tag="h1" title="H1 - Main Page Title" />
      <TitleSection tag="h2" title="H2 - Section Title" />
      <TitleSection tag="h3" title="H3 - Subsection Title" />
      <TitleSection tag="h4" title="H4 - Sub-subsection Title" />
      <TitleSection tag="h5" title="H5 - Minor Heading" />
      <TitleSection tag="h6" title="H6 - Smallest Heading" />
    </div>
  `
})

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  tag: 'h2',
  title: ''
}
