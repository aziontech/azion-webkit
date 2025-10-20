export interface ProductCard {
  title: string
  description: string
}

export interface SectionProductGridCardsProps {
  cards?: ProductCard[]
  id?: string
}

export { default } from './SectionProductGridCards.vue'
