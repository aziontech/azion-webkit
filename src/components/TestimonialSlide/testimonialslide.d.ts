/**
 *
 * TestimonialSlide represents the testimonial slide carousel template
 *
 *
 * @module `testimonialslide`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../../templates/ts-helpers'

type TestimonialSlideItems = {
  logo: string
  testimonial: string
  source: string
}

type TestimonialSlideButton = {
  label: string
  link: string
}

/**
 * Defines valid properties in TestimonialSlide component.
 */
export interface TestimonialSlideProps {
  /**
   * Array of testimonial items to display in the carousel
   */
  items: TestimonialSlideItems[]
  /**
   * Title text displayed above the carousel
   */
  title: string
  /**
   * Button configuration object
   */
  button: TestimonialSlideButton
}

/**
 * Defines valid slots in TestimonialSlide component.
 */
export interface TestimonialSlideSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in TestimonialSlide component.
 */
export interface TestimonialSlideEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class TestimonialSlide extends ClassComponent<
  TestimonialSlideProps,
  TestimonialSlideSlots,
  TestimonialSlideEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    TestimonialSlide: GlobalComponentConstructor<TestimonialSlide>
  }
}

export default TestimonialSlide
