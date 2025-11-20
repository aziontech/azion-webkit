export interface SectionImageContent2ColumnProps {
  /**
   * Section title text
   */
  title?: string
  /**
   * Description text in raw markdown format
   */
  descriptionRawMarkdown?: string
  /**
   * Image URL (required)
   */
  image: string
  /**
   * Image alt text
   */
  alt?: string
  /**
   * Layout distribution: '50/50' = equal split, '30/70' = 1/3 text + 2/3 image
   * @defaultValue '50/50'
   */
  layout?: '50/50' | '30/70'
  /**
   * Controls block order: true = image first, false = text first
   * @defaultValue false
   */
  inverted?: boolean
  /**
   * Bottom spacing class
   * @defaultValue 'mb-24'
   */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /**
   * Background pattern configuration
   * @defaultValue { style: 'dots', size: '24px' }
   */
  backgroundPattern: {
    style: 'dots' | 'square'
    size: '12px' | '24px' | '48px'
  }
}

export { default } from './SectionImageContent2Column.vue'
