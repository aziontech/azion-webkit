import GridCardContainer from '../../blocks/GridCardContainer/GridCardContainer.vue'

export default {
  title: 'Blocks/Rebranding/GridCardContainer',
  component: GridCardContainer,
  tags: ['autodocs']
}

export const Default = {
  args: {
    cards: [
      {
        title: 'Edge Functions',
        description: 'Run serverless functions at the edge',
        icon: 'pi pi-bolt'
      },
      {
        title: 'Edge Application',
        description: 'Deploy applications globally',
        icon: 'pi pi-globe'
      },
      {
        title: 'Edge Firewall',
        description: 'Protect your applications',
        icon: 'pi pi-shield'
      }
    ]
  }
}
