import type { CardProps } from '../../components/Card/Card.d.ts'

export interface GridSection {
  title: string
  id: string
  cards: CardProps[]
}

export interface GridCardContainerWithToggleProps {
  mainSections: GridSection[]
  alternativeSections: GridSection[]
  mainTitle?: string
  mainLabel?: string
  alternativeLabel?: string
  toggleDescription?: string
  defaultView?: 'main' | 'alternative'
}
