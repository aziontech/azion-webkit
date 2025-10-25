export interface SectionTitleProps {
  /**
   * Button label text displayed at the bottom of the card
   */
  label?: string
  /**
   * The main title text displayed at the top of the card
   */
  title: string
  /**
   * The description text displayed below the title with hover animation
   */
  description: string
  /**
   * Optional URL to make the card clickable. When provided, the card becomes a link with hover effects
   */
  href?: string
  /**
   * Icon class name to display at the top of the card (e.g., 'pi pi-cloud', 'pi pi-shield')
   */
  icon?: string
  /**
   * Link target attribute (only applies when href is provided)
   * @defaultValue '_self'
   */
  target?: '_blank' | '_self'
}

export { default } from './SectionTitle.vue'
