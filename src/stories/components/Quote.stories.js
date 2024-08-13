import Quote from "../../templates/quote"

export default {
  title: '2.1 Components/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: "Component orientation",
      options: ['row', 'column'],
      control: { type: 'select'}
    },
    alt: {
      description: "Image alt text"
    }
  }
}

const data = {
  text: `”A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.”` ,
  imageLight: "https://www.azion.com/assets/pages/products/images/light/edge-application/omelete-co-logo-black.png",
  imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png",
}

export const Default = {
  args: {
    ...data
  }
}

export const withLabel = {
  args: {
    ...data,
    label: "Lorem Ipsum"
  }
}

export const column = {
  args: {
    ...data,
    label: "Lorem Ipsum",
    direction: "column"
  }
}
