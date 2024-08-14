import CardReleaseCarousel from "../../templates/releasecarousel"

export default {
  title: '2. Components Group/Release Carousel',
  component: CardReleaseCarousel,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: "Tag, title, card, image"
    },
    numVisible: {
      description: "Numero de cards visiveis"
    },
    numScroll: {
      description: "Numero de cards que serão movimentados"
    },
    autoplayInterval: {
      description: "Tempo do scroll entre animações"
    }
  },
}

export const Default = {
  args: {
    data: [
      {
        tag: {
          icon: "pi pi-star",
          label: "award"
        },
        title: "Clientes da Gartner afirmam que a Azion se destaca por oferecer uma abordagem consultiva para orquestração e ambientes de aplicação de Edge Computing.",
        card: {
          icon: "pi pi-external",
          link: "",
          ariaLabel: ""
        },
        image: {
          light: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          dark: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          alt: "lorem",
          description: "lorem ipsum"
        }
      },
      {
        tag: {
          icon: "pi pi-star",
          label: "award"
        },
        title: "Clientes da Gartner afirmam que a Azion se destaca por oferecer uma abordagem consultiva para orquestração e ambientes de aplicação de Edge Computing.",
        card: {
          icon: "pi pi-external",
          link: "",
          ariaLabel: ""
        },
        image: {
          light: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          dark: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          alt: "lorem",
          description: "lorem ipsum"
        }
      },
      {
        tag: {
          icon: "pi pi-star",
          label: "award"
        },
        title: "Clientes da Gartner afirmam que a Azion se destaca por oferecer uma abordagem consultiva para orquestração e ambientes de aplicação de Edge Computing.",
        card: {
          icon: "pi pi-external",
          link: "",
          ariaLabel: ""
        },
        image: {
          light: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          dark: "https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40",
          alt: "lorem",
          description: "lorem ipsum"
        }
      },
    ]
  }
}

