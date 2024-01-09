import ContentSection from "../templates/content-section-block/index.vue"
import LinkButton from '../templates/button/link.vue';

export default {
  title: 'Blocks/Content Section Block',
  component: ContentSection,
  tags: ['autodocs'],
  argsType: {
    title: String,
    overline: String,
    description: String,
    position: String,
    isContentCentered: Boolean,
  }
}

const Template = (args) => ({
  components: { ContentSection, LinkButton },
  setup() {
    return { args }
  },
  template: `<ContentSection v-bind="args">
                <template #main>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #content>
                  <img src="src/assets/images/mocks/_slot.png" />
                </template>
                <template #actions>
                  <LinkButton label="label" link="" />
                  <LinkButton label="label" link="" outlined />
                </template>
             </ContentSection>`
})

const Example = (args) => ({
  components: { ContentSection, LinkButton },
  setup() {
    return { args }
  },
  template: `<ContentSection v-bind="args">
                <template #main>
                  <ul class="flex flex-col gap-2">
                    <li class="flex flex-col gap-1">
                      <p> <span> <i class="pi pi-check" /> </span> Fast </p>
                      <p> Execute code and deploy in a few clicks. From prototype to enterprise-scale with no-ops, just code. </p>
                    </li>
                    <li class="flex flex-col gap-1">
                      <p> <span> <i class="pi pi-check" /> </span> Varied use cases </p>
                      <p> Fraud detection, authentication & authorization, bot mitigation and facial recognition, using technologies such as visual compute and artificial intelligence running at the edge. </p>
                    </li>
                    <li class="flex flex-col gap-1">
                      <p> <span> <i class="pi pi-check" /> </span> Pay per use </p>
                      <p> Price is defined on top of edge resources/private edge locations in use. </p>
                    </li>
                  </ul>
                </template>
                <template #actions>
                  <LinkButton label="label" link="" />
                  <LinkButton label="label" link="" outlined />
                </template>
             </ContentSection>`
})

export const Default = Template.bind({});
Default.args = {
    overline: 'Overline',
    title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    description: `lorem ipsum dolor sit amet, consectetur`,
    position: "left",
}

export const Right = Template.bind({});
Right.args = {
  overline: 'Overline',
  title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  description: `lorem ipsum dolor sit amet, consectetur`,
  position: "right",
}

export const Center = Template.bind({});
Center.args = {
  overline: 'Overline',
  title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  description: `lorem ipsum dolor sit amet, consectetur`,
  position: "center",
}

export const RealExample = Example.bind({});
RealExample.args = {
  overline: 'Overline',
  title: 'Whats is Azion Marketplace?',
  description: `Azion Marketplace is a digital catalog that makes it easy to find, test, and deploy edge-enabled software that runs anywhere. The Marketplace gathers together a wide range of solutions that you can use to easily enhance, compose, or customize your applications.
  All software listed in our digital catalog is built or adapted to run on the edge, and is streamlined to be immediately deployable from Marketplace. In a few clicks, you can find and deploy a product in Edge Firewall or Edge Application, and once a product has been deployed, it will be immediately available in your Azion account, and you can start using it right away.`,
  position: "left",
}
