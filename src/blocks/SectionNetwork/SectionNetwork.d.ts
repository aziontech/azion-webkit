export interface NetworkListItem {
  /** Small label shown above the main number/text */
  titleup: string
  /** Main number/text displayed prominently */
  title: string
}

export interface SectionNetworkProps {
  /** Cards displayed to the right/below the map */
  items: NetworkListItem[]
  /** Section title */
  title: string
  /** Section description in raw markdown format (will be parsed and rendered) */
  descriptionRawMarkdown: string
  /** Uppercase overline tags shown on the right of the header */
  overlines?: string[]
}

export { default } from './SectionNetwork.vue'
