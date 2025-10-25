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
}

export { default } from './SectionTitle.vue'