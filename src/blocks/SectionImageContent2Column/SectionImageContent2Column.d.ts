export interface SectionImageContent2ColumnProps {
  title?: string
  /** Markdown content that will be converted to HTML (supports headers, bold, italic, links, line breaks) */
  descriptionRawMarkdown?: string
  image: string
  alt?: string
  backgroundStyle?: 'grid' | 'dots'
  /** Controls layout distribution: true = 50/50 split, false = 1/3 text + 2/3 image */
  fiftyFifty?: boolean
  /** Controls block order: true = image first, false = text first (default) */
  inverted?: boolean
}

export { default } from './SectionImageContent2Column.vue'