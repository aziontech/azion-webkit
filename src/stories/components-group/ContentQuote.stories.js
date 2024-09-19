import ContentQuote from "../../templates/contentquote"

export default {
  title: 'Components Group/Content Quote',
  component: ContentQuote,
  tags: ['autodocs'],
}

const data = [
  {
    quote: {
      text: `A Azion protege o Agibank, banco omnichannel brasileiro com 1M+ de clientes, de ataques que ameaçam suas aplicações.` ,
      imageLight: "https://www.azion.com/assets/pages/products/images/light/edge-application/omelete-co-logo-black.png",
      imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png",
      author: "Luis Igreja",
      button: {
        link: "/en/",
        label: "See success case"
      }
    },
  button: {
    image: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png"
  }
},
{
  quote: {
    text: `A Azion protege o Agibank, banco omnichannel brasileiro com 1M+ de clientes, de ataques que ameaçam suas aplicações.` ,
    imageLight: "https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg",
    imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg",
      author: "Luis Igreja",
    button: {
      link: "/en/",
      label: "See success case"
    }
  },
  button: {
    image: "https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg"
  }
},
{
  quote: {
    text: `A Azion protege o Agibank, banco omnichannel brasileiro com 1M+ de clientes, de ataques que ameaçam suas aplicações.` ,
    imageLight: "https://www.azion.com/assets/pages/products/images/light/edge-application/omelete-co-logo-black.png",
    imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png",
    author: "Luis Igreja",
    button: {
      link: "/en/",
      label: "See success case"
    }
  },
  button: {
    image: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png"
  }
},
]

export const Default = {
  args: {
    data
  }
}
