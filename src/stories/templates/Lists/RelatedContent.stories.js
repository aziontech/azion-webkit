import Divider from 'primevue/divider'
import CardGridListWithLoadMore from '../../../templates/cardgridlistwithloadmore'

export default {
  title: 'Blocks/List/Related Content',
  tags: ['autodocs'],
  argTypes: {

  }
}

const MOCK = {
  cards: {
    "data": [
      {
        "tagList": [
          "Developers"
        ],
        "title": "Enhancing Data Management with Azion's Edge Storage",
        "description": "Explore Azion Edge Storage: a direct S3 API compatible object storage solution offering scalability, no egress charges, and serverless architecture for improved data management and application performance.",
        "link": "/en/blog/enhancing-data-management-with-azion-edge-storage/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/storage-image.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/image-1-1.png",
            "title": "Gabriel França",
            "role": "Dev Writer"
          }
        ],
        "date": "MAY 9, 2024",
        "estimateReadTime": "8 min read"
      },
      {
        "tagList": [
          "Developers"
        ],
        "title": "Enhancing Edge Functions Debugging with Azion CLI Logs",
        "description": "Explore how to debug and monitor edge functions using Azion CLI with real-time logs. Master command usage for local and network edge insights.",
        "link": "/en/blog/enhancing-edge-functions-debugging-with-azion-cli-logs/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/azion-logs.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/image-1-1.png",
            "title": "Gabriel França",
            "role": "Dev Writer"
          }
        ],
        "date": "MAY 9, 2024",
        "estimateReadTime": "6 min read"
      },
      {
        "tagList": [
          "Developers",
          "Caching"
        ],
        "title": "Implement a Tiered Cache and Reduce Costs for Your E-commerce",
        "description": "Optimize e-commerce with Edge Computing: Enhance performance and scalability by implementing an efficient Tiered Cache strategy with Azion Edge Application.",
        "link": "/en/blog/implement-tiered-cache/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/transformtheonlineshopping_2022_blogpost_v2.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/img-prof.png",
            "title": "Mariana Bellorín Aguilera",
            "role": "Technical Writer"
          }
        ],
        "date": "APR 24, 2024",
        "estimateReadTime": "7 min read"
      },
      {
        "tagList": [
          "Developers"
        ],
        "title": "Boost Software Quality: Local Development with Azion CLI",
        "description": "Master Edge Functions with Azion CLI for local development and testing. Enhance software security, optimize performance, and streamline debugging.",
        "link": "/en/blog/boost-software-quality-with-azion-cli-local-dev/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/local-dev.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/image-1-1.png",
            "title": "Gabriel França",
            "role": "Dev Writer"
          }
        ],
        "date": "APR 19, 2024",
        "estimateReadTime": "8 min read"
      },
      {
        "tagList": [
          "Developers"
        ],
        "title": "Unlock Effortless Edge Deployment with Azion Vulcan and Node.js Polyfills",
        "description": "Explore how Azion's Edge Runtime and Vulcan enhance web development by enabling frameworks to run natively at the edge, optimizing speed and security.",
        "link": "/en/blog/effortless-edge-deployment-with-vulcan/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/azion-cells-technical-approach-and-the-future-of-serverless-computing.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/image-1-1.png",
            "title": "Gabriel França",
            "role": "Dev Writer"
          }
        ],
        "date": "FEB 26, 2024",
        "estimateReadTime": "8 min read"
      },
      {
        "tagList": [
          "Developers"
        ],
        "title": "Azion Console Kit: Building a new interface",
        "description": "Explore the Azion Console Kit, enhancing user interface for Edge Computing with innovative Azion Blocks and open source toolkits for robust app development.",
        "link": "/en/blog/console-kit-building-a-new-interface/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbnailblog-codeeditor-chatgpt-440x343px.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/morgana-johann.png",
            "title": "Morgana Johann",
            "role": "Product Design Manager"
          }
        ],
        "date": "FEB 21, 2024",
        "estimateReadTime": "6 min read"
      },
      {
        "tagList": [
          "Company News",
          "Developers"
        ],
        "title": "Supercharge Your Content Delivery Strategy With These Azion Templates",
        "description": "Discover top-notch templates for Edge Applications to enhance content delivery, reduce latency, and optimize user experience with Azion's robust Edge Computing platform.",
        "link": "/en/blog/supercharge-content-delivery-azion-templates/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/cdn-abre.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",
            "title": "Thiago Silva",
            "role": "Technical Researcher"
          }
        ],
        "date": "FEB 14, 2024",
        "estimateReadTime": "5 min read"
      },
      {
        "tagList": [
          "Security"
        ],
        "title": "Azion’s WAF Is the Best Option for Businesses of All Sectors",
        "description": "Explore how Azion's Web Application Firewall (WAF) fosters cybersecurity in diverse sectors, optimizes digital transformation, and uses edge computing for swift, efficient security solutions.",
        "link": "/en/blog/azion-waf-best-option-businesses/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/waf-abre-02.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/retrato_branco_quadrado.png",
            "title": "Rafael Rigues",
            "role": "Technical Researcher"
          }
        ],
        "date": "FEB 9, 2024",
        "estimateReadTime": "9 min read"
      },
      {
        "tagList": [
          "Security"
        ],
        "title": "The Experts Speak: Cybersecurity Quotes About Zero-Trust, WAF, Social Engineering, and More",
        "description": "Explore expert insights on cybersecurity, Zero Trust, social engineering, and WAF capabilities at Azion Edge.",
        "link": "/en/blog/the-experts-speak-cybersecurity-quotes-about-zero-trust-waf-social-engineering/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbblog-whatiswaf-440x343px-1.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/foto-isidro-iturat-2022.png",
            "title": "Isidro Iturat Hernández",
            "role": "Technical Researcher"
          }
        ],
        "date": "JAN 31, 2024",
        "estimateReadTime": "7 min read"
      },
      {
        "tagList": [
          "Developers",
          "Company News"
        ],
        "title": "Leverage the Power of Edge Computing with Azion's New Set of Templates",
        "description": "Discover Azion's Edge Computing templates to enhance web app development, streamline deployment, and optimize performance with tools like MongoDB, Hexo, and Fauna.",
        "link": "/en/blog/azion-new-set-templates-dev/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbnailblog-4templatesimproveexperience-440x343px-1.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",
            "title": "Thiago Silva",
            "role": "Technical Researcher"
          }
        ],
        "date": "JAN 29, 2024",
        "estimateReadTime": "5 min read"
      },
      {
        "tagList": [
          "Security",
          "Market Trends"
        ],
        "title": "Five Ways HTTP/3 Can Increase the Security of Your Applications",
        "description": "Explore how HTTP/3 ensures web security with TLS 1.3 encryption, QUIC protocol, and IP spoofing prevention, enhancing performance for web applications.",
        "link": "/en/blog/five-ways-http3-increase-application-security/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbnailblog-http-3-440x343.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/retrato_branco_quadrado.png",
            "title": "Rafael Rigues",
            "role": "Technical Researcher"
          }
        ],
        "date": "JAN 26, 2024",
        "estimateReadTime": "7 min read"
      },
      {
        "tagList": [
          "Observability",
          "Security",
          "Company News"
        ],
        "title": "Enhance the security of your applications with the new Fingerprint feature of the Azion Marketplace",
        "description": "Explore Azion Fingerprint for enhanced application security and device identification. Secure, scalable, and quick to implement.",
        "link": "/en/blog/enhance-security-azion-fingerprint/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbnailblog-fingerprint-v2-440x343px.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",
            "title": "Thiago Silva",
            "role": "Technical Researcher"
          }
        ],
        "date": "JAN 19, 2024",
        "estimateReadTime": "6 min read"
      },
      {
        "tagList": [
          "Security",
          "Market Trends"
        ],
        "title": "Why did the WAF become essential for cybersecurity?",
        "description": "Explore how Azion WAF ensures advanced cybersecurity against evolving threats with flexible rules and minimal operational complexity.",
        "link": "/en/blog/why-waf-essential-cybersecurity/",
        "linkTarget": "_self",
        "image": "https://www.azion.com/assets/blog/images/uploads/thumbblog-why-choose-the-azion-waf.png",
        "authors": [
          {
            "avatar": "https://www.azion.com/assets/blog/images/uploads/retrato_branco_quadrado.png",
            "title": "Rafael Rigues",
            "role": "Technical Researcher"
          }
        ],
        "date": "JAN 18, 2024",
        "estimateReadTime": "5 min read"
      },
    ],
  },
  title: "Related Content",
  "buttonText": "Show more",
    cardsAdded: 3
}

const template = `
  <div class="px-container w-full flex items-center flex-col gap-4 md:gap-10 surface-ground">
    <Divider align="center" type="dotted">
      {{ title }}
    </Divider>

    <div class="max-w-7xl flex flex-col gap-4 md:gap-10">
      <CardGridListWithLoadMore
        cardType="blog"
        cardDirection="row"
        :pt="{ content: { class: 'grid-cols-1' } }"
        :data="args.cards.data"
        :buttonText="args.buttonText"
        :loadMoreNumber="args.cardsAdded"
      />
    </div>
  </div>`

const Template = (args) => ({
  components: { CardGridListWithLoadMore, Divider },
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
  },
};
