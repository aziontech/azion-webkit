import Community from '../../templates/community'

export default {
  title: '2. Components Group/Community',
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
