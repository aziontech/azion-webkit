export interface SectionImageContent2ColumnProps {
  title?: string
  bullets?: string[]
  image: string
  alt?: string
  height?: 'default' | 'large'
  variant?: 'titleBulletsImage' | 'titleImage' | 'imageOnly'
  fullWidthImage?: boolean
}

export { default } from './SectionImageContent2Column.vue'
