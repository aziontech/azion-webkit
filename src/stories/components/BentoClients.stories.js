import BentoClients from '../../blocks/BentoClients/BentoClients.vue'

export default {
  title: 'Components/BentoClients',
  component: BentoClients,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A 4x4 grid layout component showcasing client logos, testimonials, and case studies in a dynamic bento-style layout. Features merged cells for different content types including profile blocks, logo displays, and detailed showcase sections.'
      }
    },
    layout: 'fullscreen'
  }
}

const Template = (args) => ({
  components: { BentoClients },
  setup() {
    return { args }
  },
  template: `
  <div class="bg-black p-6">
    <BentoClients v-bind="args" />
  </div>
  `
})

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="48" fill="currentColor" viewBox="0 0 75 18">
<path d="M46.532 3.726c.104-.011.207-.023.276-.023v9.715h-.643a8.328 8.328 0 0 0-.341-.388c-.082-.09-.178-.194-.301-.332l-6.149-6.566v7.33a1.5 1.5 0 0 1-.192-.021c-.153-.024-.344-.053-.496-.023-.069 0-.126.011-.184.022a.905.905 0 0 1-.183.023V3.748h.734l6.654 7.061V3.703c.068 0 .172.012.275.023.103.011.206.022.275.022.069 0 .172-.011.276-.022Zm-11.976.967h-1.973V7.93h1.698c.459 0 1.33-.045 1.79-.09 0 .045-.012.157-.023.27a4.116 4.116 0 0 0-.023.27c0 .067.011.146.023.225.01.078.022.157.022.224a33.12 33.12 0 0 0-2.11-.09h-1.377v3.778c.459 0 .654 0 .849-.005.195-.006.39-.017.849-.04.459 0 1.744-.09 2.202-.18 0 .097-.013.232-.025.357-.01.11-.02.21-.02.273 0 .068.011.158.023.248.01.09.022.18.022.247h-5.368v-9.67h5.23c0 .068-.01.169-.022.27a2.82 2.82 0 0 0-.023.27c0 .096.026.219.05.332.022.098.042.19.042.253 0 0-1.377-.18-1.836-.18ZM57.5 3.726c.103-.011.206-.023.275-.023v9.715h-.643c-.113-.14-.21-.244-.342-.388-.081-.09-.178-.194-.3-.332l-6.15-6.566v7.33c-.047 0-.114-.01-.192-.021-.153-.024-.345-.053-.496-.023-.07 0-.126.011-.184.022a.904.904 0 0 1-.183.023V3.748h.734l6.653 7.061V3.703a3 3 0 0 1 .276.023c.103.011.206.022.275.022.069 0 .172-.011.275-.022Zm6.056.967h-1.973V7.93h1.698c.459 0 1.33-.045 1.79-.09 0 .045-.012.157-.023.27a3.768 3.768 0 0 0-.023.27c0 .135 0 .314.046.45a33.124 33.124 0 0 0-2.111-.09h-1.377v3.777c.459 0 .654 0 .849-.005.195-.006.39-.017.849-.04.459 0 1.744-.09 2.203-.18 0 .097-.014.232-.026.357-.01.11-.02.21-.02.273 0 .068.011.158.023.248.011.09.023.18.023.247h-5.37v-9.67h5.232c0 .068-.012.169-.023.27a2.82 2.82 0 0 0-.023.27c0 .096.026.219.05.332.022.098.042.19.042.253 0 0-1.377-.18-1.836-.18Z"></path>
<path fill-rule="evenodd" d="M23.222 13.418c-.23 0-.505 0-.734.045V3.748H25.7c2.203 0 3.212.81 3.212 2.249 0 1.664-1.56 2.519-2.799 2.743l1.973 2.43 1.882 2.293c-.167 0-.384-.012-.591-.024-.193-.01-.378-.021-.51-.021-.174-.028-.383-.003-.57.019a2.742 2.742 0 0 1-.303.026l-.22-.31c-.233-.33-.452-.64-.697-.95L25.47 10.18l-1.148-1.35h-.32v4.633s-.643-.045-.78-.045Zm2.707-8.86c-.504-.09-1.33-.09-1.927-.045h.046v3.553c.037 0 .097.003.176.008.315.019.925.055 1.476-.053.964-.225 1.698-.855 1.698-1.844 0-.9-.459-1.484-1.468-1.62Zm41.941 8.86c-.23 0-.505 0-.735.045V3.748h3.167c2.248 0 3.258.81 3.258 2.249 0 1.664-1.56 2.519-2.8 2.743l1.974 2.43 1.881 2.293c-.167 0-.383-.012-.591-.024-.193-.01-.378-.021-.51-.021-.173-.028-.382-.003-.57.019a2.74 2.74 0 0 1-.302.026c-.197-.242-.355-.47-.508-.693a10.15 10.15 0 0 0-.41-.566l-1.606-2.024-1.147-1.35h-.321v4.633s-.643-.045-.78-.045Zm2.707-8.86c-.459-.09-1.285-.09-1.881-.045v3.553c.036 0 .096.003.175.008.315.019.925.055 1.477-.053.963-.225 1.697-.855 1.697-1.844 0-.9-.459-1.484-1.468-1.62ZM8.906.24C4.179.24.325 4.018.325 8.65c0 4.633 3.854 8.366 8.58 8.366 4.727 0 8.536-3.733 8.536-8.365 0-4.633-3.809-8.41-8.535-8.41Zm.137 4.947c.092-.63-.183-1.799-2.11-1.304-1.606.36-3.258 2.204-3.488 2.969 0 .494.413.27.413.27.35-.263.553-.508.74-.734.23-.278.437-.528.866-.75.597-.316.643.27.597.494 0 .36-2.203 6.836-2.203 6.836s-.183.405.46.45l1.835.045c.55-.045.78-.36.78-.36.78-1.53 1.514-3.373 1.514-3.373s1.01-2.204 2.478-3.778c.275-.27.78-.36.917-.045.092.765.23 1.214 1.056 1.35 1.33.224 2.937-2.115 1.193-3.239 0 0-.505-.225-.964-.225-1.8-.039-3.112 1.938-4.24 3.638-.165.25-.327.494-.486.725.08-.313.15-.573.215-.807.194-.709.324-1.181.427-2.162Z" clip-rule="evenodd"></path>
<defs>
  <path d="M.325.17h74.29v17H.325z"></path>
</defs>
</svg>`

const showcaseCards = [
  {
    title: `Explore how Vtex boosts e-commerce speed with Azion's Edge technology, surpassing legacy solutions and enhancing user experience across South America.`,
    action: 'learn more',
    href: '#',
    logo: { src: logoSvg, alt: 'VTEX Logo' }
  },
  {
    title:
      "Explore how Dafiti boosts e-commerce speed with Azion's Edge technology, surpassing legacy solutions and enhancing user experience across South America.",
    action: 'Learn More',
    href: '#',
    logo: { src: logoSvg, alt: 'Dafiti Logo' },
    size: 'small',
    type: 'image',
    backgroundImage: 'https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg'
  },
  {
    title:
      "Explore how Dafiti boosts e-commerce speed with Azion's Edge technology, surpassing legacy solutions and enhancing user experience across South America.",
    action: 'learn more',
    href: '#',
    logo: { src: logoSvg, alt: 'Dafiti Logo' },
    size: 'small',
    type: 'white'
  }
]

const personaCards = [
  {
    title: 'Sean Strickland',
    backgroundImage: 'https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg'
  },
  {
    title: 'Samantha Van',
    backgroundImage: 'https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg'
  }
]

const logoCards = [
  { logo: { src: logoSvg, alt: 'Magalu Logo' } },
  { type: 'white', logo: { src: logoSvg, alt: 'telefonica Logo' } },
  { logo: { src: logoSvg, alt: 'Prime Video Logo' } },
  { logo: { src: logoSvg, alt: 'Crefisa Logo' } },
  { type: 'orange', logo: { src: logoSvg, alt: 'AFG Global Fashion Group Logo' } }
]

export const Default = Template.bind({})
Default.args = {
  showcaseCards,
  personaCards,
  logoCards
}
