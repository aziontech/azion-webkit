import LinkButton from '../../templates/linkbutton'

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    target: {
      options: ['_blank', '_self'],
      control: { type: 'radio' },
      description: 'Attribute to specify where to open linked document'
    },
    icon: {
      description: 'Icon class string. Example: pi pi-check'
    },
    iconPos: {
      description: 'Define icon position',
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    customIconStyle: {
      description: 'To change CSS properties of the icon by style attribute'
    },
    outlined: {
      description: 'Outlined buttons display a border without a background initially.'
    },
    text: {
      description: 'Text buttons are displayed as textual elements.'
    },
    severity: {
      description: 'The severity property defines the variant of a button.',
      options: ['secondary', 'info'],
      control: { type: 'radio' }
    },
    size: {
      description: 'Button provides small size as alternative to the standard medium.',
      options: ['small', 'medium'],
      control: { type: 'radio' }
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    target: '_self'
  }
}

export const withIcon = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    icon: 'pi pi-check',
    iconPos: 'right'
  }
}

export const text = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    text: true
  }
}

export const secondary = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    severity: 'secondary'
  }
}

export const info = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    severity: 'info'
  }
}

export const small = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    size: 'small'
  }
}

export const Outlined = {
  args: {
    label: 'link button text',
    link: 'https://www.azion.com/en/',
    outlined: true
  }
}
