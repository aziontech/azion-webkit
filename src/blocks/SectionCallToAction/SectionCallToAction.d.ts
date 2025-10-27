export interface CallToActionButton {
  label: string
  href: string
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal' | 'linkSecondary'
  theme?: 'dark' | 'light'
}

export interface SectionCallToActionProps {
  id?: string
  cta?: {
    overline?: string
    title?: string
    descriptionRawMarkdown?: string
    linkLabel?: string
    link?: string
  }
  content?: {
    overline?: string
    descriptionRawMarkdown?: string
    title?: string
  }
}

export { default } from './SectionCallToAction.vue'
