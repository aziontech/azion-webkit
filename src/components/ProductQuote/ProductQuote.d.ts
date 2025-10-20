export interface ProductQuoteButtonProps {
  label: string
  size?: 'small' | 'large'
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}

export interface ProductQuoteProps {
  quote: string
  author?: string
  role?: string
  company?: string
  logo?: string
  logoAlt?: string
  logoClass?: string
  buttons?: ProductQuoteButtonProps[]
  spacing?: 'none' | 'small' | 'default' | 'large'
  id?: string
}

export { default } from './ProductQuote.vue'
