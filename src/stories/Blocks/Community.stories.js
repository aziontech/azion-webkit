import Community from '../../templates/community'

export default {
  title: '1. Blocks/Community',
  component: Community,
  tags: ['autodocs'],
  argTypes: {
    lang: {
      options: ['en', 'es', 'pt-br'],
      control: { type: 'radio' },
    }
  },
}

export const Default = {}
