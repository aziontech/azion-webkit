export interface FaqProps {
  /**
   * Unique identifier for the FAQ item
   */
  id?: string | number
  /**
   * The question text displayed in the FAQ header
   */
  question: string
  /**
   * The answer text in markdown format (supports markdown syntax)
   */
  answer: string
  /**
   * Whether the FAQ item is initially open
   * @defaultValue false
   */
  isOpen?: boolean
}

export interface SectionFaqProps {
  /**
   * Optional HTML id attribute for the section element
   */
  id?: string
  /**
   * Bottom spacing class for the section
   * @defaultValue 'mb-24'
   */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /**
   * Main title displayed in the left column
   */
  title: string
  /**
   * Array of FAQ items to display
   */
  faqs: FaqProps[]
}

export { default } from './SectionFaq.vue'
