import Message from '../../templates/message'

export default {
  title: 'Elements/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the message (custom implementation)',
      options: ['small', 'large'],
      control: { type: 'select' }
    },
    severity: {
      description: 'Severity level of the message',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast'],
      control: { type: 'select' }
    },
    closable: {
      description: 'Whether the message can be closed by the user',
      control: { type: 'boolean' }
    },
    sticky: {
      description: 'When enabled, message is not removed automatically',
      control: { type: 'boolean' }
    },
    life: {
      description: 'Delay in milliseconds to close the message automatically',
      control: { type: 'number' }
    },
    icon: {
      description: 'Display a custom icon for the message',
      control: { type: 'text' }
    },
    customClass: {
      description: 'Custom CSS class to apply to the message',
      control: { type: 'text' }
    }
  }
}

const messageTemplate = `<Message v-bind="args">{{ args.content || 'Default message content' }}</Message>`

const Template = (args) => ({
  components: { Message },
  setup() {
    return { args }
  },
  template: messageTemplate
})

const DefaultProps = {
  severity: 'info',
  closable: false,
  sticky: true,
  life: 3000,
  content: 'This is an informational message.'
}

export const Default = Template.bind({})
Default.args = DefaultProps

export const Success = Template.bind({})
Success.args = {
  ...DefaultProps,
  severity: 'success',
  content: 'Operation completed successfully!'
}

export const Warning = Template.bind({})
Warning.args = {
  ...DefaultProps,
  severity: 'warn',
  content: 'Please be careful with this action.'
}

export const Error = Template.bind({})
Error.args = {
  ...DefaultProps,
  severity: 'error',
  content: 'An error occurred while processing your request.'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...DefaultProps,
  severity: 'secondary',
  content: 'This is a secondary message with neutral styling.'
}

export const Contrast = Template.bind({})
Contrast.args = {
  ...DefaultProps,
  severity: 'contrast',
  content: 'High contrast message for better visibility.'
}

export const Closable = Template.bind({})
Closable.args = {
  ...DefaultProps,
  closable: true,
  content: 'This message can be closed by clicking the X button.'
}

export const AutoClose = Template.bind({})
AutoClose.args = {
  ...DefaultProps,
  severity: 'success',
  sticky: false,
  life: 3000,
  content: 'This message will disappear after 3 seconds.'
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  ...DefaultProps,
  icon: 'pi pi-star',
  content: 'Message with a custom star icon.'
}

export const CustomStyling = Template.bind({})
CustomStyling.args = {
  ...DefaultProps,
  customClass: 'custom-message-demo',
  content: 'This message has custom styling applied.'
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  ...DefaultProps,
  size: 'small',
  content: 'This is a small message.'
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...DefaultProps,
  size: 'large',
  content: 'This is a large message.'
}

// Showcase all severities
const AllSeveritiesTemplate = () => ({
  components: { Message },
  template: `
    <div class="space-y-4">
      <h2 class="text-lg font-semibold mb-4">All Message Severities</h2>
      <Message severity="success">Success: Operation completed successfully!</Message>
      <Message severity="info">Info: Here's some useful information for you.</Message>
      <Message severity="warn">Warning: Please be careful with this action.</Message>
      <Message severity="error">Error: An error occurred while processing your request.</Message>
      <Message severity="secondary">Secondary: This is a secondary message with neutral styling.</Message>
      <Message severity="contrast">Contrast: High contrast message for better visibility.</Message>
    </div>
  `
})

export const AllSeverities = AllSeveritiesTemplate.bind({})
AllSeverities.parameters = {
  docs: {
    source: {
      code: `<Message severity="success">Success message</Message>
<Message severity="info">Info message</Message>
<Message severity="warn">Warning message</Message>
<Message severity="error">Error message</Message>
<Message severity="secondary">Secondary message</Message>
<Message severity="contrast">Contrast message</Message>`
    }
  }
}

// All Sizes Demo
const AllSizesTemplate = () => ({
  components: { Message },
  template: `
    <div class="space-y-4">
      <h2 class="text-lg font-semibold mb-4">Message Sizes</h2>
      <Message size="small" icon="pi pi-send">Small Message</Message>
      <Message icon="pi pi-user">Normal Message</Message>
      <Message size="large" icon="pi pi-check">Large Message</Message>
    </div>
  `
})

export const AllSizes = AllSizesTemplate.bind({})
AllSizes.parameters = {
  docs: {
    source: {
      code: `<Message size="small" icon="pi pi-send">Small Message</Message>
<Message icon="pi pi-user">Normal Message</Message>
<Message size="large" icon="pi pi-check">Large Message</Message>`
    }
  }
}

// Interactive Features Demo
const InteractiveFeaturesTemplate = () => ({
  components: { Message },
  template: `
    <div class="space-y-4">
      <h2 class="text-lg font-semibold mb-4">Interactive Features</h2>
      <Message severity="info" :closable="true">Closable message - Click the X to close</Message>
      <Message severity="success" :sticky="false" :life="2000">Auto-close message (2 seconds)</Message>
      <Message severity="warn" icon="pi pi-exclamation-triangle">Custom icon message</Message>
      <Message severity="info" custom-class="border-2 border-dashed border-orange-500">Custom styled message</Message>
    </div>
  `
})

export const InteractiveFeatures = InteractiveFeaturesTemplate.bind({})
InteractiveFeatures.parameters = {
  docs: {
    source: {
      code: `<Message severity="info" :closable="true">Closable message</Message>
<Message severity="success" :sticky="false" :life="2000">Auto-close message</Message>
<Message severity="warn" icon="pi pi-exclamation-triangle">Custom icon message</Message>
<Message severity="info" custom-class="custom-style">Custom styled message</Message>`
    }
  }
}
