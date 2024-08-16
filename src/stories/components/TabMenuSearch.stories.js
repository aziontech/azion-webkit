import TabMenuSearch from "../../templates/tabmenuwithsearch"

export default {
  title: 'Components/TabMenuSearch',
  component: TabMenuSearch,
  tags: ['autodocs'],
  argTypes: {
  }
}

export const Default = {
  args: {
    tabList: ['Edge Cache', 'Edge Application', 'Edge SQL'],
    inputPlaceholder: "Search..."
  }
}
