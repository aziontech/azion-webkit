import GridPattern from './GridPattern.vue'
import GridCell from './GridCell.vue'

// Export as named exports
export { GridPattern, GridCell }

// Export as default with static properties
const Grid = GridPattern
Grid.Cell = GridCell

export default Grid
