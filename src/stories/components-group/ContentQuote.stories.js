import ContentQuote from "../../templates/contentquote"

export default {
  title: '2. Components Group/Content Quote',
  component: ContentQuote,
  tags: ['autodocs'],
}

const data = Array(4).fill({
  text: `”A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.”` ,
  imageLight: "https://www.azion.com/assets/pages/products/images/light/edge-application/omelete-co-logo-black.png",
  imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/omelete-co-logo-white.png",
  label: "",
})

export const Default = {
  args: {
    data
  }
}

export const isCarousel = {
  args: {
    isCarousel: true,
    data
  }
}
