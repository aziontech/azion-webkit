import HeroBlockBase from '../templates/hero-block-base/index.vue';
import LinkButton from '../templates/button/link.vue'

export default {
  title: 'Blocks/Hero Block Base',
  component: HeroBlockBase,
  tags: ['autodocs'],
  parameters: {
    slots: {
      main: {
        description: 'Main slot',
        template: `<img src="./assets/images/mocks/_slot.png" />`,
      },
      content: {
        description: 'Content slot',
        template: `<img src="./assets/images/mocks/_slot.png" />`,
      },
      buttons: {
        description: 'Buttons slot',
        template: `<LinkButton label="Button" link="./" /> <LinkButton label="Button" link="./" outlined />`,
      },
    }
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    overline: 'Overline',
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    centered: false,
  }
};
