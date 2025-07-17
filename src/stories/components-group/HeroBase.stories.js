import HeroBlockBase from '../../templates/herobase'
import LinkButton from '../../templates/linkbutton'

export default {
  title: 'Components Group/HeroBase',
  component: HeroBlockBase,
  tags: ['autodocs'],
  argTypes: {
    bannerNews: {
      description:
        'Banner News props - check it out Components Group/Banner. Se verdadeiro exibe o news banner'
    },
    isReverse: {
      description:
        'Muda a orientação dos blocos do hero. Só funciona em caso de isCentralized = true'
    },
    justify: {
      description: 'Define qual classe justify será utilizada',
      options: ['center']
    },
    align: {
      description: 'Define qual classe align será utilizada',
      options: ['center']
    },
    isCentralized: {
      description: 'Centraliza o conteúdo'
    },
    isDisplay: {
      description: 'Aumenta o tamanho do texto'
    },
    position: {
      description: 'Controla a ordem de layout entre conteúdo de texto e slot main',
      options: ['right', 'left'],
      control: { type: 'select' }
    }
  }
}

const Template = (args) => ({
  components: { HeroBlockBase, LinkButton },
  setup() {
    return { args }
  },
  template: `<HeroBlockBase v-bind="args">
                <template #main>
                  <img src="/assets/mocks/_slot.png" class="w-full h-full" />
                </template>
                <template #content>
                  <img src="/assets/mocks/_slot.png" />
                </template>
                <template #actions>
                  <LinkButton label="label" link="" />
                  <LinkButton label="label" link="" outlined />
                </template>
             </HeroBlockBase>`
})

const props = {
  overline: 'Overline',
  title:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
}

export const Default = Template.bind({})
Default.args = props

export const Centralized = Template.bind({})
Centralized.args = {
  ...props,
  isCentralized: true,
  justify: 'center',
  align: 'center'
}

export const isDisplay = Template.bind({})
isDisplay.args = {
  ...props,
  isDisplay: true
}

export const isReverse = Template.bind({})
isReverse.args = {
  ...props,
  isCentralized: true,
  isReverse: true
}

export const MainContentFirst = Template.bind({})
MainContentFirst.args = {
  ...props,
  position: 'right'
}
