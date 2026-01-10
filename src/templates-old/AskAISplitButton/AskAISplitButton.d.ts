export interface AskAISplitButtonProps {
  lang: 'en' | 'pt-br' | 'es'
}

export interface AskAISplitButtonMenuItem {
  label: string
  description: string
  icon: string
  command: () => void
}

export { default } from './AskAISplitButton.vue'
