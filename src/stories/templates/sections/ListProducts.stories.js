
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'
import CardBase from '../../../templates/cardbase'
import IconTextSegment from '../../../templates/icontextsegment'
import Overline from '../../../templates/overline'

export default {
  title: 'Blocks/Sections/List Products',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "Products",
  "title": "Products and Services Related to Jamstack Websites",
  "list": [
    {
      "icon": "ai ai-edge-application",
      "title": "Edge Application",
      "description": "Enables the development of web applications to run on the Azion Edge Computing Platform.",
      "link": "https://www.azion.com/en/products/edge-application/",
      "addons": [
        {
          "label": "Application Accelerator",
          "link": "https://www.azion.com/en/products/application-accelerator/"
        },
        {
          "label": "Edge Functions",
          "link": "https://www.azion.com/en/products/edge-functions/"
        },
        {
          "label": "Edge Cache",
          "link": "https://www.azion.com/en/products/edge-cache/"
        }
      ]
    },
    {
      "icon": "ai ai-edge-storage",
      "title": "Edge Storage",
      "description": "Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.",
      "link": "https://www.azion.com/en/products/edge-storage/"
    }
  ]
}

const template = `
<div class="surface-ground py-10">
  <ContentSection titleTag="h2" position="center" isContentCentralized textCenter :overline="args.overline"
    :title="args.title">
    <template #main>
      <div class="gap-4 grid place-content-center m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,_33%)]">
        <CardBase v-for="({ title, icon, description, link, addons }) in args.list" spacing="compact" backgroundColor="default" :class="[addons && 'row-span-2']">
          <template #content>
            <div class="flex flex-col w-full gap-2 justify-end">
              <IconTextSegment class="h-full" :href="link" :title="title" :description="description" :icon="icon" severity="primary" />
              <div class="ml-12" v-if="addons">
                <Overline label="Add-ons" />
                <div class="flex flex-col gap-2 pt-3 -ml-4">
                  <LinkButton v-for="({ label, link }) in addons" text :label="label" :link="link" class="max-w-fit" icon="pi pi-arrow-right" iconPos="rigth" />
                </div>
              </div>
            </div>
          </template>
        </CardBase>
      </div>
    </template>
  </ContentSection>
</div>`

const Template = (args) => ({
  components: { ContentSection, CardBase, IconTextSegment, Overline, LinkButton },
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