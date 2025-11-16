import BigNumbers from '../../blocks/SectionBigNumbersCarousel/BigNumbers.vue'

export default {
  title: 'Blocks/Rebranding/SectionBigNumbersCarousel',
  component: BigNumbers,
  tags: ['autodocs'],
  argTypes: {
    justify: {
      control: { type: 'select' },
      options: ['center', 'start'],
      description: 'Defines the alignment of the big numbers'
    },
    items: {
      control: { type: 'object' },
      description: 'Array of items to display as big numbers'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
The BigNumbers component displays a collection of metrics or statistics in a carousel format using Swiper. Each item includes an icon, a main number/title, and a description.

### Features
- Swiper carousel layout for smooth navigation
- Icon support for visual representation
- Responsive design with proper spacing
- Scrollbar navigation for better UX
        `
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 p-6"><story /></div>'
    })
  ]
}

const Template = (args) => ({
  components: { BigNumbers },
  setup() {
    return { args }
  },
  template: `<BigNumbers v-bind="args" />`
})

const mockItems = [
  {
    icon: 'pi pi-check',
    title: '80%',
    description: 'Better TCO'
  },
  {
    icon: 'pi pi-shield',
    title: '80%',
    description: 'Faster Applications'
  },
  {
    icon: 'pi pi-code',
    title: '100%',
    description: 'Availability, backed by an SLA'
  },
  {
    icon: 'pi pi-stopwatch',
    title: '80k+',
    description: 'Processed requests per second at peak load'
  }
]

export const Default = Template.bind({})
Default.args = {
  items: mockItems,
  justify: 'center'
}
