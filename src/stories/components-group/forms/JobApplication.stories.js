import BePartner from '../../../../dist/formjobapplication'

export default {
  title: 'Components Group/Forms/Job Application',
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
    "title": "Do you want to work, teach and learn at Azion?",
    "description": "Fill the form to apply for this position.",
    "fields": {
      "firstName": "First Name:",
      "lastName": "Last Name:",
      "email": "Email Address:",
      "contactNumber": "Contact Number:",
      "linkedin": "LinkedIn Profile URL:",
      "resume": {
        "label": "Résumé: .pdf, .odt, .txt, .docx, .doc, .rtf (limit 5MB)",
        "buttonText": "Choose file",
        "invalidFileTypeMessage": ""
      },
      "deseriredSalaray": "Desired Salary:",
      "address": "Address:",
      "city": "City:",
      "province": "State/Province:",
      "zip": "Postal Code"
    },
    "errors": {
      "firstNameRequiredError": "First Name is required.",
      "lastNameRequiredError": "Last Name is required.",
      "emailRequiredError": "You must enter a valid e-mail",
      "phoneRequiredError": "Contact Number is required.",
      "resumeRequiredError": "You must upload your resume.",
      "linkedinRequiredError": "You must provide a LinkedIn Profile",
      "salaryRequiredError": "Desired salary is required."
    },
    "button": {
      "label": "Submit application"
    },
    "feedbackMessages": {
      "success": "Thank you for your interest in Azion.",
      "error": "Something went wrong, try again"
    }
  },
}

export const Default = {
  args: props
}
