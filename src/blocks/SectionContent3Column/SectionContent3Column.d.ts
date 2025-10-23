export interface ContentCard {
  title: string
  description: string
}

export interface SectionContent3ColumnProps {
  cards: ContentCard[]
  id?: string
  gridPattern: 'square' | 'dots'
}

export { default } from './SectionContent3Column.vue'
