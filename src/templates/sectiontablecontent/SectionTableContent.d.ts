export interface TableData {
  title?: string
  columns: string[]
  rows: string[]
  data: string[][]
}

export interface SectionTableContentProps {
  id?: string
  isContentCentralized?: boolean
  overline?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
  description?: string
  descriptionRawHtml?: string
  table: TableData
  margin?: 'none' | 'small' | 'default' | 'large'
}

declare const SectionTableContent: {
  new (): {
    $props: SectionTableContentProps
  }
}

export default SectionTableContent
