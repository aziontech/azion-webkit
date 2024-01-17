import HeroBlockBase from '../templates/hero-block-base/index.vue';
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Hero Block Base',
  component: HeroBlockBase,
  tags: ['autodocs'],
  argsType: {
    title: String,
    overline: String,
    description: String,
    isCentralized: Boolean
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

export const Default = Template.bind({});
Default.args = {
    overline: 'Overline',
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    isCentralized: false,
}

export const Centralized = Template.bind({});
Centralized.args = {
  overline: 'Overline',
  title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
  isCentralized: true,
}
