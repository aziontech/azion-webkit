import Banner from '../../templates/banner'

export default {
  title: '2.1 Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    cta: {
      description: "Call to Action - anchor text"
    }
  }
}

export const Default = {
  args: {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna dui, elementum eget euismod ut, scelerisque id erat. Fusce iaculis velit consectetur",
    cta: "congue dapibuse.",
    link: ""
  }
}
