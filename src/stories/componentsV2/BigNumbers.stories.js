import BigNumbers from '../../components/bignumbers/BigNumbers.vue'

export default {
  title: 'Components/Rebranding/BigNumbers',
  component: BigNumbers,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of stat objects with title, description, and icon',
      table: {
        type: { summary: 'Array<{title: string, description: string, icon: string}>' },
        required: true
      }
    },
    justify: {
      control: { type: 'select' },
      options: ['center', 'start'],
      description: 'Content justification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# BigNumbers Component

A carousel component for displaying impressive statistics and metrics with large numbers.

## Features
- **Swiper Integration**: Smooth horizontal scrolling carousel
- **Responsive Breakpoints**: Adapts slides per view based on screen size
- **Icon Support**: PrimeVue icons in circular badges
- **Large Typography**: 80px numbers for maximum impact
- **Scrollbar**: Draggable scrollbar for navigation
- **Grab Cursor**: Interactive cursor feedback
- **Border Design**: Top border on desktop (md+)

## Responsive Behavior
- **Mobile**: 1 slide per view
- **Tablet (768px+)**: 1.5 slides per view
- **Desktop (1280px+)**: 2.5 slides per view
- **Large (1440px+)**: 3.15 slides per view

## Item Structure
Each item requires:
- \`title\`: Large number or stat (e.g., "99%", "1M+")
- \`description\`: Explanatory text (uppercase, tracking-widest)
- \`icon\`: PrimeVue icon class (e.g., "pi pi-bolt")

## Usage

\`\`\`vue
<BigNumbers 
  :items="[
    {
      title: '99.9%',
      description: 'Uptime Guarantee',
      icon: 'pi pi-check-circle'
    },
    {
      title: '150+',
      description: 'Edge Locations',
      icon: 'pi pi-globe'
    }
  ]"
  justify="center"
/>
\`\`\`

## Design Notes
- Proto Mono font for numbers and descriptions
- Light text (#EDE8E8) on dark background
- Orange border (#F3652B) on icon circles
- Scrollbar: #2B2B2B background, #EDE8E8 drag handle
- Top border: 2px #2B2B2B on desktop
- Icon circle: 56px mobile, 64px desktop
        `
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' }
      ]
    }
  }
}

export const Default = {
  args: {
    items: [
      {
        title: '99.9%',
        description: 'Uptime Guarantee',
        icon: 'pi pi-check-circle'
      },
      {
        title: '150+',
        description: 'Edge Locations Worldwide',
        icon: 'pi pi-globe'
      },
      {
        title: '< 20ms',
        description: 'Average Latency',
        icon: 'pi pi-bolt'
      }
    ],
    justify: 'center'
  }
}
