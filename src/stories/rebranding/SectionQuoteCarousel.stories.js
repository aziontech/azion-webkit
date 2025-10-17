import SectionQuoteCarousel from '../../blocks/SectionQuoteCarousel/SectionQuoteCarousel.vue'

export default {
  title: 'Blocks/Rebranding/SectionQuoteCarousel',
  component: SectionQuoteCarousel,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of quote items to display in the carousel'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The SectionQuoteCarousel component displays a collection of quotes/testimonials in a carousel format using Swiper. Each quote includes a logo, testimonial text, and source attribution.

### Features
- Swiper carousel layout with grab cursor for smooth navigation
- Responsive design with different slides per view based on screen size
- Custom navigation buttons with orange theme
- Logo support with HTML content
- Testimonial text and source attribution
- Mobile-responsive design
        `
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

const Template = (args) => ({
  components: { SectionQuoteCarousel },
  setup() {
    return { args }
  },
  template: `<SectionQuoteCarousel v-bind="args" class="p-6" />`
})

const gartnerLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" fill="none">
  <text x="0" y="24" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="currentColor">Gartner</text>
</svg>
`

const gigaomLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" fill="none">
  <text x="0" y="24" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="currentColor">GigaOm</text>
</svg>
`

const forresterLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="32" viewBox="0 0 140 32" fill="none">
  <text x="0" y="24" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="currentColor">Forrester</text>
</svg>
`

const mockQuotes = [
  {
    logo: gartnerLogo,
    testimonial:
      'Gartner clients note that Azion excels at providing a consultative approach to orchestration and serverless edge application environments.',
    source: 'Gartner Competitive Landscape for CDN and Edge Services.'
  },
  {
    logo: gigaomLogo,
    testimonial:
      'Azion was named a Leader and identified as the only purpose-built edge platform whose capabilities meet all of the key criteria outlined in the report.',
    source: 'GigaOms Radar for Edge Platforms.'
  },
  {
    logo: forresterLogo,
    testimonial:
      'Azion was named a Strong Performer and a good fit for large enterprises seeking to accelerate innovation at the edge with serverless full-stack applications.',
    source: 'Edge Development Platforms, Q4 2021.'
  }
]

export const Default = Template.bind({})
Default.args = {
  items: mockQuotes
}
