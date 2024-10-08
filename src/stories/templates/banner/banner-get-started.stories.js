
import Container from '../../../templates/container'
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'
import Rules from '../../rules'

export default {
  title: 'Blocks/Banner/banner-get-started',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.banner.overline}
${Rules.banner.title}
${Rules.banner.cta}
${Rules.banner.list}
        `,
      },
    },
  },
}

const MOCK = {
  "overline": "GET STARTED",
  "title": "Sign-up and <span class='animate-pretty bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400'>get $300,00 </span> to use for 12 months. Ready to deploy?",
  "buttons": [
    {
      "label": "Free Account",
      "link": "https://console.azion.com/signup/",
      "outlined": false
    },
    {
      "label": "Talk to an expert",
      "link": "/en/contact-sales/",
      "outlined": true
    }
  ],
  "items": [
    {
      "icon": "pi pi-tags",
      "text": "Access to all products"
    },
    {
      "icon": "pi pi-credit-card",
      "text": "No credit card required"
    },
    {
      "icon": "pi pi-dollar",
      "text": "Credit available to use for 12 months"
    }
  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection :pt="{content: 'surface-50 py-8 lg:py-16 px-5 lg:px-10 rounded'}" :overline="args.overline" titleTag="h2" position="full">
    <template #title>
      <h2 v-html="args.title" />
    </template>
    <template #content>
      <div class="flex flex-col md:flex-row gap-3 md:justify-end md:min-w-fit md:items-end">
        <LinkButton
          class="md:w-fit w-full"
          v-for="{ link, label, outlined } in args.buttons"
          :link="link"
          :label="label"
          :outlined="outlined"
        />
      </div>
    </template>
    <template #main>
      <div class="flex flex-col md:flex-row gap-3 justify-between">
        <div v-for="{ icon, text } in args.items" class="flex gap-3">
          <Tile> <i :class="icon" class="text-sm" /> </Tile>
          <p class="font-medium">{{ text }}</p>
        </div>
      </div>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, LinkButton, Container },
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
