import Grid, { GridCell } from '../../components/GridPattern'

export default {
  title: 'Components/Rebranding/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 min-h-screen"><story /></div>'
    })
  ],
  argTypes: {
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of rows in the grid'
    },
    columns: {
      control: { type: 'number', min: 1, max: 30 },
      description: 'Number of columns in the grid'
    },
    size: {
      control: { type: 'number', min: 20, max: 60 },
      description: 'Size of each grid cell in pixels'
    },
    pattern: {
      control: 'select',
      options: ['square', 'dots'],
      description: 'Pattern type for the grid'
    }
  }
}

const Template = (args) => ({
  components: { Grid, GridCell },
  setup() {
    return { args }
  },
  template: `
  <div class="p-8">
    <div class="text-white mb-4">
      <h3 class="text-xl font-bold mb-2">Grid Pattern Component</h3>
      <p class="text-neutral-400">Rows: {{ args.rows }}, Columns: {{ args.columns }}, Pattern: {{ args.pattern }}</p>
    </div>
    <div class="h-fit border border-neutral-800 w-fit">
      <Grid v-bind="args">
        <GridCell row="2/5" column="2/5">
          <div class="text-center bg-white">
            <h4 class="text-2xl font-bold mb-0">Content Area</h4>
            <p>This content is overlaid on the grid pattern</p>
          </div>
        </GridCell>
      </Grid>
    </div>
  </div>
`
})

export const SquarePattern = Template.bind({})
SquarePattern.args = {
  rows: 8,
  columns: 15,
  size: 40,
  pattern: 'square'
}

export const DotsPattern = Template.bind({})
DotsPattern.args = {
  rows: 12,
  columns: 30,
  size: 32,
  pattern: 'dots'
}