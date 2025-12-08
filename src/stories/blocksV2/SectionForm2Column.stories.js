import SectionForm2Column from '../../blocks/SectionForm2Column/SectionForm2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionForm2Column',
  component: SectionForm2Column,
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
  name: '50x50 Layout',
  args: {
    id: 'contact-form-2col',
    form: {
      id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      title: 'Contact our team',
      action: 'https://www.azion.com',
      successMessage: 'Thank you for your message!',
      redirect: 'https://www.azion.com/en/thank-you/'
    },
    type: '50x50',
    title: 'Get in touch',
    descriptionRawMarkdown:
      "Fill out the form to get in touch with our team. We'll respond as soon as possible.",
    bottomSpacing: 'mb-24'
  }
}

export const SeventyThirty = {
  name: '70x30 Layout',
  args: {
    id: 'contact-form-70-30',
    form: {
      id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      title: 'Request a demo',
      action: 'https://www.azion.com',
      successMessage: 'Thank you for your interest!',
      redirect: 'https://www.azion.com/en/thank-you/'
    },
    type: '70x30',
    title: 'Experience Azion Platform',
    descriptionRawMarkdown:
      '**See how Azion can transform your edge computing strategy.**\n\nOur platform provides:\n\n- **Edge Computing** at scale\n- **Global CDN** with low latency\n- **Security** built-in\n- **Developer-friendly** APIs',
    bottomSpacing: 'mb-24'
  }
}

export const CustomTemplate = {
  name: 'Custom Template',
  args: {
    id: 'contact-form-custom',
    form: {
      id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      title: 'Join our newsletter',
      action: 'https://www.azion.com',
      successMessage: 'You have been successfully subscribed!',
      redirect: ''
    },
    type: '50x50',
    template: 'custom-template',
    bottomSpacing: 'mb-24'
  },
  render: (args) => ({
    components: { SectionForm2Column },
    setup() {
      return { args }
    },
    template: `
      <SectionForm2Column v-bind="args">
        <template #content>
          <div class="flex flex-col justify-center md:sticky top-20 gap-5 shrink-0 w-full p-6 md:p-12 md:min-h-full">
            <h2 class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 w-full">
              Custom Content
            </h2>
            <div class="text-base font-sora font-normal leading-[1.4] tracking-tight text-neutral-400">
              <p>This is custom content using the slot. You can add any HTML or components here.</p>
            </div>
          </div>
        </template>
      </SectionForm2Column>
    `
  })
}
