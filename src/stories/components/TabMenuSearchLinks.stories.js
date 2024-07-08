import TabMenuSearchLink from "../../templates/tabmenuwithsearchlink"

export default {
  title: 'Azion Web Kit/Components/Tab Menu Search Link',
  component: TabMenuSearchLink,
  tags: ['autodocs'],
  argTypes: {
  }
}

export const Default = {
  args: {
    tabList: [
      {
        label: "Edge Node",
        url: "/"
      },
      {
        label: "Edge SQL",
        url: "/"
      },
      {
        label: "Edge Functions",
        url: "/"
      },
    ],
    inputPlaceholder: "Search..."
  }
}
