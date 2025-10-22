export interface Card3Column {
  icon: string
  title: string
  description: string
}

export interface SectionCards3ColumnProps {
  cards?: Card3Column[]
  id?: string
}

export { default } from './SectionCards3Column.vue'
