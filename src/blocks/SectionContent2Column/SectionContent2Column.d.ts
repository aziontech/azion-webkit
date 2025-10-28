export interface ContentCard {
  overline?: string
  description: string
  image: {
    src: string
    alt: string
  }
}

export interface SectionContent2ColumnProps {
  cards: ContentCard[]
  id?: string
  gridPattern: 'square' | 'dots'
}

export { default } from './SectionContent2Column.vue'
