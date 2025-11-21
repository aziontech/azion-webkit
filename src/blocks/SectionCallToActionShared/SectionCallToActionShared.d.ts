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
}

export interface SectionCallToActionSharedProps {
  /**
   * Banner layout type
   * @defaultValue '2-col-70-30'
   */
  type: '2-col-70-30' | '1-col' | '1-col-short-orange' | '1-col-short-black'
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

export { default } from './SectionCallToActionShared.vue'
