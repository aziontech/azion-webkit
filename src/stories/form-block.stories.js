import FormBlock from '../templates/form-block/index.vue';
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Form Block',
  component: FormBlock,
  tags: ['autodocs'],
  argTypes: {
    title: String,
    description: String,
  }
};

const Template = (args) => ({
  components: { FormBlock, LinkButton },
  setup() {
    return { args }
  },
  template: `<FormBlock v-bind="args">
                <template #content>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #actions>
                  <LinkButton label="label" link="" />
                </template>
             </FormBlock>`
})

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = Template.bind({})
Default.args = {
  title: 'Fale com a equipe de vendas',
  description: 'Conte conosco para aproveitar ao máximo sua conta gratuita da Azion. Nossa equipe de vendas também pode ajudá-lo com diversos assuntos, incluindo contratação de novos serviços e preços especiais para grandes volumes ou contratos de longo prazo. Se você deseja que a equipe de vendas da Azion entre em contato para discutir seu projeto, preencha este formulário.',
};
