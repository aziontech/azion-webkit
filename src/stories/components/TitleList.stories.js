import TitleList from '../../templates/titlelist'

export default {
  title: '2. Components/TitleList',
  component: TitleList,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['default', 'primary', 'warning', 'success', 'info' ]
    }
  }
}

export const Default = {
  args: {
    data: [
      {
        title: "Lorem Ipsum",
        link: "/",
        linkTarget: "_self"
      },
      {
        title: "Lorem Ipsum 2",
        link: "/",
        linkTarget: "_self"
      },
    ],
    buttonText: "See All Posts",
    link: '/'
  }
}
