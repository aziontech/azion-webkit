import type { CardProps } from '../../components/Card/Card.d.ts'

export interface GridCardContainerProps {
  /**
   * Array of card objects to display in the grid
   */
  cards: CardProps[]
  /**
   * Title text displayed above the grid
   */
  title: string
}
