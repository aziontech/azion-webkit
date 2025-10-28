import Header from '../../blocks/Header/Header.vue'
import HeaderLogoAzion from '../../templates/azionlogo'
import Menu from '../../components/Menu/Menu.vue'
import MenuMobile from '../../components/MenuMobile/MenuMobile.vue'
import Search from '../../templates/headersearchdialog'

export default {
  title: 'Blocks/Rebranding/Header',
  component: Header,
  tags: ['autodocs']
}

const simpleMenuData = {
  menu: [
    {
      label: 'Products',
      href: '/products'
    },
    {
      label: 'Solutions',
      href: '/solutions'
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Docs',
      href: '/documentation'
    }
  ]
}

const menuDataWithSubmenu = {
  menu: [
    {
      label: 'Products',
      subMenuColumns: [
        {
          title: 'Build',
          items: [
            { label: 'Edge Application', href: '/products/edge-application' },
            { label: 'Edge Functions', href: '/products/edge-functions' }
          ]
        },
        {
          title: 'Secure',
          items: [
            { label: 'Edge Firewall', href: '/products/edge-firewall' }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      subMenuColumns: [
        {
          items: [
            { label: 'E-commerce', href: '/solutions/ecommerce' },
            { label: 'Media', href: '/solutions/media' }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Docs',
      href: '/documentation'
    }
  ]
}

const menuSecondary = [
  { label: 'Console', href: 'https://console.azion.com', icon: 'pi pi-sign-in' },
  { label: 'Sign Up', href: '/signup', variant: 'primary' }
]

const menuSecondaryMobile = [
  { label: 'Console', href: 'https://console.azion.com' },
  { label: 'Sign Up', href: '/signup' }
]

const bottomButtonsMobile = [
  { label: 'Get Started', url: '/get-started', icon: 'pi pi-arrow-right' }
]

const communityData = {
  title: 'Community',
  items: [
    { label: 'Discord', href: 'https://discord.gg/azion', icon: 'pi pi-discord' },
    { label: 'GitHub', href: 'https://github.com/aziontech', icon: 'pi pi-github' }
  ]
}

const simpleMobileMenuData = {
  menu: [
    {
      label: 'Products',
      href: '/products'
    },
    {
      label: 'Solutions',
      href: '/solutions'
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Docs',
      href: '/documentation'
    }
  ]
}

const menuMobileDataWithSubmenu = {
  menu: [
    {
      label: 'Products',
      subMenuColumns: [
        {
          label: 'Edge Application',
          href: '/products/edge-application'
        },
        {
          label: 'Edge Functions',
          href: '/products/edge-functions'
        },
        {
          label: 'Edge Firewall',
          href: '/products/edge-firewall'
        }
      ]
    },
    {
      label: 'Solutions',
      subMenuColumns: [
        {
          label: 'E-commerce',
          href: '/solutions/ecommerce'
        },
        {
          label: 'Media',
          href: '/solutions/media'
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Docs',
      href: '/documentation'
    }
  ]
}

export const Default = {
  render: (args) => ({
    components: { Header, HeaderLogoAzion, Menu, MenuMobile, Search },
    setup() {
      return { 
        args, 
        menuData: simpleMenuData, 
        menuSecondary, 
        menuSecondaryMobile, 
        bottomButtonsMobile, 
        communityData, 
        menuMobileData: simpleMobileMenuData 
      }
    },
    template: `
      <Header :menuSecondary="menuSecondary">
        <template #logo>
          <HeaderLogoAzion
            href="/"
            hrefTitle="Home | Azion Technologies"
            target="_self"
            version="default"
          />
        </template>
        
        <template #dialog>
          <Search
            algoliaAppId="PYJUZH6VNQ"
            algoliaApiKey="7c1795c333053265edd2aeb199745797"
            algoliaIndex="azion_en"
            algoliaModel="search"
            inputPlaceholder="Search documentation..."
          />
        </template>

        <template #navigation>
          <Menu
            :communityData="communityData"
            :menuData="menuData"
          />
        </template>

        <template #menu-mobile>
          <MenuMobile
            :menuSecondary="menuSecondaryMobile"
            :bottomButtons="bottomButtonsMobile"
            :menuMobile="menuMobileData"
          />
        </template>
      </Header>
    `
  })
}

