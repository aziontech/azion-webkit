import Hero from '../../blocks/Hero/Hero.vue'

export default {
  title: 'Blocks/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The main heading text for the hero section'
    },
    subtitle: {
      control: { type: 'text' },
      description: 'The subtitle text displayed below the main heading'
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button objects to display below the subtitle'
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'default', 'large'],
      description: 'Controls the vertical padding/spacing of the hero section'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A simple hero component with a title and subtitle. Perfect for landing pages and section headers.'
      }
    }
  }
}

const Template = (args) => ({
  components: { Hero },
  setup() {
    return { args }
  },
  template: `
    <div  class="bg-black">
        <Hero v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Designed to Scale your business.',
  subtitle: 'From vibing to enterprise, pay as your business grow.'
}

export const WithSingleButton = Template.bind({})
WithSingleButton.args = {
  title: 'Ready to Scale?',
  subtitle: 'Start your free trial and see the difference.',
  buttons: [
    {
      label: 'View Demo',
      href: '#',
      type: 'primary',
      icon: 'pi pi-angle-right',
      size: 'small'
    }
  ]
}

export const WithTwoButtons = Template.bind({})
WithTwoButtons.args = {
  title: 'Get Started Today',
  subtitle: 'Join thousands of developers building amazing applications.',
  buttons: [
    {
      label: 'View Demo',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-angle-right'
    },
    {
      label: 'Start now',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-angle-right'
    }
  ]
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  title: 'Compact Hero',
  subtitle: 'This hero has no vertical padding.',
  spacing: 'none'
}

export const SmallSpacing = Template.bind({})
SmallSpacing.args = {
  title: 'Small Spacing Hero',
  subtitle: 'This hero has small vertical padding.',
  spacing: 'small',
  buttons: [
    {
      label: 'Get Started',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-angle-right'
    }
  ]
}

export const DefaultSpacing = Template.bind({})
DefaultSpacing.args = {
  title: 'Default Spacing Hero',
  subtitle: 'This hero has the default vertical padding.',
  spacing: 'default',
  buttons: [
    {
      label: 'Learn More',
      href: '#',
      type: 'secondary',
      size: 'small',
      icon: 'pi pi-angle-right'
    }
  ]
}

export const LargeSpacing = Template.bind({})
LargeSpacing.args = {
  title: 'Large Spacing Hero',
  subtitle: 'This hero has large vertical padding for maximum impact.',
  spacing: 'large',
  buttons: [
    {
      label: 'View Demo',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-angle-right'
    },
    {
      label: 'Contact Sales',
      href: '#',
      type: 'secondary',
      size: 'small',
      icon: 'pi pi-angle-right'
    }
  ]
}

