import Footer from '../../blocks/Footer/Footer.vue'

export default {
  title: 'Blocks/Rebranding/Footer',
  component: Footer,
  tags: ['autodocs']
}

export const Default = {
  args: {
    listData: [
      {
        title: 'Product',
        list: [
          { link: '/features', title: 'Features' },
          { link: '/pricing', title: 'Pricing' },
          { link: '/documentation', title: 'Documentation' },
          { link: '/api', title: 'API Reference' }
        ]
      },
      {
        title: 'Company',
        list: [
          { link: '/about', title: 'About Us' },
          { link: '/blog', title: 'Blog' },
          { link: '/careers', title: 'Careers' },
          { link: '/contact', title: 'Contact' }
        ]
      }
    ],
    content: {
      title: 'Azion Technologies',
      description: 'Building the <strong>future</strong> of edge computing'
    },
    socialButtons: [
      { title: 'Twitter', link: 'https://twitter.com/aziontech', icon: 'pi pi-twitter' },
      { title: 'LinkedIn', link: 'https://linkedin.com/company/azion', icon: 'pi pi-linkedin' }
    ],
    copyright: '© 2025 Azion Technologies. All rights reserved.'
  }
}
