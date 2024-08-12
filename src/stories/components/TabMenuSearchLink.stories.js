import TabMenuSearchLink from "../../templates/tabmenuwithsearchlink/TabMenuWithSearchLink"

export default {
  title: 'Components/TabMenuSearchLink',
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
