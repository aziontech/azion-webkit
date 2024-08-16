import TableOfContents from "../../templates/tableofcontents"

export default {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  argTypes: {
    headings: {
      description: "MD/MDX Headings"
    }
  }
}

export const Default = {
  args: {
    headings: [
      {
        depth: 2,
        slug: 'understanding-bots-and-their-impact',
        text: 'Understanding Bots and Their Impact'
      },
      {
        depth: 2,
        slug: 'the-need-for-bot-management',
        text: 'The Need for Bot Management'
      },
      {
        depth: 2,
        slug: 'key-components-of-bot-management',
        text: 'Key Components of Bot Management'
      },
      { depth: 3, slug: 'bot-detection', text: 'Bot Detection' },
      { depth: 3, slug: 'bot-classification', text: 'Bot Classification' },
      { depth: 3, slug: 'bot-mitigation', text: 'Bot Mitigation' },
      {
        depth: 3,
        slug: 'reporting-and-analytics',
        text: 'Reporting and Analytics'
      },
      {
        depth: 2,
        slug: 'best-practices-for-bot-management',
        text: 'Best Practices for Bot Management'
      },
      {
        depth: 2,
        slug: 'choosing-the-right-bot-management-solution',
        text: 'Choosing the Right Bot Management Solution'
      }
    ],
    title:'Jump to Section',
    initialHeadingTitle: 'Overview'
  }
}
