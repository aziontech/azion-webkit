export interface ButtonProps {
  /**
   * Button label text
   */
  label: string
  /**
   * Button link URL
   */
  href: string
}

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
   * Button configuration
   */
  button: ButtonProps
}

export interface SectionCallToActionProps {
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
   * CTA card configuration (right/main card)
   */
  cta: CardProps
  /**
   * Content card configuration (left/secondary card)
   */
  content: CardProps
}

export { default } from './SectionCallToAction.vue'