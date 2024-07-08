import TabMenuSearch from "../../templates/tabmenuwithsearch"

export default {
  title: 'Azion Web Kit/Components/Tab Menu Search',
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
