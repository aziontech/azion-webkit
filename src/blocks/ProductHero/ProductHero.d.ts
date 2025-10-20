export interface ProductHeroButtonProps {
  label: string
  size?: 'small' | 'large'
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}

export interface ProductHeroProps {
  overline?: string
  title: string
  subtitle?: string
  buttons?: ProductHeroButtonProps[]
  image?: string
  id?: string
}

export { default } from './ProductHero.vue'
