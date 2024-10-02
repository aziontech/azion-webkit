/**
 *
 * SectionCardCarousel
 *
 *
 * @module `sectioncardcarousel`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

// type BigNumbers = {
//   justify: "center" | "start"
//   items: Array<{
//     icon: string,
//     title: string,
//     description: string
//    }>
// }

/**
 * Defines valid properties in SectionCardCarousel component.
 */
export interface SSectionCardCarouselProps {
  // data: BigNumbers;
  // title: string;
  // overline: string;
}

/**
 * Defines valid slots in SSectionCardCarousel component.
 */
export interface SSectionCardCarouselSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SSectionCardCarousel component.
 */
export interface SSectionCardCarouselEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SSectionCardCarousel extends ClassComponent<SSectionCardCarouselProps, SSectionCardCarouselSlots, SSectionCardCarouselEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SSectionCardCarousel: GlobalComponentConstructor<SSectionCardCarousel>;
  }
}

export default SSectionCardCarousel;
