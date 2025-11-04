/**
 *
 * LogoSlide represents the logo slide carousel template
 *
 *
 * @module `logoslide`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type LogoSlideItems = {
  src: string
  alt: string
}

type LogoSlideButton = {
  label: string
  link: string
}

/**
 * Defines valid properties in LogoSlide component.
 */
export interface LogoSlideProps {
  /**
   * Array of logo items to display in the carousel
   */
  items: LogoSlideItems[]
  /**
   * Title text displayed above the carousel
   */
  title: string
  /**
   * Button configuration object
   */
  button: LogoSlideButton
}

/**
 * Defines valid slots in LogoSlide component.
 */
export interface LogoSlideSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in LogoSlide component.
 */
export interface LogoSlideEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class LogoSlide extends ClassComponent<LogoSlideProps, LogoSlideSlots, LogoSlideEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    LogoSlide: GlobalComponentConstructor<LogoSlide>
  }
}

export default LogoSlide
