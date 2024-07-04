import ListUnordered from "../../templates/listunordered"

export default {
  title: 'Azion Web Kit/Components/List Unordered',
  component: ListUnordered,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['default', 'primary'],
      control: {
        type: 'select',
      },
      description: "Chnage icon color"
    },
    direction: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'select',
      },
      description: "Chnage orientation"
    },
  }
};

const data = new Array(4).fill({
  title: "Lorem ipsun magna",
  description: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet",
  icon: "pi pi-check",
})

const data2 = new Array(4).fill({
  title: "Lorem ipsun magna",
  description: new Array(3).fill({
    label: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet",
    icon: "pi pi-dollar"
  }),
})

const data3 = new Array(4).fill({
  title: "Lorem ipsun magna",
  description: new Array(3).fill({
    label: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet",
  }),
  icon: "pi pi-check",
})

export const Default = {
  args: {
    data,
    severity: 'primary'
  }
}

export const Horizontal = {
  args: {
    data,
    direction: 'horizontal',
  }
}

export const descriptionList = {
  args: {
    data: data3,
    severity: 'primary'
  }
}

export const descriptionListWithIcon = {
  args: {
    data: data2,
    severity: 'primary'
  }
}
