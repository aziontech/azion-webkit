import SectionMigratedClients from '../../blocks/SectionMigratedClients'

export default {
  title: 'Blocks/Rebranding/SectionMigratedClients',
  component: SectionMigratedClients,
  tags: ['autodocs'],
  argTypes: {
    firstCard: {
      description: 'Configuration object for the first MigratedClientsCard',
      control: 'object'
    },
    secondCard: {
      description: 'Configuration object for the second MigratedClientsCard',
      control: 'object'
    }
  }
}

const Template = (args) => ({
  components: { SectionMigratedClients },
  setup() {
    return { args }
  },
  template: `
    <SectionMigratedClients v-bind="args">
      <template #first-card-content>
        <div class="flex flex-wrap gap-6 items-center">
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 1</div>
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 2</div>
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 3</div>
        </div>
      </template>
      <template #second-card-content>
        <div class="flex flex-wrap gap-6 items-center">
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 4</div>
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 5</div>
          <div class="w-24 h-12 bg-neutral-700 rounded flex items-center justify-center text-white text-xs">Logo 6</div>
        </div>
      </template>
    </SectionMigratedClients>
  `
})

export const Default = Template.bind({})
Default.args = {
  firstCard: {
    text: 'Before Migration',
    logos: [],
    link: '#before'
  },
  secondCard: {
    text: 'After Migration',
    logos: [],
    link: '#after'
  }
}

export const WithCustomLabels = Template.bind({})
WithCustomLabels.args = {
  firstCard: {
    text: 'Legacy Platform',
    logos: [],
    link: '#legacy'
  },
  secondCard: {
    text: 'Azion Platform',
    logos: [],
    link: '#azion'
  }
}

const TemplateWithRealLogos = (args) => ({
  components: { SectionMigratedClients },
  setup() {
    return { args }
  },
  template: `
    <SectionMigratedClients v-bind="args">
      <template #first-card-content>
        <div class="flex flex-wrap gap-8 items-center justify-center">
          <img src="https://placehold.co/120x60/333/fff?text=Client+A" alt="Client A" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/333/fff?text=Client+B" alt="Client B" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/333/fff?text=Client+C" alt="Client C" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/333/fff?text=Client+D" alt="Client D" class="h-12 object-contain" />
        </div>
      </template>
      <template #second-card-content>
        <div class="flex flex-wrap gap-8 items-center justify-center">
          <img src="https://placehold.co/120x60/F3652B/fff?text=Client+E" alt="Client E" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/F3652B/fff?text=Client+F" alt="Client F" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/F3652B/fff?text=Client+G" alt="Client G" class="h-12 object-contain" />
          <img src="https://placehold.co/120x60/F3652B/fff?text=Client+H" alt="Client H" class="h-12 object-contain" />
        </div>
      </template>
    </SectionMigratedClients>
  `
})

export const WithImages = TemplateWithRealLogos.bind({})
WithImages.args = {
  firstCard: {
    text: 'Previous Clients',
    logos: [],
    link: '#previous'
  },
  secondCard: {
    text: 'Migrated to Azion',
    logos: [],
    link: '#migrated'
  }
}

export const WithoutLinks = Template.bind({})
WithoutLinks.args = {
  firstCard: {
    text: 'Old Infrastructure',
    logos: []
  },
  secondCard: {
    text: 'New Infrastructure',
    logos: []
  }
}
