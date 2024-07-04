import CardBlog from '../../templates/cardblog'

export default {
  title: 'Azion Web Kit/Blocks/Cards/Blog',
  component: CardBlog,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: 'Defina a orientação do card',
      options: ['column', 'row'],
      control: { type: 'radio' }
    }
  }
}


const cardTemplate = `<div style="max-width: 512px;"> <CardBlog v-bind="args" /> </div>`

const Template = (args) => ({
  components: { CardBlog },
  setup() {
    return { args }
  },
  template: cardTemplate
})

const DefaultProps = {
  "title": "New at Azion? Start your Azion journey seamlessly",
  "imgSrc": "https://www.azion.com/assets/blog/images/fallback-cards/card-empty-1.png",
  "imgAlt": "Azion logo",
  "description": "This documentation will assist you to Get started and walk your first steps on Azion.",
  "link": "https://www.azion.com/en/documentation/products/get-started/",
}

export const Default = Template.bind({})
  Default.args = DefaultProps

export const BlogPost = Template.bind({})
BlogPost.args = {
  ...DefaultProps,
  date: "MAY 9, 2024",
  estimateReadTime: "6 min read",
  authors: [{
    avatar: "https://www.azion.com/assets/blog/images/uploads/image-1-1.png",
    role: "Tech Writter",
    title: "Gabriel França",
  }]
}

export const row = Template.bind({})
  row.args = {
    ...DefaultProps,
    direction: "row"
  }
