export interface GridPatternProps {
  rows: number
  columns: number
  size?: number
  pattern?: 'square' | 'dots'
}

export interface GridCellProps {
  row: number
  column: number
}

export { default as GridPattern } from './GridPattern.vue'
export { default as GridCell } from './GridCell.vue'
