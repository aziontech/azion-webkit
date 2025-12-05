import SectionCards2Column from '../../blocks/SectionCards2Column'

export default {
  title: 'Blocks/Rebranding/SectionCards2Column',
  component: SectionCards2Column,
  tags: ['autodocs'],
  argTypes: {
    cards: {
      control: 'object',
      description: 'Array of card objects with icon, title, and descriptionRawMarkdown'
    },
    id: {
      control: 'text',
      description: 'HTML id attribute for the section'
    },
    bottomSpacing: {
      control: 'select',
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      description: 'Bottom margin spacing'
    }
  }
}

const Template = (args) => ({
  components: { SectionCards2Column },
  setup() {
    return { args }
  },
  template: '<SectionCards2Column v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  cards: [
    {
      icon: 'pi pi-bolt',
      title: 'Ultra-Low Latency',
      descriptionRawMarkdown:
        'Deploy your applications at the **edge** for millisecond response times and improved user experience worldwide.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Advanced Security',
      descriptionRawMarkdown:
        'Protect your infrastructure with **DDoS mitigation**, WAF, and real-time threat detection at the edge.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Real-time Analytics',
      descriptionRawMarkdown:
        'Monitor your applications with comprehensive **metrics** and insights delivered in real-time.'
    },
    {
      icon: 'pi pi-globe',
      title: 'Global Network',
      descriptionRawMarkdown:
        'Deploy to **100+ edge locations** worldwide. Reach your users with the lowest possible latency.'
    }
  ],
  bottomSpacing: 'mb-24'
}

export const WithLinks = Template.bind({})
WithLinks.args = {
  cards: [
    {
      icon: 'pi pi-code',
      title: 'Edge Functions',
      descriptionRawMarkdown:
        'Build serverless functions that run at the edge. [Learn more](https://www.azion.com/en/products/edge-functions/) about our Edge Runtime.'
    },
    {
      icon: 'pi pi-database',
      title: 'Edge Storage',
      descriptionRawMarkdown:
        'Store and retrieve data at the edge with ultra-low latency. Perfect for [dynamic content](https://www.azion.com) and user data.'
    },
    {
      icon: 'pi pi-cog',
      title: 'Easy Integration',
      descriptionRawMarkdown:
        'Integrate with your existing tools and workflows. Support for **Git**, **CI/CD**, and [popular frameworks](https://www.azion.com/en/documentation/).'
    },
    {
      icon: 'pi pi-users',
      title: 'Collaboration',
      descriptionRawMarkdown:
        'Work together with your team using our [collaboration tools](https://www.azion.com). Share resources and manage permissions easily.'
    }
  ],
  bottomSpacing: 'mb-24'
}

export const WithoutIcons = Template.bind({})
WithoutIcons.args = {
  cards: [
    {
      title: '99.99% Uptime SLA',
      descriptionRawMarkdown:
        'Industry-leading **uptime guarantee** for your mission-critical applications with comprehensive monitoring.'
    },
    {
      title: '24/7 Expert Support',
      descriptionRawMarkdown:
        'Expert support team available around the clock to help you succeed. Priority response for business plans.'
    },
    {
      title: 'Pay as You Go',
      descriptionRawMarkdown:
        'Flexible pricing that scales with your usage. **No hidden fees** or long-term commitments required.'
    },
    {
      title: 'Free Tier Available',
      descriptionRawMarkdown:
        'Start building today with our generous free tier. No credit card required to get started.'
    }
  ],
  bottomSpacing: 'mb-24'
}

export const TwoCards = Template.bind({})
TwoCards.args = {
  cards: [
    {
      icon: 'pi pi-rocket',
      title: 'Fast Deployment',
      descriptionRawMarkdown:
        'Deploy your applications in **seconds**, not hours. Our edge platform ensures rapid delivery to production.'
    },
    {
      icon: 'pi pi-lock',
      title: 'Enterprise Security',
      descriptionRawMarkdown:
        'Bank-level security with **encryption**, compliance certifications, and advanced threat protection.'
    }
  ],
  bottomSpacing: 'mb-24'
}

export const CustomSpacing = Template.bind({})
CustomSpacing.args = {
  cards: [
    {
      icon: 'pi pi-star',
      title: 'Premium Features',
      descriptionRawMarkdown: 'Access all premium features with our **Business** and **Enterprise** plans.'
    },
    {
      icon: 'pi pi-heart',
      title: 'Customer Success',
      descriptionRawMarkdown: 'Dedicated customer success team to help you achieve your goals faster.'
    }
  ],
  bottomSpacing: 'mb-48',
  id: 'premium-section'
}
