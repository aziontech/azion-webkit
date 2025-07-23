import AzionLogo from '../../templates/azionlogo'

export default {
  title: 'Elements/svgs/AzionLogo',
  component: AzionLogo,
  tags: ['autodocs'],
  argTypes: {
    version: {
      control: { type: 'select' },
      options: ['min', 'default', 'move to the edge', 'technologies', 'full']
    }
  }
}

export const Default = {
  args: {
    hrefTitle: 'azion logo',
    href: 'https://www.azion.com/en/',
    target: '_self',
    version: 'default'
  }
}
