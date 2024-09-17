
import CardTitle from '../../../templates/cardtitle'
import CardBase from '../../../templates/cardbase'
import FormContactUs from '../../../../dist/formcontactus'
import Overline from '../../../templates/overline'
import LinkButton from '../../../templates/linkbutton'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Sections/Form',
  tags: ['autodocs'],
}

const MOCK = {
  "title": "Contact sales",
  "hubspot": {
    "formId": "a3b0bf4c-c170-4988-a21a-f109055c4b70",
    "companyId": "5759082"
  },
  "form": {
    "title": "Get in touch with us",
    "description": "We’re here to help you get started and make the most of your free Azion account. Our Sales team can also help you with a variety of topics including new orders and special pricing for large volumes or long-term commitments. If you’d like the Azion Sales team to contact you to discuss your project, please fill out this form.",
    "name": "First name",
    "namePlaceholder": "Enter your name",
    "email": "Corporate email",
    "emailPlaceholder": "Enter your corporate email",
    "segment": "Business segment",
    "segmentPlaceholder": "Please select a business segment",
    "segmentData": [
      {
        "value": "Education",
        "label": "Education"
      },
      {
        "value": "Energy",
        "label": "Energy"
      },
      {
        "value": "Finance",
        "label": "Finance"
      },
      {
        "value": "Games",
        "label": "Games"
      },
      {
        "value": "Health",
        "label": "Health"
      },
      {
        "value": "Industry",
        "label": "Industry"
      },
      {
        "value": "Mídia",
        "label": "Media"
      },
      {
        "value": "Public Sector",
        "label": "Public Sector"
      },
      {
        "value": "Retail",
        "label": "Retail"
      },
      {
        "value": "Services",
        "label": "Services"
      },
      {
        "value": "Technology",
        "label": "Technology"
      },
      {
        "value": "Telecom",
        "label": "Telecom"
      },
      {
        "value": "Transportation",
        "label": "Transportation"
      },
      {
        "value": "Other",
        "label": "Other"
      }
    ],
    "message": "Message",
    "terms": "I agree to receive communications from Azion",
    "buttonText": "Send message",
    "azionPrivacy": {
      "description": "Azion respects your privacy and uses your personal information only to provide and communicate about products and services. You can opt out of receiving our communications at any time. To learn more, check our",
      "link": "https://www.azion.com/en/documentation/agreements/privacy-policy/",
      "buttonText": "Privacy Policy"
    },
    "responseMessages": {
      "success": "Thank you for your interest in Azion. Our Sales team will contact you shortly.",
      "error": "Error while subscribing to Azion, try again later"
    }
  },
  "locations": {
    "overline": "Our Offices",
    "offices": [
      {
        "city": "Palo Alto, United States of America",
        "address": "228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301, United States of America",
        "button": {
          "label": "Map view",
          "link": "https://www.google.com/maps/place/228+Hamilton+Ave+3rd+floor,+Palo+Alto,+CA+94301,+USA/@37.4440664,-122.1621456,18z/data=!3m2!4b1!5s0x808fa4d01d714d8b:0xe2d1218ab86f1b27!4m5!3m4!1s0x808fbb3a306b3c7d:0x3696e7afdc817b36!8m2!3d37.4440643!4d-122.1610486"
        }
      },
      {
        "city": "Porto Alegre, Brazil",
        "address": "Praça Dr. Maurício Cardoso, 71 - 4th floor, Porto Alegre, RS, Brazil - ZIP 90570-010",
        "button": {
          "label": "Map view",
          "link": "https://www.google.com/maps/place/Azion+Technologies/@-30.0230879,-51.2028172,19.29z/data=!4m13!1m7!3m6!1s0x951979b79c535261:0xf7588aa4c46cd60c!2sPra%C3%A7a+Dr.+Maur%C3%ADcio+Cardoso,+71+-+Moinhos+de+Vento,+Porto+Alegre+-+RS,+90570-020!3b1!8m2!3d-30.0230911!4d-51.2027874!3m4!1s0x0:0x1ef1847a8ae37682!8m2!3d-30.0228381!4d-51.2027011"
        }
      },
      {
        "city": "São Paulo, Brazil",
        "address": "R. Butantã, 194 - 4th floor, São Paulo, SP, Brazil - ZIP 05424-000",
        "button": {
          "label": "Map view",
          "link": "https://www.google.com/maps/search/Rua+Butant%C3%A3,+194+-+4%C2%BA+andar,+SP,+Brasil+-C+05424-000+/@-23.5696306,-46.7002595,17z/data=!3m1!4b1?entry=ttu"
        }
      }
    ]
  },
  "card": {
    "overline": "Support",
    "title": "Do you need technical support?",
    "button": {
      "label": "Sign in to your account",
      "link": "https://tickets.azion.com/en/support/loginen/support/login",
      "severity": "secondary"
    }
  }
}

const template = `
<Container class="surface-ground">
  <div class="px-container flex flex-col gap-10 lg:gap-16">
    <h1 class="text-3xl font-medium"> {{ args.title }}</h1>
    <div class="grid gap-y-10 lg:gap-x-20 grid-cols-1 lg:grid-cols-[minmax(0,_768px)_320px]">
      <FormContactUs class="w-full" requester="https://www.azion.com" requesterName="Azion" :hubspot="args.hubspot"
        :t="args.form" :responseMessages="args.form.responseMessages" />
      <div class="row-span-2">
        <div class="lg:top-20 lg:sticky">
          <div class="flex flex-col p-1 gap-10">
            <div class="flex flex-col gap-10">
              <Overline :label="args.locations.overline" />
              <div v-for="({ city, address, button }) in args.locations.offices" class="flex flex-col gap-3">
                <p class="font-medium text-lg">{{ city }}</p>
                <p class="text-sm text-color-secondary"> {{ address }} </p>
                <div>
                  <LinkButton v-bind="button" outlined iconPos="left" icon="pi-map-marker" />
                </div>
              </div>
            </div>
            <CardBase>
              <template #content>
                <Overline :label="args.card.overline" />
                <CardTitle> {{ args.card.title }} </CardTitle>
              </template>
              <template #actions>
                <LinkButton :link="args.card.button.link" :severity="args.card.button.severity" :label="args.card.button.label" size="small" />
              </template>
            </CardBase>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>`

const Template = (args) => ({
  components: { FormContactUs, CardBase, Overline, CardTitle, LinkButton, Container },
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
