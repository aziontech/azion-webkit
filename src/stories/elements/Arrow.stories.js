import Arrow from '../../templates/arrow'

export default {
  title: 'Elements/css/Arrow',
  tags: ['autodocs'],
}

const template = `<Arrow />`

const Template = () => ({
  components: { Globe, Arrow },
  template: template
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: { code: template } },
};

