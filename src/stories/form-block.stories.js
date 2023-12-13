import FormBlock from '../templates/form-block/index.vue';

export default {
  title: 'Blocks/Form Block',
  component: FormBlock,
  tags: ['autodocs'],
  parameters: {
    slots: {
      fieldset: {
        description: 'Fieldset slot',
        template: `<p>{{ args.title }}</p>`,
      },
    }
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    title: 'Fale com a equipe de vendas',
    description: 'Conte conosco para aproveitar ao máximo sua conta gratuita da Azion. Nossa equipe de vendas também pode ajudá-lo com diversos assuntos, incluindo contratação de novos serviços e preços especiais para grandes volumes ou contratos de longo prazo. Se você deseja que a equipe de vendas da Azion entre em contato para discutir seu projeto, preencha este formulário.',
    buttonText: 'Submit',
    onSubmit: () => {}
  }
};
