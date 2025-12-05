export interface Card2Column {
  icon?: string
  title: string
  descriptionRawMarkdown: string
}

export interface SectionCards2ColumnProps {
  cards?: Card2Column[]
  id?: string
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  variant?: 'default' | 'outline'
}

declare const SectionCards2Column: {
  new (): {
    $props: SectionCards2ColumnProps
  }
}

export default SectionCards2Column
