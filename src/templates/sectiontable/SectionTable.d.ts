export interface TableData {
  title?: string
  htmlTable: string
}

export interface SectionTableProps {
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

declare const SectionTable: {
  new (): {
    $props: SectionTableProps
  }
}

export default SectionTable
