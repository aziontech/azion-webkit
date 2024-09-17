
import ContentSection from '../../../templates/contentsection'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Carousel from "primevue/carousel";
import Tag from "primevue/tag"
import CardBlog from "../../../templates/cardblog"
import CardBaseClickable from "../../../templates/cardbaseclickable"
import CardTitle from "../../../templates/cardtitle"
import CardDescription from "../../../templates/carddescription"
import Container from "../../../templates/container"

export default {
  title: 'Blocks/Sections/Tab Menu Carousel',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "RECURSOS PARA A SOLUÇÃO",
  "title": "Saiba mais sobre soluções edge enhanced por meio de exemplos de arquiteturas, guias e templates",
  "description": "Aumente a performance dos seus ativos monolíticos e de microsserviços com as soluções da Azion para aplicações edge enhanced",
  responsiveOptions: [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
  ],
  "data": [
    {
      "panelName": "Arquiteturas",
      "cards": [
        {
          "imgSrc": "https://www.azion.com/assets/docs/images/uploads/edge-enhanced.png",
          "imgAlt": "aplicacoes-edge-enhanced-1",
          "title": "Aumente a performance dos seus ativos monolíticos e de microsserviços com as soluções da Azion para aplicações edge enhanced",
          "description": "Aprenda como melhorar suas aplicações e APIs com edge computing.",
          "link": "https://www.azion.com/pt-br/documentacao/arquiteturas/edge-enhanced/"
        }
      ]
    },
    {
      "panelName": "Guias e recursos",
      "cards": [
        {
          "icon": "pi pi-book",
          "docType": "Documentação",
          "title": "Novo na Azion? Comece sua jornada sem complicações",
          "description": "Esta documentação vai ajudar você nos seus primeiros passos com a Azion.",
          "link": "https://www.azion.com/pt-br/documentacao/produtos/ponto-de-partida/"
        },
        {
          "icon": "pi pi-book",
          "docType": "Documentação",
          "title": "Construa e execute suas aplicações no edge",
          "description": "O Edge Application é um produto que permite construir aplicações no edge da Azion, reduzindo a latência e a taxa de transferência entre servidores de origem e usuários.",
          "link": "https://www.azion.com/pt-br/documentacao/produtos/build/edge-application/"
        },
        {
          "icon": "pi pi-book",
          "docType": "Documentação",
          "title": "Armazene objetos facilmente no edge com o Azion Edge Storage",
          "description": "O Azion Edge Storage é um serviço de armazenamento escalável e seguro, projetado para integrar o armazenamento de objetos com a Plataforma de Edge Computing da Azion usando o padrão S3.",
          "link": "https://www.azion.com/pt-br/produtos/edge-storage/"
        },
        {
          "icon": "pi pi-book",
          "docType": "Documentação",
          "title": "Vincule suas aplicações atuais ao edge em poucos passos com nossa CLI",
          "description": "Vinculação de um projeto existente para execução no edge da Azion.",
          "link": "https://www.azion.com/pt-br/documentacao/produtos/azion-cli/link-comando/"
        },
        {
          "icon": "pi pi-book",
          "docType": "Documentação",
          "title": "Entregue seu conteúdo dinâmico e estático usando a Azion como CDN",
          "description": "Esse template ajuda você a implantar uma aplicação com políticas de cache padronizadas para otimizar a entrega do seu conteúdo.",
          "link": "https://www.azion.com/pt-br/documentacao/produtos/guias/dynamic-static-file-optimization-template/"
        },
        {
          "icon": "pi pi-tag",
          "docType": "Conteúdo",
          "title": "Descubra por que você deve aprimorar suas aplicações com edge computing",
          "description": "A modernização de aplicações no edge permite desenvolver vantagens tecnológicas cruciais para as empresas.",
          "link": "https://www.azion.com/pt-br/lp/infografico-cinco-razoes-modernizar-apps-2024/"
        },
        {
          "icon": "pi pi-bookmark",
          "docType": "Blog",
          "title": "Controle os acessos à sua plataforma com esta função pronta para uso",
          "description": "Aprenda a gerenciar o acesso às suas aplicações usando a Azion Scheduled Blocking Function, uma edge function que controla o acesso com base em janelas de tempo.",
          "link": "https://www.azion.com/pt-br/blog/controle-os-acessos-a-sua-plataforma-com-a-funcao-scheduled-blocking/"
        }
      ]
    }
  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection titleTag="h2" position="center" isContentCentralized textCenter :overline="args.overline"
    :title="args.title" :description="args.description">
    <template #main>
      <TabView :pt="{ nav: { class: 'flex flex-wrap gap-10 justify-center mb-8' } }">
        <template v-if="Array.isArray(args.data) && args.data.length > 0">
          <TabPanel v-for="({ panelName, cards }) in args.data" :header="panelName" :key="panelName">
            <div v-if="cards.length <= 2" class="flex justify-center items-center w-full">
              <div :class="[
                { 'flex lg:basis-2/3 xl:basis-1/2 justify-center items-center': cards.length == 1 },
                { 'flex flex-col md:flex-row gap-8 lg:max-w-2xl': cards.length == 2 }
              ]">
                <CardBlog v-for="(cardProps, index) in cards" v-bind="cardProps" :key="index"
                  :direction="cards.length == 1 ? 'row' : 'col'" />
              </div>
            </div>
            <template v-else>
              <Carousel :value="cards" :numVisible="3" :numScroll="2" :responsiveOptions="args.responsiveOptions"
                :circular="true" :autoplayInterval="5000" :showIndicators="true"
                :showNavigators="false">
                <template #item="slotProps">
                  <div class="md:mx-4 h-full">
                    <CardBaseClickable :link="slotProps.data.link" grid>
                      <template #content>
                        <div class="pb-5">
                          <Tag :value="slotProps.data.docType" :icon="slotProps.data.icon" severity="info" />
                        </div>
                        <div class="flex flex-col gap-3">
                          <CardTitle> {{ slotProps.data.title }} </CardTitle>
                          <CardDescription> {{ slotProps.data.description }} </CardDescription>
                        </div>
                      </template>
                    </CardBaseClickable>
                  </div>
                </template>
              </Carousel>
            </template>
          </TabPanel>
        </template>
      </TabView>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, TabView, TabPanel, Carousel, Tag, CardBlog, CardTitle, CardDescription, CardBaseClickable, Container },
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
    source: { code: template }
  },
};
