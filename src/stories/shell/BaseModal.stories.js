import BaseModal from "../../templates/basemodal"

export default {
  title: 'Azion Web Kit/Shell/Base Modal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: 'Defina o estilo de background da modal',
      options: ['outlined', 'default'],
      control: { type: 'radio' }
    },
    showHeader: {
      description: 'Mostrar/Esconder modal header'
    }
  }
};

const modalTemplate = `<BaseModal>
                        <template #action>
                          <div class="bg-red-300   rounded items-center justify-center flex"> [SLOT ACTION] Slot de ação, com clique abre modal </div>
                        </template>
                        <template #header>
                          <div class="bg-red-300 rounded items-center justify-center flex"> [SLOT HEADER] Slot de ação, com clique abre modal </div>
                        </template>
                        <template #content>
                          <div class="bg-red-300 rounded items-center justify-center flex"> [SLOT CONTENT] Slot de ação, com clique abre modal </div>
                        </template>
                        <template #footer>
                          <div class="bg-red-300 rounded items-center justify-center flex"> [SLOT FOOTER] Slot de ação, com clique abre modal </div>
                        </template>
                      </BaseModal>`

const Template = (args) => ({
  components: { BaseModal },
  setup() {
    return { args }
  },
  template: modalTemplate
})

export const Default = Template.bind({})
