export interface HeroButtonProps {
  label: string
  size?: 'small' | 'large'
  type?: 'primary' | 'secondary' | 'link'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}

export interface HeroProps {
  /**
   * The main heading text for the hero section
   */
  title?: string
  /**
   * The subtitle text displayed below the main heading
   */
  subtitle?: string
  /**
   * Array of button objects to display below the subtitle
   * Note: Maximum of 2 buttons will be displayed (first 2 buttons in the array)
   */
  buttons?: HeroButtonProps[]
  /**
   * Controls the vertical padding/spacing of the hero section
   */
  spacing?: 'none' | 'small' | 'default' | 'large'
  /**
   * Optional ID for the section element
   */
  id?: string
}

export { default } from './Hero.vue'
