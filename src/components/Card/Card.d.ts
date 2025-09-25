export interface CardProps {
  /**
   * Optional label for the card (legacy prop)
   */
  label?: string
  /**
   * The main title text displayed at the top of the card
   */
  title?: string
  /**
   * The description text displayed below the title
   */
  description?: string
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
   * Call-to-action text displayed below the description with a button
   */
  cta?: string
}

export { default } from './Card.vue'
