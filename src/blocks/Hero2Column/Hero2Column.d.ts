export interface Hero2ColumnButtonProps {
  /**
   * Button label text
   */
  label: string
  /**
   * Button size variant
   * @defaultValue 'small'
   */
  size?: 'small' | 'large'
  /**
   * Button type/style variant
   * @defaultValue 'primary'
   */
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  /**
   * Button link URL
   */
  href: string
  /**
   * PrimeIcons icon class (e.g., 'pi pi-chevron-right')
   */
  icon?: string
  /**
   * Button theme variant
   * @defaultValue 'light'
   */
  theme?: string
  /**
   * Custom CSS classes
   */
  customClass?: string
}

export interface Hero2ColumnProps {
  /**
   * Small text displayed above the title
   */
  overline?: string
  /**
   * Main hero title
   */
  title: string
  /**
   * Description text in raw markdown format
   */
  descriptionRawMarkdown?: string
  /**
   * Array of button configurations (max 3 displayed)
   */
  buttons?: Hero2ColumnButtonProps[]
  /**
   * Hero image URL
   */
  image?: string
  /**
   * Optional HTML id attribute
   */
  id?: string
  /**
   * Bottom spacing class
   * @defaultValue 'mb-24'
   */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /**
   * Background pattern configuration
   * @defaultValue { style: 'dots', size: '48px' }
   */
  backgroundPattern: {
    style: 'dots' | 'square'
    size: '12px' | '24px' | '48px'
  }
}

export { default } from './Hero2Column.vue'
