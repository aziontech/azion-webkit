import ContentSection from "../../templates/contentsection/ContentSection"
import LinkButton from '../../templates/linkbutton/LinkButton';

export default {
  title: 'Blocks/Content Section Block',
  component: ContentSection,
  tags: ['autodocs'],
  argTypes: {
    titleTag: {
      description: "Selecione a heading tag"
    },
    position: {
      control: { type: 'radio' },
      options: ['left', 'right', 'center']
    },
    isContentCentralized: {
      description: "Centralize o conteúdo em coluna"
    },
    reverse: {
      description: "Troque a ordem do conteúdo SE centralizado"
    },
    isSticky: {
      description: "Transforme o bloco de Titulo em sticky"
    }
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

const props = {
  overline: 'Overline',
  title: 'Whats is Azion Marketplace?',
  description: `Azion Marketplace is a digital catalog that makes it easy to find, test, and deploy edge-enabled software that runs anywhere. The Marketplace gathers together a wide range of solutions that you can use to easily enhance, compose, or customize your applications.`,
}

export const Default = Example.bind({});
Default.args = props

export const Right = Template.bind({});
Right.args = {
  ...props,
  position: "right",
}

export const Center = Template.bind({});
Center.args = {
  ...props,
  position: "center",
  textCenter: true,
  isContentCentralized: true,
}

export const isReverseCenter = Template.bind({});
isReverseCenter.args = {
  ...props,
  position: "center",
  textCenter: true,
  isContentCentralized: true,
  reverse: true
}
