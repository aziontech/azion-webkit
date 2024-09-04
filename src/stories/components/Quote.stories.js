import Quote from "../../templates/quote"

export default {
  title: 'Components/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {
    alt: {
      description: "Image alt text"
    }
  }
}

const data = {
    text: `A Azion protege o Agibank, banco omnichannel brasileiro com 1M+ de clientes, de ataques que ameaçam suas aplicações.` ,
    imageLight: "https://www.azion.com/assets/pages/products/images/light/edge-application/omelete-co-logo-black.png",
    imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png",
    author: "Luis Igreja",
    button: {
      link: "/en/",
      label: "See success case"
    }
  }

export const Default = {
  args: {
    ...data
  }
}
