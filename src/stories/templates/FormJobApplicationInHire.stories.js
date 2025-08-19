import FormJobApplicationInHire from '../../templates/formjobapplicationinhire'

export default {
  title: 'Templates/FormJobApplicationInHire',
  component: FormJobApplicationInHire,
  tags: ['autodocs'],
  argTypes: {
    t: {
      description: 'Translation object containing all text and field labels'
    },
    jobId: {
      description: 'Job ID for the application'
    },
    referrerId: {
      description: 'Optional referrer ID for tracking'
    },
    isLinkedinRefferer: {
      description: 'Flag to indicate if the referrer is from LinkedIn'
    },
    lang: {
      description: 'Language code to set default phone country (pt-br, es, en)',
      control: { type: 'select' },
      options: ['pt-br', 'es', 'en']
    }
  }
}

export const Default = {
  args: {
    t: {
      title: 'Apply for this position',
      description: 'Fill out the form below to apply for this position',
      fields: {
        name: 'Full Name',
        email: 'Email',
        contactNumber: 'Phone Number',
        resume: {
          label: 'Resume',
          buttonText: 'Choose File',
          invalidFileTypeMessage: 'Invalid file type. Please upload PDF, DOC, or DOCX.'
        },
        linkedin: 'LinkedIn Username',
        deseriredSalaray: 'Desired Salary',
        city: 'City',
        state: 'State/Province',
        country: 'Country',
        cityPlaceholder: 'Select a city',
        statePlaceholder: 'Select a state',
        countryPlaceholder: 'Select a country'
      },
      errors: {
        nameRequiredError: 'Name is required',
        emailRequiredError: 'Valid email is required',
        phoneRequiredError: 'Phone number is required',
        resumeRequiredError: 'Resume is required',
        linkedinRequiredError: 'LinkedIn username is required',
        targetSalaryRequiredError: 'Valid salary is required',
        cityRequiredError: 'City is required',
        stateRequiredError: 'State is required',
        countryRequiredError: 'Country is required'
      },
      button: {
        label: 'Submit Application'
      },
      feedbackMessages: {
        success: 'Application submitted successfully!',
        error: 'Error submitting application. Please try again.'
      }
    },
    jobId: 'job-123',
    referrerId: null,
    isLinkedinRefferer: false,
    lang: 'en'
  }
}

export const Portuguese = {
  args: {
    ...Default.args,
    t: {
      ...Default.args.t,
      title: 'Candidatar-se a esta vaga',
      description: 'Preencha o formulário abaixo para se candidatar a esta vaga',
      fields: {
        ...Default.args.t.fields,
        name: 'Nome Completo',
        email: 'E-mail',
        contactNumber: 'Número de Telefone',
        resume: {
          label: 'Currículo',
          buttonText: 'Escolher Arquivo',
          invalidFileTypeMessage: 'Tipo de arquivo inválido. Por favor, envie PDF, DOC ou DOCX.'
        },
        linkedin: 'Usuário do LinkedIn',
        deseriredSalaray: 'Salário Desejado',
        city: 'Cidade',
        state: 'Estado',
        country: 'País',
        cityPlaceholder: 'Selecione uma cidade',
        statePlaceholder: 'Selecione um estado',
        countryPlaceholder: 'Selecione um país'
      },
      errors: {
        nameRequiredError: 'Nome é obrigatório',
        emailRequiredError: 'E-mail válido é obrigatório',
        phoneRequiredError: 'Número de telefone é obrigatório',
        resumeRequiredError: 'Currículo é obrigatório',
        linkedinRequiredError: 'Usuário do LinkedIn é obrigatório',
        targetSalaryRequiredError: 'Salário válido é obrigatório',
        cityRequiredError: 'Cidade é obrigatória',
        stateRequiredError: 'Estado é obrigatório',
        countryRequiredError: 'País é obrigatório'
      },
      button: {
        label: 'Enviar Candidatura'
      },
      feedbackMessages: {
        success: 'Candidatura enviada com sucesso!',
        error: 'Erro ao enviar candidatura. Tente novamente.'
      }
    },
    lang: 'pt-br'
  }
}

export const Spanish = {
  args: {
    ...Default.args,
    t: {
      ...Default.args.t,
      title: 'Postularse a esta posición',
      description: 'Complete el formulario a continuación para postularse a esta posición',
      fields: {
        ...Default.args.t.fields,
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        contactNumber: 'Número de Teléfono',
        resume: {
          label: 'Currículum',
          buttonText: 'Elegir Archivo',
          invalidFileTypeMessage: 'Tipo de archivo inválido. Por favor, envíe PDF, DOC o DOCX.'
        },
        linkedin: 'Usuario de LinkedIn',
        deseriredSalaray: 'Salario Deseado',
        city: 'Ciudad',
        state: 'Estado',
        country: 'País',
        cityPlaceholder: 'Seleccione una ciudad',
        statePlaceholder: 'Seleccione un estado',
        countryPlaceholder: 'Seleccione un país'
      },
      errors: {
        nameRequiredError: 'El nombre es obligatorio',
        emailRequiredError: 'El correo electrónico válido es obligatorio',
        phoneRequiredError: 'El número de teléfono es obligatorio',
        resumeRequiredError: 'El currículum es obligatorio',
        linkedinRequiredError: 'El usuario de LinkedIn es obligatorio',
        targetSalaryRequiredError: 'El salario válido es obligatorio',
        cityRequiredError: 'La ciudad es obligatoria',
        stateRequiredError: 'El estado es obligatorio',
        countryRequiredError: 'El país es obligatorio'
      },
      button: {
        label: 'Enviar Postulación'
      },
      feedbackMessages: {
        success: '¡Postulación enviada exitosamente!',
        error: 'Error al enviar postulación. Inténtelo de nuevo.'
      }
    },
    lang: 'es'
  }
}

export const WithReferrer = {
  args: {
    ...Default.args,
    referrerId: 'ref-456',
    isLinkedinRefferer: true
  }
}
