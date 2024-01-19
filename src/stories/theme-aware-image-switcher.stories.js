import ImageSwitcher from '../templates/theme-aware-image-switcher/index.vue'

export default {
  title: 'Components/Theme Aware Image Switcher',
  component: ImageSwitcher,
  tags: ['autodocs'],
}

const Template = (args) => ({
  components: { ImageSwitcher },
  setup() {
    return { args }
  },
  template: `<ImageSwitcher>
              <template #lightImage>
                <img src="https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg" loading="lazy" height="40" />
              </template>
              <template #darkImage>
                <img src="https://www.azion.com/static/images/v3/home/logo-digmais.png" loading="lazy" height="40"/>
              </template>
             </ImageSwitcher>`
})

export const Default = Template.bind({});
