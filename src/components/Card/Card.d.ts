export interface CardProps {
  /**
   * Button label text displayed at the bottom of the card
   */
  label?: string
  /**
   * The main title text displayed at the top of the card
   */
  title?: string
  /**
   * The description text displayed below the title (plain text)
   */
  description?: string
  /**
   * The description in raw markdown format (will be parsed to HTML)
   */
  descriptionRawMarkdown?: string
  /**
   * Optional URL to make the card clickable. When provided, the card becomes a link with hover effects
   */
  href?: string
  /**
   * Visual theme for the card styling
   * @defaultValue 'default'
   */
  theme?: 'default'
  /**
   * Link target attribute (only applies when href is provided)
   * @defaultValue '_self'
   */
  target?: '_blank' | '_self'
  /**
   * Card variant style
   * @defaultValue 'default'
   */
  variant?: 'default' | 'outline'
  /**
   * Optional PrimeVue icon class (e.g., 'pi pi-check')
   */
  icon?: string
}

export { default } from './Card.vue'
