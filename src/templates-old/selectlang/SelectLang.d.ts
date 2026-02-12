/**
 *
 * SelectLang represents people using links in the page with css buttons look.
 *
 *
 * @module `selectlang`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SelectLang component.
 */
export interface SelectLangProps {
  i18nPages: [
    /* {lang: string, slug: string} */
  ]
  /**
   * @defaultValue en
   */
  lang: string
}

/**
 * Defines valid slots in SelectLang component.
 */
export interface SelectLangSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SelectLang component.
 */
export interface SelectLangEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SelectLang extends ClassComponent<
  SelectLangProps,
  SelectLangSlots,
  SelectLangEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SelectLang: GlobalComponentConstructor<SelectLang>
  }
}

export default SelectLang
