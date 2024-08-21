
import ContentSection from '../../../templates/contentsection'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'


export default {
  title: 'Blocks/Sections/Z Text Image',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "Edge Application",
  "title": "How it Works",
  "cards": [
    {
      "title": "Reverse Proxy Architecture",
      "description": "Azion uses a reverse proxy architecture through which your users connect to the Edge Nodes of our highly distributed global network.",
      "imageDark": "https://www.azion.com/assets/pages/products/images/dark/edge-application/console-delivery-settings.webp",
      "imageLight": "https://www.azion.com/assets/pages/products/images/light/edge-application/asset-11.svg",
      "alt": ""
    },
    {
      "title": "Configure Your Cache",
      "description": "Content located on Azion's Edge Nodes can be delivered directly to your users from our nearest node.",
      "alt": "",
      "imageDark": "https://www.azion.com/assets/pages/products/images/dark/edge-application/asset-2.svg",
      "imageLight": "https://www.azion.com/assets/pages/products/images/light/edge-application/asset-21.svg",
      "position": "right"
    },
    {
      "title": "Enable Network, Compute & Security",
      "description": "Enable network, compute and security modules for your edge application to ensure high performance, scalability and security.",
      "alt": "",
      "imageDark": "https://www.azion.com/assets/pages/products/images/dark/edge-application/asset-3.svg",
      "imageLight": "https://www.azion.com/assets/pages/products/images/light/edge-application/asset-31.svg"
    }
  ]
}


const template = `
  <div class="flex flex-col gap-20 lg:gap-40 surface-ground py-10">
    <ContentSection :overline="args.overline" :title="args.title" position="center" titleTag="h2" isContentCentralized />
    <ContentSection v-for="({ title, description, imageDark, imageLight, position, alt }) in args.cards" :title="title"
      :description="description" titleTag="h3" textCenter :position="position">
      <template #main>
        <div class="w-full flex justify-center">
          <ImageSwitcher>
            <template #darkImage>
              <img height="382" width="492" :src="imageDark" :alt="alt" loading="lazy" />
            </template>
            <template #lightImage>
              <img height="382" width="492" :src="imageLight" :alt="alt" loading="lazy" />
            </template>
          </ImageSwitcher>
        </div>
      </template>
    </ContentSection>
  </div>`

const Template = (args) => ({
  components: { ContentSection, ImageSwitcher},
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
