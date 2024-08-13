import HeroBlockBase from '../../templates/herobase/HeroBase';
import LinkButton from '../../templates/linkbutton/LinkButton';

export default {
  title: '2. Components Group/HeroBase',
  component: HeroBlockBase,
  tags: ['autodocs'],
  argTypes: {
    bannerNews: {
      description: "Banner News props - check it out 2. Components Group/Banner. Se verdadeiro exibe o news banner"
    },
    isReverse: {
      description: "Muda a orientação dos blocos do hero. Só funciona em caso de isCentralized = true"
    },
    justify: {
      description: "Define qual classe justify será utilizada",
      options: ['center']
    },
    align: {
      description: "Define qual classe align será utilizada",
      options: ['center']
    },
    isCentralized: {
      description: "Centraliza o conteúdo",
    },
    isDisplay: {
      description: "Aumenta o tamanho do texto",
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
                  <img src="src/assets/images/mocks/_slot.png" class="w-full h-full" />
                </template>
                <template #content>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #actions>
                  <LinkButton label="label" link="" />
                  <LinkButton label="label" link="" outlined />
                </template>
             </HeroBlockBase>`
})

const props = {
  overline: 'Overline',
  title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
}

export const Default = Template.bind({});
Default.args = props

export const Centralized = Template.bind({});
Centralized.args = {
  ...props,
  isCentralized: true,
  justify: "center",
  align: "center"
}

export const isDisplay = Template.bind({});
isDisplay.args = {
  ...props,
  isDisplay: true,
}

export const isReverse = Template.bind({});
isReverse.args = {
  ...props,
  isCentralized: true,
  isReverse: true,
}
