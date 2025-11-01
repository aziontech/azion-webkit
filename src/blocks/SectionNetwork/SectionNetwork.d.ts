export interface NetworkListItem {
  /** Small label shown above the main number/text */
  titleup: string
  /** Main number/text displayed prominently */
  title: string
}

export interface NetworkListProps {
  /** Cards displayed to the right/below the map */
  items: NetworkListItem[]
  /** Section title */
  title: string
  /** Section description (supports HTML via v-html) */
  descriptionHtml: string
  /** Uppercase overline tags shown on the right of the header */
  overlines?: string[]
}

export { default } from './SectionNetwork.vue'
