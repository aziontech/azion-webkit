import BePartner from '../../../../dist/formbepartner'

export default {
  title: 'Components Group/Forms/Be Partner',
  component: BePartner,
  tags: ['autodocs'],
  argTypes: {
    t: {
      description: 'Translations'
    }
  }
}

const props = {
  requester: 'https://www.azion.com',
  requesterName: 'Page Title',
  hubspot: {
    formId: '492c448f-5331-4f1e-a21c-aa2e7a73f364',
    companyId: '5759082'
  },
  t: {
    title: 'Sé un socio',
    firstName: 'Nombre',
    firstNamePlaceholder: 'Ingrese su nombre',
    lastName: 'Apellido',
    lastNamePlaceholder: 'Ingrese su apellido',
    address: 'Dirección',
    addressPlaceholder: 'Ingrese su dirección',
    email: 'Correo electrónico corporativo',
    emailPlaceholder: 'Ingrese su correo electrónico corporativo',
    role: 'Cargo',
    rolePlaceholder: 'Por favor, seleccione un cargo',
    roleData: [
      {
        value: '',
        label: 'Seleccione'
      },
      {
        value: 'Administrador',
        label: 'Administrador'
      },
      {
        value: 'Asesor',
        label: 'Asesor'
      },
      {
        value: 'Analista',
        label: 'Analista'
      },
      {
        value: 'Arquitecto',
        label: 'Arquitecto'
      },
      {
        value: 'Asistente',
        label: 'Asistente'
      },
      {
        value: 'Auditor',
        label: 'Auditor'
      },
      {
        value: 'Comprador',
        label: 'Comprador'
      },
      {
        value: 'CDO - Chief Data Officer',
        label: 'CDO - Director de Datos'
      },
      {
        value: 'CDO - Chief Digital Officer',
        label: 'CDO - Director Digital'
      },
      {
        value: 'CEO – Chief Executive Officer',
        label: 'CEO – Director Ejecutivo'
      },
      {
        value: 'CFO – Chief Financial Officer',
        label: 'CFO – Director Financiero'
      },
      {
        value: 'CHRO – Chief Human Resources Officer',
        label: 'CHRO – Director de Recursos Humanos'
      },
      {
        value: 'CIO - Chief Information Officer',
        label: 'CIO - Director de Información'
      },
      {
        value: 'CISO - Chief Information Security Officer',
        label: 'CISO - Oficial de Seguridad de la Información'
      },
      {
        value: 'CMO – Chief Marketing Officer',
        label: 'CMO – Director de Marketing'
      },
      {
        value: 'Consultor',
        label: 'Consultor'
      },
      {
        value: 'Controlador',
        label: 'Controlador'
      },
      {
        value: 'COO – Chief Operating Officer',
        label: 'COO – Director de Operaciones'
      },
      {
        value: 'Coordinador',
        label: 'Coordinador'
      },
      {
        value: 'CPO - Chief Product Owner',
        label: 'CPO - Propietario Principal del Producto'
      },
      {
        value: 'CRO - Chief Revenue Officer',
        label: 'CRO - Director de Ingresos'
      },
      {
        value: 'CTO - Chief Technology Officer',
        label: 'CTO - Director de Tecnología'
      },
      {
        value: 'CXO - Chief experience officer',
        label: 'CXO - Director de Experiencia'
      },
      {
        value: 'Decano',
        label: 'Decano'
      },
      {
        value: 'Diseñador',
        label: 'Diseñador'
      },
      {
        value: 'Desarrollador',
        label: 'Desarrollador'
      },
      {
        value: 'Director',
        label: 'Director'
      },
      {
        value: 'Ingeniero',
        label: 'Ingeniero'
      },
      {
        value: 'Experto',
        label: 'Experto'
      },
      {
        value: 'Fundador',
        label: 'Fundador'
      },
      {
        value: 'Jefe',
        label: 'Jefe'
      },
      {
        value: 'Gerente',
        label: 'Gerente'
      },
      {
        value: 'Propietario',
        label: 'Propietario'
      },
      {
        value: 'Socio',
        label: 'Socio'
      },
      {
        value: 'Presidente',
        label: 'Presidente'
      },
      {
        value: 'Secretario',
        label: 'Secretario'
      },
      {
        value: 'Especialista',
        label: 'Especialista'
      },
      {
        value: 'Superintendente',
        label: 'Superintendente'
      },
      {
        value: 'Supervisor',
        label: 'Supervisor'
      },
      {
        value: 'Vicepresidente',
        label: 'Vicepresidente'
      }
    ],
    country: 'País',
    countryPlaceholder: 'Seleccione un país',
    countryData: [
      {
        value: '',
        label: 'Por favor, seleccione'
      },
      {
        value: 'Angola',
        label: 'Angola'
      },
      {
        value: 'Argentina',
        label: 'Argentina'
      },
      {
        value: 'Australia',
        label: 'Australia'
      },
      {
        value: 'Bélgica',
        label: 'Bélgica'
      },
      {
        value: 'Bolivia',
        label: 'Bolivia'
      },
      {
        value: 'Botsuana',
        label: 'Botsuana'
      },
      {
        value: 'Brasil',
        label: 'Brasil'
      },
      {
        value: 'Brunéi',
        label: 'Brunéi'
      },
      {
        value: 'Canadá',
        label: 'Canadá'
      },
      {
        value: 'Islas Caimán',
        label: 'Islas Caimán'
      },
      {
        value: 'Chile',
        label: 'Chile'
      },
      {
        value: 'China',
        label: 'China'
      },
      {
        value: 'Colombia',
        label: 'Colombia'
      },
      {
        value: 'Costa Rica',
        label: 'Costa Rica'
      },
      {
        value: 'Cuba',
        label: 'Cuba'
      },
      {
        value: 'República Checa',
        label: 'República Checa'
      },
      {
        value: 'Dinamarca',
        label: 'Dinamarca'
      },
      {
        value: 'República Dominicana',
        label: 'República Dominicana'
      },
      {
        value: 'Ecuador',
        label: 'Ecuador'
      },
      {
        value: 'El Salvador',
        label: 'El Salvador'
      },
      {
        value: 'Estonia',
        label: 'Estonia'
      },
      {
        value: 'Francia',
        label: 'Francia'
      },
      {
        value: 'Alemania',
        label: 'Alemania'
      },
      {
        value: 'Guatemala',
        label: 'Guatemala'
      },
      {
        value: 'Haití',
        label: 'Haití'
      },
      {
        value: 'Honduras',
        label: 'Honduras'
      },
      {
        value: 'India',
        label: 'India'
      },
      {
        value: 'Israel',
        label: 'Israel'
      },
      {
        value: 'Italia',
        label: 'Italia'
      },
      {
        value: 'Japón',
        label: 'Japón'
      },
      {
        value: 'Líbano',
        label: 'Líbano'
      },
      {
        value: 'Luxemburgo',
        label: 'Luxemburgo'
      },
      {
        value: 'México',
        label: 'México'
      },
      {
        value: 'Mozambique',
        label: 'Mozambique'
      },
      {
        value: 'Países Bajos',
        label: 'Países Bajos'
      },
      {
        value: 'Nicaragua',
        label: 'Nicaragua'
      },
      {
        value: 'Noruega',
        label: 'Noruega'
      },
      {
        value: 'Panamá',
        label: 'Panamá'
      },
      {
        value: 'Paraguay',
        label: 'Paraguay'
      },
      {
        value: 'Perú',
        label: 'Perú'
      },
      {
        value: 'Polonia',
        label: 'Polonia'
      },
      {
        value: 'Portugal',
        label: 'Portugal'
      },
      {
        value: 'Singapur',
        label: 'Singapur'
      },
      {
        value: 'Eslovaquia',
        label: 'Eslovaquia'
      },
      {
        value: 'España',
        label: 'España'
      },
      {
        value: 'Suecia',
        label: 'Suecia'
      },
      {
        value: 'Suiza',
        label: 'Suiza'
      },
      {
        value: 'Taiwán',
        label: 'Taiwán'
      },
      {
        value: 'Túnez',
        label: 'Túnez'
      },
      {
        value: 'Turquía',
        label: 'Turquía'
      },
      {
        value: 'Reino Unido',
        label: 'Reino Unido'
      },
      {
        value: 'Estados Unidos',
        label: 'Estados Unidos'
      },
      {
        value: 'Uruguay',
        label: 'Uruguay'
      },
      {
        value: 'Venezuela',
        label: 'Venezuela'
      },
      {
        value: 'Eswatini',
        label: 'Eswatini'
      },
      {
        value: 'Ucrania',
        label: 'Ucrania'
      },
      {
        value: 'Bulgaria',
        label: 'Bulgaria'
      },
      {
        value: 'Níger',
        label: 'Níger'
      }
    ],
    city: 'Ciudad',
    cityPlaceholder: 'Ingrese su ciudad',
    terms: 'Acepto recibir comunicaciones de Azion',
    buttonText: 'Enviar mensaje',
    azionPrivacy: {
      description:
        'Azion respeta tu privacidad y utiliza tu información personal solo para proveer y comunicar sobre productos y servicios. Puedes optar por no recibir nuestras comunicaciones en cualquier momento. Para obtener más información, consulta nuestra ',
      link: 'https://www.azion.com/en/documentation/agreements/privacy-policy/',
      buttonText: 'Política de Privacidad.'
    }
  },
  responseMessages: {
    success:
      'Gracias por su interés en Azion. Nuestro equipo de ventas se pondrá en contacto con usted en breve.',
    error: 'Error al suscribirse a Azion, intente nuevamente más tarde'
  }
}

export const Default = {
  args: props
}
