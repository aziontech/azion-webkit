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
  type: '2-col-70-30' | '1-col' | '1-col-short' | '1-col-short-orange'
  /**
   * Optional ID for the section element
   */
  id?: string
  /**
   * Background pattern style for the CTA card
   * @defaultValue 'dots'
   */
  backgroundStyle?: 'dots' | 'square'
  /**
   * CTA card configuration (right/main card)
   */
  cta: CardProps
  /**
   * Content card configuration (left/secondary card)
   */
  content: CardProps
}

export { default } from './SectionCallToActionShared.vue'
