export interface ButtonProps {
  /**
   * Button label text
   */
  label: string
  /**
   * Button URL
   */
  href?: string
  /**
   * Button variant/type
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'linkSecondary'
    | 'linkNeutral'
    | 'linkViolet'
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'linkSecondary'
    | 'linkNeutral'
    | 'linkViolet'
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button icon (PrimeVue icon class)
   */
  icon?: string
}

export interface SectionTitleProps {
  /**
   * Small label text displayed above the title
   */
  overline?: string
  /**
   * Main title text displayed prominently
   */
  title: string
  /**
   * Description text displayed next to or below the title
   */
  description?: string
  /**
   * Alignment of the section content
   * @defaultValue 'default'
   */
  align?: 'default' | 'center'
  /**
   * HTML tag for the title element
   * @defaultValue 'h2'
   */
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * Bottom spacing margin
   * @defaultValue 'mb-24'
   */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /**
   * Array of button objects to display below the description
   */
  buttons?: ButtonProps[]
}

export { default } from './SectionTitle.vue'
