import Globe from '../../templates/globe'
import Arrow from '../../templates/arrow'

export default {
  title: 'Elements/css/Globe Animation',
  tags: ['autodocs']
}

const template = `
<div class="relative flex h-fit justify-end items-center w-full z-0 surface-ground">
  <div class="flex max-h-80 -mt-32 lg:mt-0 lg:items-center overflow-hidden px-10 py-12 lg:py-6">
    <ul class="relative flex flex-col gap-6 min-w-20 mr-14 hidden lg:flex">
      <li class="flex items-center gap-6">
        <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
          <i class="pi pi-cloud text-color-secondary"></i>
        </span>

        <Arrow direction="left" borderStyle="dotted" width="140px"/>
      </li>
      <li class="flex items-center gap-6 justify-end -mr-[1rem3]">
        <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
          <i class="pi pi-database text-color-secondary"></i>
        </span>

        <Arrow direction="left" borderStyle="dotted" width="70px"/>
      </li>
    </ul>

    <Globe class="-mr-28"/>
  </div>
</div>`

const globeTemplate = `<Globe />`

const Template = () => ({
  components: { Globe, Arrow },
  template: template
})

const Template2 = () => ({
  components: { Globe },
  template: globeTemplate
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: { code: template }
  }
}

export const OnlyGlobe = Template2.bind({})
OnlyGlobe.parameters = {
  docs: {
    source: { code: globeTemplate }
  }
}
