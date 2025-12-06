import Container from '../../../templates/container'
import SectionForm from '../../../templates/sectionform'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-form',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.form}

### Form Configuration
- **Form ID:** HubSpot form ID (required)
- **Title:** Form title displayed above the form fields
- **Action:** Optional custom form action URL
- **Success Message:** Message displayed after successful form submission
- **Redirect:** Optional URL to redirect after form submission (if not provided, success message will be shown)
        `
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Section ID attribute'
    },
    form: {
      control: 'object',
      description: 'Form configuration object with id, title, action, successMessage, and redirect'
    },
    margin: {
      control: 'select',
      options: ['none', 'small', 'default', 'large'],
      description: 'Vertical spacing/margin for the section'
    }
  }
}

const config = (args) => {
  return {
    components: {
      SectionForm,
      Container
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionForm v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)

export const Default = Template.bind({})
Default.args = {
  id: 'contact-form',
  form: {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Get in touch with us',
    action: 'https://www.azion.com',
    successMessage:
      'Thank you for your interest in Azion. Our Sales team will contact you shortly.',
    redirect: ''
  },
  margin: 'default'
}

export const WithRedirect = Template.bind({})
WithRedirect.args = {
  id: 'contact-form-redirect',
  form: {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Contact our team',
    action: 'https://www.azion.com',
    successMessage: 'Thank you for your message!',
    redirect: 'https://www.azion.com/en/thank-you/'
  },
  margin: 'default'
}

export const NoMargin = Template.bind({})
NoMargin.args = {
  id: 'contact-form-no-margin',
  form: {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Sign up for our newsletter',
    successMessage: 'Thank you for subscribing!'
  },
  margin: 'none'
}
