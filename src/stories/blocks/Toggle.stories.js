import Toggle from '../../blocks/Toggle/Toggle.vue'

export default {
  title: 'Blocks/Toggle',
  component: Toggle,
  argTypes: {
    modelValue: {
      control: { type: 'radio' },
      options: ['main', 'alternative'],
      description: 'The currently selected option'
    },
    mainLabel: {
      control: 'text',
      description: 'Label for the main option'
    },
    alternativeLabel: {
      control: 'text',
      description: 'Label for the alternative option'
    },
    description: {
      control: 'text',
      description: 'Optional description text below the toggle'
    }
  }
}

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args }
  },
  template: `
    <div class="p-8 bg-neutral-900 min-h-screen">
      <Toggle v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  modelValue: 'main',
  mainLabel: 'Main',
  alternativeLabel: 'Alternative'
}

export const PricingExample = Template.bind({})
PricingExample.args = {
  modelValue: 'main',
  mainLabel: 'Monthly',
  alternativeLabel: 'Annual',
  description: 'Save 20% with annual billing'
}

export const LanguageToggle = Template.bind({})
LanguageToggle.args = {
  modelValue: 'main',
  mainLabel: 'English',
  alternativeLabel: 'Portuguese',
  description: 'Choose your preferred language'
}

export const ThemeToggle = Template.bind({})
ThemeToggle.args = {
  modelValue: 'main',
  mainLabel: 'Light',
  alternativeLabel: 'Dark',
  description: 'Select your theme preference'
}

export const ViewToggle = Template.bind({})
ViewToggle.args = {
  modelValue: 'main',
  mainLabel: 'Grid',
  alternativeLabel: 'List',
  description: 'Change the view layout'
}

export const Interactive = () => ({
  components: { Toggle },
  data() {
    return {
      selected: 'main',
      mainLabel: 'Monthly',
      alternativeLabel: 'Annual',
      description: 'Save 20% with annual billing'
    }
  },
  template: `
    <div class="p-8 bg-neutral-900 min-h-screen">
      <div class="max-w-md mx-auto space-y-8">
        <Toggle 
          v-model="selected"
          :main-label="mainLabel"
          :alternative-label="alternativeLabel"
          :description="description"
        />
        
        <div class="bg-neutral-800 p-4 rounded-lg">
          <p class="text-white text-sm mb-2">Selected Option: <strong>{{ selected }}</strong></p>
          <p class="text-neutral-400 text-xs">
            The toggle is now showing: {{ selected === 'main' ? mainLabel : alternativeLabel }}
          </p>
        </div>
        
        <div class="bg-neutral-800 p-4 rounded-lg space-y-3">
          <h3 class="text-white text-sm font-semibold mb-3">Customize Labels:</h3>
          <div>
            <label class="text-neutral-400 text-xs block mb-1">Main Label:</label>
            <input 
              v-model="mainLabel" 
              class="w-full px-3 py-2 bg-neutral-700 text-white rounded text-sm"
              placeholder="Enter main label"
            />
          </div>
          <div>
            <label class="text-neutral-400 text-xs block mb-1">Alternative Label:</label>
            <input 
              v-model="alternativeLabel" 
              class="w-full px-3 py-2 bg-neutral-700 text-white rounded text-sm"
              placeholder="Enter alternative label"
            />
          </div>
          <div>
            <label class="text-neutral-400 text-xs block mb-1">Description:</label>
            <input 
              v-model="description" 
              class="w-full px-3 py-2 bg-neutral-700 text-white rounded text-sm"
              placeholder="Enter description"
            />
          </div>
        </div>
      </div>
    </div>
  `
})
