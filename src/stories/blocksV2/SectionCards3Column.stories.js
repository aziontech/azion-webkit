import SectionCards3Column from '../../blocks/SectionCards3Column/SectionCards3Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionCards3Column',
  component: SectionCards3Column,
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
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

export const Default = {
  args: {
    cards: [
      {
        icon: 'pi pi-folder',
        title: 'Bullet benefit Bullet benefit Bullet benefit',
        descriptionRawMarkdown:
          'Melhore a **performance**, segurança e escalabilidade dos seus sites e aplicações web com *edge computing*.'
      },
      {
        icon: 'pi pi-folder',
        title: 'Bullet benefit',
        descriptionRawMarkdown:
          'Deploy aplicações com **latência ultra-baixa** e [documentação completa](https://docs.azion.com) disponível.'
      },
      {
        icon: 'pi pi-folder',
        title: 'Bullet benefit',
        descriptionRawMarkdown:
          'Escale automaticamente com *infraestrutura global* e **monitoramento em tempo real**.'
      }
    ]
  }
}
