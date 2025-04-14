import Container from '../../../templates/container'
import BannerLaunch from '../../../templates/bannerlaunch'

export default {
  title: 'Blocks/Banner/banner-launch',
  tags: ['autodocs']
}

const MOCK = {
  titleTag: 'h1',
  title:
    "PRODUCT</br><i class='text-orange-500 font-mono not-italic font-bold'>LAUNCHWEEK#01</i></br>MAY 05-06",
  description: '2 days of new features</br>and ways change the game',
  imageDark: 'https://i.imgur.com/zLE6fPd.png',
  imageLight: 'https://i.imgur.com/4i2vTxM.png'
}

const template = `
<Container class="surface-ground">
  <BannerLaunch v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { BannerLaunch, Container },
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
