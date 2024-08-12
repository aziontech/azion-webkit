import BePartner from '../../../../dist/formcontactus'

export default {
  title: '1. Blocks/Forms/Contact Us',
  component: BePartner,
  tags: ['autodocs'],
  argTypes: {
    t: {
      description: "Translations"
    }
  }
};

const props = {
  requester: "https://www.azion.com",
  requesterName: "Page Title",
  "hubspot": {
    "formId": "492c448f-5331-4f1e-a21c-aa2e7a73f364",
    "companyId": "5759082"
  },
  "responseMessages": {
    "success": "Gracias por su interés en Azion. Nuestro equipo de ventas se pondrá en contacto con usted en breve.",
    "error": "Error al suscribirse a Azion, intente nuevamente más tarde"
  },
  "t": {
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
}

export const Default = {
  args: props
}
