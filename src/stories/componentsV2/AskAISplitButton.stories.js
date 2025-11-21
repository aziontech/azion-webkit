import AskAISplitButton from '../../components/AskAISplitButton/AskAISplitButton.vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

export default {
  title: 'Components/Rebranding/AskAISplitButton',
  component: AskAISplitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story, Toast },
      setup() {
        const toast = useToast()
        // Make toast available globally for the component
        if (typeof window !== 'undefined') {
          window.toast = toast
        }
        return { toast }
      },
      template: `
        <div class="bg-neutral-950 p-6">
          <Toast />
          <story />
        </div>
      `
    })
  ],
  argTypes: {
    pageUrl: {
      control: { type: 'text' },
      description: 'Page URL for the AI assistant'
    },
    lang: {
      control: { type: 'select' },
      options: ['en', 'pt-br', 'es'],
      description: 'Language code for the component',
      defaultValue: 'en'
    }
  }
}

export const Default = {
  args: {
    pageUrl: 'https://www.azion.com/en/documentation/products/pricing',
    lang: 'en'
  }
}

export const Portuguese = {
  args: {
    pageUrl: 'https://docs.azion.com/pt-br',
    lang: 'pt-br'
  }
}

export const Spanish = {
  args: {
    pageUrl: 'https://docs.azion.com/es',
    lang: 'es'
  }
}
