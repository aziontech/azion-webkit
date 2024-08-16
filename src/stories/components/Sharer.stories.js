import Sharer from '../../templates/sharerblock'

export default {
  title: 'Components/Sharer',
  component: Sharer,
  tags: ['autodocs'],
  argTypes: {
    sharedURL: {
      description: "Url que vai ser usada no clipboard"
    }
  }
}

export const Default = {
  args: {
    data: [
      {
        link: `https://x.com/intent/tweet?url&via=aziontech`,
        icon: `ai ai-twitter`,
        title: 'Twitter'
      },
      {
        link: `https://www.facebook.com/sharer/sharer.php?`,
        icon: `pi pi-facebook`,
        title: 'Facebook'
      }
    ],
    tooltipText: "Copied to clipboard",
    sharedURL: "/"
  }
}
