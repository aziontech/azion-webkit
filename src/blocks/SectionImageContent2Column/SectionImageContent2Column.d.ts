export interface SectionImageContent2ColumnProps {
  title?: string
  /** Markdown content that will be converted to HTML (supports headers, bold, italic, links, line breaks) */
  descriptionRawMarkdown?: string
  image: string
  alt?: string
  height?: 'default' | 'large'
  variant?: 'titleBulletsImage' | 'titleImage' | 'imageOnly'
  fullWidthImage?: boolean
}

export { default } from './SectionImageContent2Column.vue'
