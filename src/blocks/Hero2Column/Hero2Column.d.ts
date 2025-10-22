export interface Hero2ColumnButtonProps {
  label: string
  size?: 'small' | 'large'
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}

export interface Hero2ColumnProps {
  overline?: string
  title: string
  subtitle?: string
  buttons?: Hero2ColumnButtonProps[]
  image?: string
  id?: string
}

export { default } from './Hero2Column.vue'
