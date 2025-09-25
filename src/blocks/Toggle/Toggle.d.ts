import { DefineComponent } from 'vue'

export interface ToggleProps {
  modelValue?: string
  mainLabel?: string
  alternativeLabel?: string
  description?: string
}

declare const Toggle: DefineComponent<ToggleProps>

export default Toggle
