export interface ContentCard {
  /**
   * Small label text displayed above the description
   */
  overline?: string
  /**
   * Description text (supports HTML)
   */
  description: string
  /**
   * Image configuration
   */
  image: {
    src: string
    alt: string
  }
}

export interface SectionContent2ColumnProps {
  /**
   * Array of content cards (typically 2 cards)
   */
  cards: ContentCard[]
  /**
   * Optional HTML id attribute
   */
  id?: string
  /**
   * Bottom spacing class
   * @defaultValue 'mb-24'
   */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /**
   * Background pattern configuration
   * @defaultValue { style: 'dots', size: '48px' }
   */
  backgroundPattern: {
    style: 'dots' | 'square'
    size: '12px' | '24px' | '48px'
  }
}

export { default } from './SectionContent2Column.vue'
