export interface CallToActionButton {
  label: string
  href: string
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal' | 'linkSecondary'
  theme?: 'dark' | 'light'
}

export interface SectionCallToActionProps {
  title?: string
  subtitle?: string
  buttons?: CallToActionButton[]
  id?: string
}

export { default } from './SectionCallToAction.vue'
