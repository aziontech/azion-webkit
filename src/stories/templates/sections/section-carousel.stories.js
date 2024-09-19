
import Container from '../../../templates/container'
import SectionCarousel from '../../../templates/sectioncarousel'

export default {
  title: 'Blocks/Sections/section-carousel',
  tags: ['autodocs'],
}

const MOCK =  {
  "overline": "Guides and resources",
  "title": "Learn more about bot management through examples of architectures, guides and templates",
  "cards": [
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "New at Azion? Start your Azion journey seamlessly",
      "description": "This documentation will guide you through your first steps with Azion.",
      "link": "https://www.azion.com/en/documentation/products/get-started/"
    },
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "Simplify your Jamstack journey with boilerplates",
      "description": "The Jamstack architecture at the edge revolutionizes web development by combining serverless computing and edge locations, boosting website loading times, security, and scalability.",
      "link": "https://www.azion.com/en/documentation/products/build/develop-with-azion/frameworks-specific/overview/"
    },
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "Deploy a Jamstack application with React",
      "description": "React is listed on the Jamstack documentation as a static site generator, aligned to the Jamstack approach.",
      "link": "https://www.azion.com/en/documentation/products/cli/frameworks/react/"
    },
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "Build and run modern applications at the edge",
      "description": "Edge Application is a product that lets you build applications on Azion Edge Network, reducing latency and throughput between origin servers and users.",
      "link": "https://www.azion.com/en/documentation/products/build/edge-application/"
    },
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "Link your existing applications to an Azion edge application in a few steps",
      "description": "Linking an existing project to run on the Azion Edge platform.",
      "link": "https://www.azion.com/en/documentation/products/cli/link-command/"
    },
    {
      "tag": {
        "icon": "pi pi-book",
        "label": "Documentation"
      },
      "title": "Improve your developer experience with our Console Kit",
      "description": "Developed with Vue/Vite, PrimeVue, and Tailwind, Azion Console Kit is a front-end development kit used for crafting a customized Azion Console interface.",
      "link": "https://www.azion.com/en/documentation/devtools/console-kit/"
    },
    {
      "tag": {
        "icon": "pi pi-bookmark",
        "label": "Blog"
      },
      "title": "Discover how Azion can speed up your time-to-market",
      "description": "Discover how Azion's building blocks for creating low-code applications can speed up your time-to-market and power what you can do at the edge.",
      "link": "https://www.azion.com/en/blog/low-code-application-azion-edge-computing-platform/"
    }
  ]
}

const template = `
<Container class="surface-ground">
  <SectionCarousel v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionCarousel, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template } },
};
