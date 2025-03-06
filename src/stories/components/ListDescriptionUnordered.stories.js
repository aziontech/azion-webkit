import ListUnordered from '../../templates/listunordered'

export default {
  title: 'Components/ListDescriptionUnordered',
  component: ListUnordered,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      description: 'Change icon color',
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'warning',
        'success',
        'info'
      ]
    },
    direction: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
      description: 'Change orientation'
    }
  }
}

const data = new Array(3).fill({
  description:
    'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
  icon: 'pi pi-check'
})

const data2 = new Array(3).fill({
  description: new Array(3).fill({
    label: 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet',
    icon: 'pi pi-dollar'
  })
})

const data3 = new Array(3).fill({
  description: new Array(3).fill({
    label: 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet'
  }),
  icon: 'pi pi-check'
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
