export interface ProductCard {
  title: string
  description: string
  href?: string
  label?: string
  target?: '_blank' | '_self'
}

export interface SectionProductGridCardsProps {
  title?: string
  description?: string
  link?: string
  linkLabel?: string
  cards?: ProductCard[]
  id?: string
}

export { default } from './SectionProductGridCards.vue'
