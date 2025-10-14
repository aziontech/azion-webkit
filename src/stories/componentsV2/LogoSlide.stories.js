import LogoSlide from '../../components/LogoSlide/LogoSlide.vue'

export default {
  title: 'Components/Rebranding/LogoSlide',
  component: LogoSlide,
  tags: ['autodocs']
}

export const Default = {
  args: {
    logos: [
      { src: '/logo1.svg', alt: 'Logo 1' },
      { src: '/logo2.svg', alt: 'Logo 2' },
      { src: '/logo3.svg', alt: 'Logo 3' },
      { src: '/logo4.svg', alt: 'Logo 4' }
    ]
  }
}
