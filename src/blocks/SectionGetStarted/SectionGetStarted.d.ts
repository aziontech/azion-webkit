export interface GetStartedButton {
  label: string
  href: string
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal' | 'linkSecondary'
  theme?: 'dark' | 'light'
}

export interface SectionGetStartedProps {
  title?: string
  subtitle?: string
  buttons?: GetStartedButton[]
  id?: string
}

export { default } from './SectionGetStarted.vue'
