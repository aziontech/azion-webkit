import SectionCards3Column from '../../blocks/SectionCards3Column/SectionCards3Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionCards3Column',
  component: SectionCards3Column,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' }
      ]
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
        title: 'Bullet benefit',
        description: 'Melhore a **performance**, segurança e escalabilidade dos seus sites e aplicações web com *edge computing*.'
      },
      {
        icon: 'pi pi-folder',
        title: 'Bullet benefit',
        description: 'Deploy aplicações com **latência ultra-baixa** e [documentação completa](https://docs.azion.com) disponível.'
      },
      {
        icon: 'pi pi-folder',
        title: 'Bullet benefit',
        description: 'Escale automaticamente com *infraestrutura global* e **monitoramento em tempo real**.'
      }
    ]
  }
}

export const WithDifferentIcons = {
  args: {
    cards: [
      {
        icon: 'pi pi-bolt',
        title: 'High Performance',
        description: 'Deliver **lightning-fast experiences** with our global edge network and *optimized infrastructure*. [Learn more](https://azion.com/performance)'
      },
      {
        icon: 'pi pi-shield',
        title: 'Enterprise Security',
        description: 'Protect your applications with:\n\n- **Advanced DDoS protection**\n- *WAF security rules*\n- Real-time monitoring'
      },
      {
        icon: 'pi pi-chart-line',
        title: 'Real-time Analytics',
        description: 'Monitor and analyze your application performance with **detailed insights** and *comprehensive metrics*.'
      }
    ]
  }
}

export const TwoCards = {
  args: {
    cards: [
      {
        icon: 'pi pi-code',
        title: 'Developer Friendly',
        description: 'Build and deploy with powerful APIs, CLI tools, and comprehensive documentation'
      },
      {
        icon: 'pi pi-globe',
        title: 'Global Reach',
        description: 'Deploy your applications across our worldwide network of edge locations'
      }
    ]
  }
}
