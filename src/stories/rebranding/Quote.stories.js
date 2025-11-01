import Quote from '../../components/Quote/Quote.vue'

export default {
  title: 'Components/Rebranding/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {
    logo: {
      control: { type: 'text' },
      description: 'Logo HTML string to display'
    },
    testimonial: {
      control: { type: 'text' },
      description: 'Testimonial text content'
    },
    source: {
      control: { type: 'text' },
      description: 'Source attribution text'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
The Quote component displays a single testimonial/quote with a logo, testimonial text, and source attribution.

### Features
- Logo support with HTML content
- Testimonial text display
- Source attribution
- Clean, minimal design
        `
      }
    }
  }
}

const Template = (args) => ({
  components: { Quote },
  setup() {
    return { args }
  },
  template: `<Quote v-bind="args" class="p-6 bg-black" />`
})

const logoMock = `<svg xmlns="http://www.w3.org/2000/svg" width="161" height="40" fill="none" viewBox="0 0 161 40">
  <path fill="currentColor" d="m114.146 15.43-.335 3.965h-1.625c-2.589 0-3.933 2.069-3.933 4.062v8.959h-4.571V15.43h4.344l.097 2.123c.91-1.451 2.503-2.123 4.474-2.123h1.549ZM82.373 32.416h-4.582v-8.98c0-1.885-.173-4.247-2.806-4.247-2.545 0-3.564 1.842-3.564 3.976v9.24H66.84V15.43h4.257l.098 2.167c.91-1.452 2.61-2.59 5.113-2.59 4.626 0 6.077 3.305 6.077 6.728l-.01 10.681Zm-17.538-3.965-.325 3.867a11.803 11.803 0 0 1-3.26.401c-4.323 0-5.58-1.982-5.58-5.969V10.642h4.593v4.788h4.561l-.314 3.965h-4.247v6.998c0 1.603.434 2.459 2.08 2.459.845.01 1.69-.13 2.492-.4ZM54.175 15.43l-.357 3.965h-1.246c-2.578 0-3.867 2.069-3.867 4.062v8.959h-4.583V15.43h4.334l.086 2.123c.921-1.44 2.514-2.123 4.485-2.123h1.148ZM23.42 30.531c-3.108 1.668-6.217 2.622-10.323 2.502C5.492 32.806 0 28.072 0 20.1 0 12.16 5.546 7.079 13.108 6.96c3.835-.054 7.258.91 9.944 3.282l-3.239 3.26c-1.657-1.418-4.094-2.242-7.02-2.112-4.755.217-7.626 3.684-7.69 8.428-.066 5.146 3.098 8.7 8.037 8.83 2.33.053 3.987-.25 5.428-.9v-5.254h-5.135l.347-4.322h9.63l.01 12.36Zm78.214-4.983H89.057c.358 2.167 2.07 3.477 4.193 3.542 2.069.055 3.217-.563 4.734-2.101l2.99 2.264c-2.124 2.621-4.68 3.575-7.594 3.575-5.114 0-8.938-3.575-8.938-8.905 0-5.33 3.814-8.905 8.754-8.905 5.448 0 8.428 3.304 8.428 9.154l.01 1.376Zm-4.593-3.564c-.14-2.145-1.744-3.5-3.965-3.412-2.21.086-3.715 1.538-4.019 3.412h7.984ZM41.23 21.29v11.126h-4.051l-.098-1.68c-1.235 1.54-3.25 2.092-5.33 2.092-3.12 0-6.066-1.539-6.131-5.124-.087-5.633 6.348-6.034 10.389-6.034h.812v-.228c0-1.863-1.235-2.87-3.553-2.87-1.69.01-3.304.65-4.54 1.809l-2.642-2.687a11.557 11.557 0 0 1 7.561-2.676c5.265 0 7.583 2.427 7.583 6.273Zm-4.409 3.716h-.64c-2.166 0-5.979.109-5.968 2.384.022 3.206 6.608 2.177 6.608-1.68v-.704Zm73.751 5.428a1.852 1.852 0 1 1 1.852 1.907 1.851 1.851 0 0 1-1.852-1.853v-.054Zm1.852 2.296a2.286 2.286 0 0 0-.065-4.571 2.284 2.284 0 0 0-2.253 2.275 2.284 2.284 0 0 0 2.264 2.296h.054Zm-.488-2.112h.466l.694 1.137h.444l-.737-1.159c.39-.043.672-.26.672-.726 0-.52-.304-.78-.932-.78h-.932v2.665h.325v-1.137Zm0-.303v-.639h.542c.26 0 .651 0 .651.314 0 .39-.39.325-.672.325h-.521Z"/>
</svg>
`

export const Default = Template.bind({})
Default.args = {
  logo: 'https://www.azion.com/assets/images/logos/light/gartner-logo.svg',
  testimonial:
    'Gartner clients note that Azion excels at providing a consultative approach to orchestration and serverless edge application environments.',
  source: 'Gartner Competitive Landscape for CDN and Edge Services.'
}