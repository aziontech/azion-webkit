import SectionCardNavigation from '../../../templates/sectioncardnavigation'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-navigation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.title}
${Rules.section.description}
${Rules.section.cardsNavigation}
        `
      }
    }
  }
}

const MOCK = {
  title: 'Learning Center',
  description:
    "Explore key resources on edge computing and Internet functionality with Azion's comprehensive Learning Center.",
  cards: [
    {
      title: 'Bots',
      description:
        'Bots are automated software programs that perform repetitive tasks on websites and applications. While some bots like search engine crawlers are beneficial, malicious bots can cause significant harm to businesses in multiple ways.',
      links: [
        {
          label: 'What is a Bot?',
          link: '/en/learning/bots/what-is-a-bot/'
        },
        {
          label: 'What is a Bot Attack?',
          link: '/en/learning/bots/what-is-a-bot-attack/'
        },
        {
          label: 'What is Bot Management?',
          link: '/en/learning/bots/what-is-bot-management/'
        },
        {
          label: 'What is Credential Stuffing?',
          link: '/en/learning/bots/what-is-credential-stuffing/'
        }
      ]
    },
    {
      title: 'CDN',
      description:
        'The primary goal of a CDN is to reduce latency and improve the speed at which static content is delivered by caching it on servers closer to the end-users',
      links: [
        {
          label: 'What is a CDN?',
          link: '/en/learning/cdn/what-is-a-cdn/'
        },
        {
          label: 'What is Caching?',
          link: '/en/learning/cdn/what-is-caching/'
        },
        {
          label: 'What is an Origin Server?',
          link: '/en/learning/cdn/what-is-an-origin-server/'
        },
        {
          label: 'What is Round-Trip Time (RTT)?',
          link: '/en/learning/cdn/what-is-round-trip-time-rtt/'
        }
      ]
    },
    {
      title: 'DDoS Attacks',
      description:
        'Get precious insights into DDoS attacks: what they are, the motivation behind them, their many kinds and the protective measures available to fortify your defenses today.',
      links: [
        {
          label: 'What Is a DDoS Attack?',
          link: '/en/learning/ddos/what-is-ddos-attack/'
        },
        {
          label: 'What Is a Botnet?',
          link: '/en/learning/ddos/what-is-a-ddos-botnet/'
        },
        {
          label: 'What Are Application Layer Attacks?',
          link: '/en/learning/ddos/application-layer-attack/'
        },
        {
          label: 'What Is DDoS Protection and Mitigation?',
          link: '/en/learning/ddos/what-is-ddos-protection-and-mitigation/'
        }
      ]
    },
    {
      title: 'Jamstack',
      description:
        'With Jamstack you decouple the frontend and backend of a website, allowing for faster performance, better scalability, and improved security.',
      links: [
        {
          label: 'What is Jamstack?',
          link: '/en/learning/jamstack/what-is-jamstack/'
        },
        {
          label: 'Why use Jamstack?',
          link: '/en/learning/jamstack/why-use-jamstack/'
        },
        {
          label: 'Jamstack and Ecommerce',
          link: '/en/learning/jamstack/jamstack-and-ecommerce/'
        },
        {
          label: 'Top Jamstack Frameworks',
          link: '/en/learning/jamstack/top-jamstack-frameworks/'
        }
      ]
    },
    {
      title: 'Microservices',
      description:
        'Microservices architecture involves independent, deployable services, offering modularity and scalability.',
      links: [
        {
          label: 'What are Microservices?',
          link: '/en/learning/microservices/what-are-microservices/'
        },
        {
          label: 'Designing Microservices Applications',
          link: '/en/learning/microservices/designing-microservices-applications/'
        },
        {
          label: 'Monolithic Applications vs. Microservices',
          link: '/en/learning/microservices/monolithic-applications-vs-microservices/'
        }
      ]
    },

    {
      title: 'Network Layer',
      description:
        'Discover how the network layer enables data packet routing and delivery between networks, ensuring efficient communication through addressing, packet forwarding, and optimal path selection.',
      links: [
        {
          label: 'What is the Network Layer?',
          link: '/en/learning/network-layer/what-is-the-network-layer/'
        },
        {
          label: 'What is Network Security?',
          link: '/en/learning/network-layer/what-is-network-security/'
        },
        {
          label: 'What is Routing?',
          link: '/en/learning/network-layer/what-is-routing/'
        },
        {
          label: 'What is GRE Tunneling?',
          link: '/en/learning/network-layer/what-is-gre-tunneling/'
        }
      ]
    },
    {
      title: 'Performance',
      description:
        'Optimizing site speed can outsize the user experience, SEO rankings, and conversion rates. Website performance provides a competitive advantage over slower sites.',
      links: [
        {
          label: 'What is Site Speed?',
          link: '/en/learning/performance/what-is-site-speed/'
        },
        {
          label: 'Why Website Performance Impact Conversion Rates?',
          link: '/en/learning/performance/website-performance-and-conversion-rates/'
        },
        {
          label: 'What is Latency?',
          link: '/en/learning/performance/what-is-latency/'
        },
        {
          label: 'What is Load Balancing?',
          link: '/en/learning/performance/what-is-load-balancing/'
        }
      ]
    },
    {
      title: 'Serverless',
      description:
        'Serverless computing is transforming the way applications are developed, deployed, and scaled. Developers can abstract the underlying infrastructure and focus on write code and deliver value to their users.',
      links: [
        {
          label: 'What is Serverless?',
          link: '/en/learning/serverless/what-is-serverless/'
        },
        {
          label: 'Serverless vs. Containers',
          link: '/en/learning/serverless/serverless-vs-containers/'
        },
        {
          label: 'What is Function-as-a-Service (FasS)?',
          link: '/en/learning/serverless/what-is-function-as-a-service-faas/'
        },
        {
          label: 'What is Platform-as-a-Service (PaaS)?',
          link: '/en/learning/serverless/what-is-platform-as-a-service-paas/'
        }
      ]
    },
    {
      title: 'Web Application Security',
      description:
        'Get to know the processes, practices, and technologies designed to protect web applications from threats and vulnerabilities that could compromise their integrity, availability, or confidentiality.',
      links: [
        {
          label: 'What is Web Application Security?',
          link: '/en/learning/websec/what-is-web-application-security/'
        },
        {
          label: 'What is the OWASP Top 10 List of Threats?',
          link: '/en/learning/websec/what-is-the-owasp-top-10-list-of-web-application-security-threats/'
        },
        {
          label: 'What is a Web Application Firewall (WAF)?',
          link: '/en/learning/websec/what-is-web-application-firewall/'
        },
        {
          label: 'How Does a WAF Protect Against Threats?',
          link: '/en/learning/websec/how-does-waf-protect-against-cyberthreats/'
        },
        {
          label: 'What are WAF bypass attacks?',
          link: '/en/learning/websec/what-are-waf-bypass-attacks/'
        },
        {
          label: 'What is API Security? ',
          link: '/en/learning/websec/api/what-is-api-security/'
        }
      ]
    }
  ]
}

const template = `
<Container class="px-container surface-ground">
  <SectionCardNavigation v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionCardNavigation, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template }
  }
}
