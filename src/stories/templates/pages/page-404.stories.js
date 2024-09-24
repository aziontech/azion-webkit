
import Overline from '../../../templates/overline/Overline'
import EmptyState from '../../../templates/emptystateblock/EmptyStateBlock'
import Container from '../../../templates/container/Container'

export default {
  title: 'Blocks/Pages/page-404',
  tags: ['autodocs'],
}

const MOCK = {
  "title": "Sorry, we couldn't find that page.",
  "description": "Use the search bar or the navigation links below to browse the website.",
  "table": [
    {
      "label": "Company",
      "items": [
        { "label": "Home", "link": "/en/" },
        { "label": "About Us", "link": "/en/about-us/" },
        { "label": "Success Cases", "link": "/en/resource-hub/" },
        { "label": "Blog", "link": "/en/blog/" }
      ]
    },
    {
      "label": "Our Products",
      "items": [
        { "label": "Application Accelerator", "link": "/en/products/application-accelerator/" },
        { "label": "DDoS Protection", "link": "/en/products/ddos-protection/" },
        { "label": "Edge Cache", "link": "/en/products/edge-cache/" },
        { "label": "Edge Functions", "link": "/en/products/edge-functions/" },
        { "label": "Edge Pulse", "link": "/en/products/edge-pulse/" },
        { "label": "Edge DNS", "link": "/en/products/edge-dns/" },
        { "label": "Image Processor", "link": "/en/products/image-processor/" },
        { "label": "Load Balancer", "link": "/en/products/load-balancer/" },
        { "label": "Network Layer Protection", "link": "/en/products/network-layer-protection/" },
        { "label": "Real-Time Events", "link": "/en/products/real-time-events/" },
        { "label": "Real-Time Metrics", "link": "/en/products/real-time-metrics/" },
        { "label": "Web Application Firewall", "link": "/en/products/web-application-firewall/" }
      ]
    },
    {
      "label": "Getting Started",
      "items": [
        { "label": "Getting Started", "link": "/en/documentation/products/get-started/" },
        { "label": "API", "link": "https://api.azion.com/" },
        { "label": "Guides", "link": "/en/documentation/products/guides/" },
        { "label": "Changelog", "link": "/en/documentation/products/changelog/" },
        { "label": "Contact Sales", "link": "/en/contact-sales/" },
        { "label": "System Status", "link": "https://status.azion.com/" },
        { "label": "Free Account", "link": "https://console.azion.com/signup" }
      ]
    }
  ]
}


const template = `
<Container class="px-container surface-ground">
  <div class="flex flex-col gap-5 md:gap-10 items-center">
    <EmptyState
      :title="args.title"
      :description="args.description"
    >
      <template #illustration>
        <img src="https://www.azion.com/assets/pages/404/404.svg" />
      </template>
    </EmptyState>
    <div class="w-full sm:w-fit">
      <div class="m-0 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 md:gap-x-16 w-full">
        <div v-for="({ label, items}, index) in args.table" :class="[ index === 1 && 'col-span-2 order-last md:order-none', 'flex flex-col gap-6']">
          <Overline :label="label" />
          <ul :class="[index === 1 ? 'm-0 grid grid-cols-1 sm:grid-cols-2 gap-x-16 md:gap-x-16 gap-y-4 w-full' : 'flex flex-col gap-4 w-full']">
            <li v-for="({ label, link }) in items">
              <a :href="link" target="_self" class="rounded hover:underline text-base truncate max-w-full" >
                {{ label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Container>`

const Template = (args) => ({
  components: { EmptyState, Overline, Container },
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
