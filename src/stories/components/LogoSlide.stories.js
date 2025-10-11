import LogoSlide from '../../components/LogoSlide/LogoSlide.vue'

export default {
  title: 'Components/LogoSlide',
  component: LogoSlide,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of logo items to display in the carousel'
    },
    title: {
      control: { type: 'text' },
      description: 'Title text displayed above the carousel'
    },
    button: {
      control: { type: 'object' },
      description: 'Button configuration object with label and link'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
The LogoSlide component displays a collection of logos in a carousel format using Swiper. Each logo is displayed in a rounded container with proper spacing and responsive design.

### Features
- Swiper carousel layout with grab cursor for smooth navigation
- Responsive design with different slides per view based on screen size
- Opaque gradient overlays on both sides for better visual indication
- Title and button support for enhanced functionality
- Rounded logo containers with neutral background
- Mobile-responsive with hidden button on smaller screens
        `
      }
    }
  }
}

const Template = (args) => ({
  components: { LogoSlide },
  setup() {
    return { args }
  },
  template: `<LogoSlide v-bind="args" class="p-6" />`
})

const mockItems = [
  {
    src: '/assets/mocks/this-logo.png',
    alt: '? Logo'
  },
  {
    src: '/assets/mocks/flutter-logo.png',
    alt: 'flutter Logo'
  },
  {
    src: '/assets/mocks/kotlin-logo.png',
    alt: 'kotlin Logo'
  },
  {
    src: '/assets/mocks/nuxt-logo.png',
    alt: 'Nuxt.js Logo'
  },
  {
    src: '/assets/mocks/svelte-logo.png',
    alt: 'Svelte Logo'
  },
  {
    src: '/assets/mocks/react-logo.png',
    alt: 'react.js Logo'
  },
  {
    src: '/assets/mocks/solid-logo.png',
    alt: 'solid Logo'
  },
  {
    src: '/assets/mocks/redwood-logo.png',
    alt: 'redwood Logo'
  },
  {
    src: '/assets/mocks/vue-logo.png',
    alt: 'vue.js Logo'
  },
  {
    src: '/assets/mocks/solid-logo.png',
    alt: 'SolidJS Logo'
  },
  {
    src: '/assets/mocks/flutter-logo.png',
    alt: 'flutter Logo'
  },
]

export const Default = Template.bind({})
Default.args = {
  items: mockItems,
  title: 'WORKS WITH YOUR STACK / 000™',
  button: {
    label: 'See All Posts',
    link: '/'
  }
}

export const TechnologyStack = Template.bind({})
TechnologyStack.args = {
  items: mockItems.slice(0, 8),
  title: 'TECHNOLOGY PARTNERS',
  button: {
    label: 'View All Partners',
    link: '/partners'
  }
}

