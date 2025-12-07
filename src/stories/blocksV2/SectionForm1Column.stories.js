import SectionForm1Column from '../../blocks/SectionForm1Column/SectionForm1Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionForm1Column',
  component: SectionForm1Column,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

export const Default = {
  name: 'Default',
  args: {
    id: 'contact-form',
    form: {
      id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      title: 'Contact our team',
      action: 'https://www.azion.com',
      successMessage: 'Thank you for your message!',
      redirect: 'https://www.azion.com/en/thank-you/'
    },
    bottomSpacing: 'mb-24'
  }
}
