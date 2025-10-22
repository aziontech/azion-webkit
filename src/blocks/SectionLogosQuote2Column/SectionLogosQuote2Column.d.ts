export interface LogoQuote2Column {
  logo: string
  alt?: string
}

export interface SectionLogosQuote2ColumnProps {
  clients?: LogoQuote2Column[]
  quote?: string
  author?: string
  role?: string
  logo?: string
  logoAlt?: string
  id?: string
  title?: string
  link?: string
  linkLabel?: string
}

export { default } from './SectionLogosQuote2Column.vue'
