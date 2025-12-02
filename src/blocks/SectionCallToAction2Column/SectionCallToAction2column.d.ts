export interface CardProps {
  /**
   * Small label text displayed above the title
   */
  overline: string
  /**
   * Main title text
   */
  title: string
  /**
   * Description text in raw markdown format
   */
  descriptionRawMarkdown: string
  /**
   * Link label text for the button
   */
  linkLabel: string
  /**
   * Link URL for the button
   */
  link: string
  /**
   * Link target attribute (e.g., '_self', '_blank')
   * @defaultValue '_self'
   */
  target?: string
}

export interface SectionCallToAction2columnProps {
  /**
   * Banner layout type
   * @defaultValue '70-30'
   */
  type: '70-30'
  /**
   * Optional ID for the section element
   */
  id?: string
  /**
   * CTA card configuration (right/main card)
   */
  cta: CardProps
  /**
   * Content card configuration (left/secondary card)
   */
  content: CardProps
  /**
   * Background pattern configuration
   * @defaultValue { style: 'dots', size: '12px' }
   */
  backgroundPattern: {
    style: 'dots' | 'square'
    size: '12px' | '24px' | '48px'
  }
}

export { default } from './SectionCallToAction2column.vue'
