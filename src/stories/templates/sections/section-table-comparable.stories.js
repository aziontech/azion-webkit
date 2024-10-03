
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import CardBase from "../../../templates/cardbase";
import CardTitle from "../../../templates/cardtitle";
import CardDescription from "../../../templates/carddescription";
import LinkButton from "../../../templates/linkbutton";
import Overline from "../../../templates/overline";
import ContentSection from '../../../templates/contentsection'
import Container from "../../../templates/container"

export default {
  title: 'Blocks/Sections/section-table-comparable',
  tags: ['autodocs'],
}

const config = (args) => {
  return {
    components: {
      CardBase,
      Overline,
      CardTitle,
      CardDescription,
      LinkButton,
      ContentSection,
      Tag,
      Column,
      DataTable,
      Container
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <ContentSection id="plans" :overline="args.overline" :title="args.title" :description="args.description"
          isContentCentralized>
          <template #content>
            <div class="w-full">
              <DataTable :value="args.tables" scrollable tableStyle="min-width: 100%" :pt="{
                root: { class: 'border-transparent' },
                thead: 'sticky surface-ground',
              }">
                <template v-for="key in args.tablesId" v-key="key">
                  <Column :field="key" :frozen="key === 'product'" :pt="{
                    headerContent: { class: 'h-full' },
                    headercell: { class: 'h-80 bg-transparent px-2.5' },
                    bodycell: { class: [key === 'product' && 'max-w-0 lg:max-w-full bg-transparent align-top xl:bg-inherit xl:align-center', 'p-4'] }
                  }">
                    <template #header>
                      <div class="h-full">
                        <template v-if="args.cards[key]">
                          <CardBase grid spacing="compact" :backgroundColor="key === 'enterprise' ? 'highlighted' : 'shape'"
                            class="min-w-60 max-w-64">
                            <template #content>
                              <div class="flex flex-col gap-3 grow">
                                <div class="flex gap-3">
                                  <CardTitle> {{ args.cards[key].title }} </CardTitle>
                                  <Tag v-if="args.cards[key].tag" icon="pi pi-star-fill" :value="args.cards[key].tag"></Tag>
                                </div>
                                <div data-hide class="flex flex-col gap-6 h-full justify-between">
                                  <CardDescription class="block text-wrap">
                                    {{ args.cards[key].description }}
                                  </CardDescription>
                                  <div class="flex flex-col gap-6 h-full justify-end">
                                    <div class="flex flex-col gap-4">
                                      <Overline v-if="args.cards[key].overline" :label="args.cards[key].overline" />
                                      <p class="text-3xl font-semibold">
                                        {{ args.cards[key].cost }}
                                      </p>
                                    </div>
                                    <LinkButton class="w-full lg:w-fit" v-bind="args.cards[key].button" :severity="args.cards[key].button.severity
                                        ? args.cards[key].button.severity
                                        : 'secondary'
                                      " />
                                  </div>
                                </div>
                              </div>
                            </template>
                          </CardBase>
                        </template>
                        <div v-if="key === 'product'"
                          class="hidden xl:flex surface-ground flex-col min-w-64 h-full gap-3 p-5 md:p-8 border surface-border rounded">
                          <p class="text-2xl"> {{ args.tableHead.title }} </p>
                          <CardDescription class="text-wrap font-normal"> {{ args.tableHead.description }} </CardDescription>
                        </div>
                      </div>
                    </template>

                    <template #body="slotProps">
                      <div class="h-full" :class="key !== 'product'
                          ? 'flex justify-center items-center pt-12 xl:pt-0 pb-2 xl:pb-0'
                          : 'flex gap-2 xl:items-center pt-2 xl:pt-0'
                        ">
                        <template v-if="slotProps.data[key]">
                          <template v-if="slotProps.data[key].overline">
                            <div class="pb-4 pt-12">
                              <Overline :label="slotProps.data[key].overline" />
                            </div>
                          </template>
                          <template v-if="slotProps.data[key].icon">
                            <i v-tooltip.top="{ value: slotProps.data[key].tooltip, showDelay: 200 }" :class="[
                              slotProps.data[key].icon,
                              {
                                'text-color-secondary':
                                  slotProps.data[key].icon === 'pi pi-minus',
                              },
                              {
                                'text-[#39E478]':
                                  slotProps.data[key].icon === 'pi pi-check-circle',
                              },
                              {
                                'text-color-secondary':
                                  slotProps.data[key].icon === 'pi pi-plus-circle',
                              },
                              {
                                'text-[#FFB64D]':
                                  slotProps.data[key].icon === 'pi pi-dollar',
                              },
                            ]" class="text-sm" />
                          </template>
                          <template v-if="slotProps.data[key].label">
                            <span :class="key !== 'product' &&
                              'max-w-52 text-wrap text-center text-color-secondary'
                              " v-html="slotProps.data[key].label" />
                          </template>
                        </template>
                      </div>
                    </template>
                  </Column>
                </template>
              </DataTable>
            </div>
          </template>
        </ContentSection>
      </Container>
    `
  }
}

const Template = (args) => (config(args))
export const Default = Template.bind({})
Default.args = {
  "overline": "GET TO KNOW OUR SERVICE PLANS",
  "title": "Which Azion service plan is the most suitable for you?",
  "description": "Our platform and flexible service levels make it easy for businesses of all sizes to choose the option that best fits their needs.",
  "tableHead": {
    "title": "Compare Plans",
    "description": "Find the perfect plan for your company's needs by exploring our flexible options designed to fit businesses of all sizes."
  },
  "cards": {
    "developer": {
      "title": "Developer",
      "cost": "Free Trial",
      "description": "If you want to explore the potential of our platform yourself, we recommend the Developer Plan",
      "button": {
        "link": "https://console.azion.com/signup/",
        "label": "Get Developer",
        "target": "_blank"
      }
    },
    "business": {
      "title": "Business",
      "overline": "Start at",
      "cost": "$100/mo",
      "description": "For customers seeking efficient and accessible technological solutions, we recommend the Business Plan.",
      "button": {
        "link": "https://www.azion.com/en/contact-sales/",
        "label": "Get Business",
        "target": "_blank"
      }
    },
    "enterprise": {
      "title": "Enterprise",
      "overline": "Start at",
      "tag": "Most Popular",
      "cost": "$3.500/mo",
      "description": "For customers with critical operations and systems, we recommend the Enterprise Plan.",
      "button": {
        "link": "https://www.azion.com/en/contact-sales/",
        "label": "Get Enterprise",
        "target": "_blank"
      }
    },
    "missionCritical": {
      "title": "Mission Critical",
      "cost": "Custom",
      "description": "For customers whose online presence is critical and service performance directly impacts business results, we recommend the Mission Critical Plan.",
      "button": {
        "link": "https://www.azion.com/en/contact-sales/",
        "label": "Get Mission Critical",
        "target": "_blank"
      }
    }
  },
  "tablesId": [
    "product", "developer", "business", "enterprise", "missionCritical"
  ],
    "tables": [
      {
        "product": {
          "overline": "Product Features"
        }
      },
      {
        "product": {
          "label": "Access features in preview",
          "icon": "ai ai-sparkles"
        },
        "developer": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "business": { "icon": "pi pi-plus-circle", "tooltip": "Opt-in"},
        "enterprise": { "icon": "pi pi-plus-circle", "tooltip": "Opt-in"},
        "missionCritical": { "icon": "pi pi-plus-circle", "tooltip": "Opt-in"}
      },
      {
        "product":{
          "label":  "Composable Applications",
          "icon": "pi pi-box"
        },
        "developer": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "business": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included"}
      },
      {
        "product": {
          "label": "DDoS Protection Unmetered",
          "icon": "pi pi-shield"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included"}
      },
      {
        "product": {
          "label": "Single Sign-On (SSO)",
          "icon": "pi pi-directions"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included"},
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included"}
      },
      {
        "product": {
          "overline": "Services and Support"
        }
      },
      {
        "product": {
          "label": "Online Learning Program",
          "icon": "pi pi-desktop"
        },
        "developer": { "icon": "pi pi-check-circle", "tooltip": "Included" },
        "business": { "icon": "pi pi-check-circle", "tooltip": "Included" },
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included" },
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included" }
      },
      {
        "product": {
          "label": "Tech Support",
          "icon": "pi pi-phone"
        },
        "developer": { "label": "Community support, bug reports, and Azion AI" },
        "business": { "label": "24/7 support via ticket and email" },
        "enterprise": { "label": "24/7 support via ticket, email, and phone" },
        "missionCritical": { "label": "24/7 support via ticket, email, and phone" }
      },
      {
        "product": {
          "label": "Response Times",
          "icon": "pi pi-flag"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": {
          "label": "Question: <24h <br />Issue: <12h<br />Major Issue: <4h<br />Outage: <2h<br />Critical Outage: N/A"
        },
        "enterprise": {
          "label": "Question: <24h<br />Issue: <12h<br />Major Issue: <4h<br />Outage: <1h<br />Critical Outage: <15min"
        },
        "missionCritical": {
          "label": "Question: <12h<br />Issue: <12h<br />Major Issue: <2h<br />Outage: <30min<br />Critical Outage: <15min"
        }
      },
      {
        "product": {
          "label": "Integration Services",
          "icon": "pi pi-arrow-right-arrow-left"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "label": "5 hours/year included" },
        "enterprise": { "label": "20 hours/year included" },
        "missionCritical": { "label": "60 hours/year included" }
      },
      {
        "product": {
          "label": "Best Practices Review",
          "icon": "pi pi-search-plus"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "enterprise": { "label": "20 hours/year included" },
        "missionCritical": { "label": "40 hours/year included" }
      },
      {
        "product": {
          "label": "Business Events Support",
          "icon": "pi pi-compass"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "label": "1 event per year" },
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included"}
      },
      {
        "product": {
          "label": "Technical Account Manager",
          "icon": "pi pi-user"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included"}
      },
      {
        "product": {
          "label": "Instructor-Led Training",
          "icon": "pi pi-book"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      },
      {
        "product": {
          "label": "Managed Configurations",
          "icon": "pi pi-cog"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      },
      {
        "product": {
          "label": "Security Response Team",
          "icon": "pi pi-shield"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      },
      {
        "product": {
          "label": "Slack Channel",
          "icon": "pi pi-slack"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      },
      {
        "product": {
          "overline": "Compliance"
        }
      },
      {
        "product": {
          "label": "PCI DSS 4.0",
          "icon": "pi pi-lock"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included" },
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included" }
      },
      {
        "product": {
          "label": "SOC 2 Type 2 (and SOC 3)",
          "icon": "pi pi-lock"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-check-circle", "tooltip": "Included" },
        "missionCritical": { "icon": "pi pi-check-circle", "tooltip": "Included" }
      },
      {
        "product": {
          "label": "Edge Network Custom Maps",
          "icon": "pi pi-globe"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-dollar", "tooltip": "Paid addon" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      },
      {
        "product": {
          "label": "FIPS 140-2 Level 3",
          "icon": "pi pi-lock"
        },
        "developer": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "business": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "enterprise": { "icon": "pi pi-minus", "tooltip": "Not included" },
        "missionCritical": { "icon": "pi pi-dollar", "tooltip": "Paid addon" }
      }
    ]
}
