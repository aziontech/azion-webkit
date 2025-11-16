export interface BigNumbersItem {
  /** Icon class name (e.g., 'pi pi-check') */
  icon: string
  /** Main number or text displayed prominently */
  title: string
  /** Description text displayed next to the number */
  description: string
}

export interface BigNumbersProps {
  /** Array of big number items to display in the carousel */
  items: BigNumbersItem[]
  /** Bottom spacing class */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /** Section ID attribute */
  id?: string
}

export { default } from './BigNumbers.vue'
