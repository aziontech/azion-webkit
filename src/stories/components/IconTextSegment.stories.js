import IconTextSegment from "../../templates/icontextsegment"

export default {
  title: 'Azion Web Kit/Components/Icon Text Segment',
  component: IconTextSegment,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['default', 'primary'],
      control: {
        type: 'select',
      },
      description: "Chnage icon color"
    },
    tagSeverity: {
      description: "Check PrimeVue tags"
    }
  }
};

const props = {
  title: "Lorem ipsun magna",
  description: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor et aliquet",
  icon: "pi pi-check",
  href: "#"
}

export const Default = {
  args: {
    ...props,
    severity: 'primary'
  }
}

export const WithTags = {
 args: {
  tag: 'Azion',
  tagSeverity: 'info',
  ...props
 }
}
