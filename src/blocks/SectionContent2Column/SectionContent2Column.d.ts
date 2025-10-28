export interface ContentCard {
  overline?: string
  description: string
  image: {
    src: string
    alt: string
  }
}

export interface SectionContentImage2ColumnProps {
  cards: ContentCard[]
  id?: string
  gridPattern: 'square' | 'dots'
}

export { default } from './SectionContentImage2Column.vue'
