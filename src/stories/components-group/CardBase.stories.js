import CardBase from '../../templates/cardbase'

export default {
  title: 'Components Group/CardBase',
  component: CardBase,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      description: 'Defina o tamanho do padding interno do card',
      options: ['compact', 'relaxed', 'base'],
      control: { type: 'radio' }
    },
    grid: {
      description:
        'Se true e o card estiver em um layout de grid ou flexbox, ele se estenderá até preencher completamente o espaço disponível na div.'
    },
    backgroundColor: {
      description: 'Defina o estilo de background do card',
      options: ['outlined', 'highlighted', 'shape', 'default'],
      control: { type: 'radio' }
    },
    hover: {
      description: 'Defina o estilo de hover do card',
      options: ['default', 'outlined', 'slide-up'],
      control: { type: 'radio' }
    },
    pt: {
      description: 'Styles  Pass Through'
    }
  }
}

const cardTemplate = `<CardBase>
                        <template #header>
                          <div class="bg-gray-100 p-2 rounded"> [SLOT HEADER] Container para cabeçalho com padding padrão </div>
                        </template>
                        <template #content>
                          <div class="bg-gray-100 p-2 rounded"> [SLOT CONTENT] Container de conteúdo, possue gaps e paddings com padrões </div>
                        </template>
                        <template #actions>
                          <div class="bg-gray-100 p-2 rounded"> [SLOT ACTIONS] Container utilizado para botões, com espaçamento "between" com o conteúdo de conteudo, possue padding e gaps por padrão</div>
                        </template>
                        <template #content-raw>
                          <div class="bg-gray-100 p-2 rounded">[SLOT CONTENT-RAW] Container de conteúdo sem padrão, utilizado para variações não previstas  </div>
                        </template>
                      </CardBase>`

const Template = (args) => ({
  components: { CardBase },
  setup() {
    return { args }
  },
  template: cardTemplate
})

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = Template.bind({})
