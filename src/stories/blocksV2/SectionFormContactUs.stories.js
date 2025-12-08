import SectionFormContactUs from '../../blocks/SectionFormContactUs/SectionFormContactUs.vue'

export default {
  title: 'Blocks/Rebranding/SectionFormContactUs',
  component: SectionFormContactUs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

const formConfig = {
  title: 'Get in touch with us',
  description:
    "We're here to help you get started and make the most of your free Azion account. Our Sales team can also help you with a variety of topics including new orders and special pricing for large volumes or long-term commitments. If you'd like the Azion Sales team to contact you to discuss your project, please fill out this form.",
  name: 'First name',
  namePlaceholder: 'Enter your name',
  phone: 'Phone number',
  phonePlaceholder: 'Enter your phone number',
  email: 'Corporate email',
  emailPlaceholder: 'Enter your corporate email',
  segment: 'Business segment',
  segmentPlaceholder: 'Please select a business segment',
  segmentData: [
    { value: 'Education', label: 'Education' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Games', label: 'Games' },
    { value: 'Health', label: 'Health' },
    { value: 'Industry', label: 'Industry' },
    { value: 'Mídia', label: 'Media' },
    { value: 'Public Sector', label: 'Public Sector' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Services', label: 'Services' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Other', label: 'Other' }
  ],
  message: 'Message',
  terms: 'I agree to receive communications from Azion',
  buttonText: 'Send message'
}

const hubspotConfig = {
  formId: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
  companyId: '5759082'
}

const responseMessages = {
  success: 'Thank you for your interest in Azion. Our Sales team will contact you shortly.',
  error: 'Error while subscribing to Azion, try again later'
}

const cards = [
  {
    title: 'Do you need technical support?',
    descriptionRawMarkdown:
      'Support\n\n<Button href="https://tickets.azion.com/en/support/login" type="secondary">Sign in to your account</Button>'
  },
  {
    title: 'Under Cyberattack?',
    descriptionRawMarkdown:
      'Mitigating Cyberattacks\n\n<Button href="/en/lp/under-attack-mitigation/" type="secondary">Request contact</Button>'
  }
]

const officeLocations = {
  overline: 'Our Offices',
  offices: [
    {
      city: 'Palo Alto, United States of America',
      address:
        '228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301, United States of America',
      button: {
        label: 'Map view',
        link: 'https://maps.app.goo.gl/wUATTRsySvcZqJi87'
      }
    },
    {
      city: 'Mexico City, Mexico',
      address:
        '505 Santa Fe Avenue, Cruz Manca Colony, Santa Fe, Cuajimalpa Municipality, Lomas de Santa Fe, Contadero, Cuajimalpa de Morelos, Mexico City, 01219',
      button: {
        label: 'Map view',
        link: 'https://maps.app.goo.gl/JNANNz13nTFqGn4t7'
      }
    },
    {
      city: 'Porto Alegre, Brazil',
      address:
        'Praça Dr. Maurício Cardoso, 71 - 4th floor, Porto Alegre, RS, Brazil - ZIP 90570-010',
      button: {
        label: 'Map view',
        link: 'https://www.google.com/maps/place/Azion+Technologies/@-30.0230879,-51.2028172,19.29z/data=!4m13!1m7!3m6!1s0x951979b79c535261:0xf7588aa4c46cd60c!2sPra%C3%A7a+Dr.+Maur%C3%ADcio+Cardoso,+71+-+Moinhos+de+Vento,+Porto+Alegre+-+RS,+90570-020!3b1!8m2!3d-30.0230911!4d-51.2027874!3m4!1s0x0:0x1ef1847a8ae37682!8m2!3d-30.0228381!4d-51.2027011'
      }
    },
    {
      city: 'São Paulo, Brazil',
      address: 'R. Butantã, 194 - 4th floor, São Paulo, SP, Brazil - ZIP 05424-000',
      button: {
        label: 'Map view',
        link: 'https://maps.app.goo.gl/dyXFyANbdeu1PkWX6'
      }
    }
  ]
}

export const Default = {
  name: '50x50 Layout',
  args: {
    id: 'contact-sales-form',
    type: '50x50',
    form: {
      ...formConfig,
      descriptionRawMarkdown: formConfig.description
    },
    hubspot: hubspotConfig,
    requester: 'https://www.azion.com',
    requesterName: 'Contact Sales',
    responseMessages: responseMessages,
    cards: cards,
    locations: officeLocations,
    lang: 'en',
    bottomSpacing: 'mb-24'
  }
}

export const SeventyThirty = {
  name: '70x30 Layout',
  args: {
    id: 'contact-sales-form-70-30',
    type: '70x30',
    form: {
      ...formConfig,
      descriptionRawMarkdown: formConfig.description
    },
    hubspot: hubspotConfig,
    requester: 'https://www.azion.com',
    requesterName: 'Contact Sales',
    responseMessages: responseMessages,
    cards: cards,
    locations: officeLocations,
    lang: 'en',
    bottomSpacing: 'mb-24'
  }
}
