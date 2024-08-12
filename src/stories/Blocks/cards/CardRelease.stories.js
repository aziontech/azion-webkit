import CardRelease from "../../../templates/cardrelease"

export default {
  title: 'Blocks/Cards/Release',
  component: CardRelease,
  tags: ['autodocs'],
  argTypes: {
    card: {
      description: "Icon, link e aria label"
    },
    hover: {
      options: ['slide-up', 'outlined'],
      control: { type: 'radio' },
      description: "Hover style"
    }
  },
}

export const Default = {
  args: {
    hover: "slide-up",
    grid: true,
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
  }
}

