import SectionTableContent from '../../../templates/sectiontable'
import { Default as tableMock } from '../../../mock/table'


export default {
  title: 'Blocks/Sections/section-table',
  component: SectionTableContent,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'HTML id attribute for the section',
      control: { type: 'text' }
    },
    isContentCentralized: {
      description: 'Whether to center the content',
      control: { type: 'boolean' }
    },
    overline: {
      description: 'Small text above the title',
      control: { type: 'text' }
    },
    titleTag: {
      description: 'HTML tag for the title',
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    title: {
      description: 'The main title of the section',
      control: { type: 'text' }
    },
    description: {
      description: 'Description text below the title',
      control: { type: 'text' }
    },
    descriptionRawHtml: {
      description: 'HTML description content',
      control: { type: 'text' }
    },
    table: {
      description: 'Table configuration object',
      control: { type: 'object' }
    },
    margin: {
      description: 'Section margin size',
      control: { type: 'select' },
      options: ['none', 'small', 'default', 'large']
    }
  }
}

export const Default = {
  args: {
    title: 'Comparação de Preços',
    description: 'Compare nossos diferentes planos de serviço e recursos',
    table: tableMock
  }
}

export const WithOverline = {
  args: {
    overline: 'Planos e Preços',
    title: 'Escolha Seu Plano',
    description: 'Selecione o plano perfeito para suas necessidades',
    table: tableMock
  }
}


