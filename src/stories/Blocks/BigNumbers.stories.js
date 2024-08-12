import BigNumbers from '../../templates/bignumbers'

export default {
  title: 'Blocks/Big Numbers',
  component: BigNumbers,
  tags: ['autodocs'],
  argTypes: {
    items: {
      type: Array,
      required: true
    }
  }
}

export const Default = {
  args: {
    items: [
      {
        "icon": "pi pi-verified",
        "title": "80%",
        "description": "Better TCO"
      },
      {
        "icon": "pi pi-shield",
        "title": "100%",
        "description": "Availability, backed by an SLA"
      },
      {
        "icon": "pi pi-code",
        "title": "10x",
        "description": "Faster Applications"
      },
      {
        "icon": "pi pi-stopwatch",
        "title": "15ms",
        "description": "Response Time"
      }
    ],
  }
}
