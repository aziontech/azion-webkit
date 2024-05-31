/**
 *
 * ReleaseCarousel
 *
 *
 * @module `releasecarousel`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { CardReleaseProps } from '../cardrelease/'

/**
 * Defines valid properties in ReleaseCarousel component.
 */
export interface ReleaseCarouselProps {
  data: Array<CardReleaseProps>;
  numVisible: Number;
  numScroll: Number;
}

/**
 * Defines valid slots in ReleaseCarousel component.
 */
export interface ReleaseCarouselSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in ReleaseCarousel component.
 */
export interface ReleaseCarouselEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ReleaseCarousel extends ClassComponent<ReleaseCarouselProps, ReleaseCarouselSlots, ReleaseCarouselEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ReleaseCarousel: GlobalComponentConstructor<ReleaseCarousel>;
  }
}

export default ReleaseCarousel;
