import Header from "../../templates/header/Header.js"
import AzionLogo from '../../templates/azionlogo/AzionLogo.js'
import HeaderNavigation from '../../templates/headermenutabpanel/HeaderMenuTabPanel.js'
import Button from 'primevue/button';
import MockHeader from '../../mock/header.js'


export default {
  title: 'Blocks/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {}
};

const compositionDefault = `
    <Header v-bind="args">
      <template #visualid>
          <AzionLogo />
      </template>

      <template #navigation>
        <HeaderNavigation :menuData="args.menuData" />
      </template>

      <template #mobile-right-sidebar>
        <Button
          class="lg:hidden flex text-white flex-none border-header w-8 h-8 bg-header hover:bg-header-button-hover"
          icon="pi pi-bars"
          size="small"
          aria-label="Menu"
          :pt="{
            label: { class: 'text-white hover:bg-header-button-hover' },
            icon: { class: 'text-white' }
          }"
        />
      </template>
    </Header>
`

const Template = (args) => ({
  components: { Header, AzionLogo, HeaderNavigation, Button },
  setup() {
    return { args }
  },
  template: compositionDefault
})

export const Default = Template.bind({})
Default.args = {
  ...MockHeader
}
