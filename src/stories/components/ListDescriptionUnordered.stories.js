import ListDescriptionUnordered from '../../templates/listdescriptionunordered'

export default {
  title: 'Components/ListDescriptionUnordered',
  component: ListDescriptionUnordered,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      description: 'Change icon color',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    }
    // direction: {
    //   options: ['vertical', 'horizontal'],
    //   control: { type: 'select' },
    //   description: 'Change orientation'
    // }
  }
}

const data = new Array(3).fill({
  title: 'Lorem ipsun magna',
  items: [
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    },
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    },
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    },
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    },
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    },
    {
      description:
        'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
      icon: 'pi pi-check'
    }
  ]
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
    direction: 'horizontal'
  }
}
