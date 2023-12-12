import Sharer from '../templates/sharer-block/index.vue'

export default {
  title: 'Blocks/Sharer',
  component: Sharer,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    data: [
      {
        link: `https://www.facebook.com/sharer/sharer.php?u=`,
        icon: `pi pi-facebook`,
      },
      {
        link: `https://x.com/intent/tweet?url=&via=@aziontech`,
        icon: `ai ai-twitter`,
      },
      {
        link: `https://www.linkedin.com/sharing/share-offsite/?url=`,
        icon: `pi pi-linkedin`,
      }
    ],
    tooltipText: 'Copied to clipboard',
    title: 'Sharer Block',
    sharedURL: 'URL'
  }
};
