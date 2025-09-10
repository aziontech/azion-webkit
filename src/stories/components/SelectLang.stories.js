import SelectLang from '../../components/SelectLang/SelectLang.vue'

export default {
  title: 'Components/SelectLang',
  component: SelectLang,
  tags: ['autodocs'],
  argTypes: {
    i18nPages: {
      control: 'object',
      description: 'Array of internationalization pages with language options'
    },
    lang: {
      control: 'text',
      description: 'Current active language prefix'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A language selector dropdown component that allows users to switch between different language versions of a page.'
      }
    }
  }
}

export const Default = {
  args: {
    i18nPages: [
      {
        langPrefix: 'en',
        slug: '/en',
        lang: 'English'
      },
      {
        langPrefix: 'es',
        slug: '/es',
        lang: 'Español'
      },
      {
        langPrefix: 'pt',
        slug: '/pt-br',
        lang: 'Português'
      }
    ],
    lang: 'en'
  }
}

export const MultipleLanguages = {
  args: {
    i18nPages: [
      {
        langPrefix: 'en',
        slug: '/en/documentation',
        lang: 'English'
      },
      {
        langPrefix: 'es',
        slug: '/es/documentacion',
        lang: 'Español'
      },
      {
        langPrefix: 'pt',
        slug: '/pt-br/documentacao',
        lang: 'Português (Brasil)'
      },
      {
        langPrefix: 'fr',
        slug: '/fr/documentation',
        lang: 'Français'
      },
      {
        langPrefix: 'de',
        slug: '/de/dokumentation',
        lang: 'Deutsch'
      }
    ],
    lang: 'pt'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with multiple language options and Portuguese as the active language.'
      }
    }
  }
}

export const SpanishActive = {
  args: {
    i18nPages: [
      {
        langPrefix: 'en',
        slug: '/en/about',
        lang: 'English'
      },
      {
        langPrefix: 'es',
        slug: '/es/acerca-de',
        lang: 'Español'
      },
      {
        langPrefix: 'pt',
        slug: '/pt-br/sobre',
        lang: 'Português'
      }
    ],
    lang: 'es'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with Spanish as the active/selected language.'
      }
    }
  }
}

export const NoLanguages = {
  args: {
    i18nPages: null,
    lang: 'en'
  },
  parameters: {
    docs: {
      description: {
        story: 'When no i18nPages are provided, the component will not render (using v-if).'
      }
    }
  }
}

export const SingleLanguage = {
  args: {
    i18nPages: [
      {
        langPrefix: 'en',
        slug: '/documentation',
        lang: 'English'
      }
    ],
    lang: 'en'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with only one language option available.'
      }
    }
  }
}
