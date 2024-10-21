/**
 *
 * HeroButtonBottomn represents people using links in the page with css buttons look.
 *
 *
 * @module `herothumbbottom`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

interface Button {
  label: string
  href: string
  target?: string
}
interface Images {
  light: string
  dark: string
  alt: string
}
/**
 * Defines valid properties in HeroButtonBottomn component.
 */
export interface HeroButtonBottomnProps {
  overline?: string
  title?: string
  description?: string
  buttons: Button[]
  images: Images
}

/**
 * Defines valid slots in HeroButtonBottomn component.
 */
export interface HeroButtonBottomnSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroButtonBottomn component.
 */
export interface HeroButtonBottomnEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroButtonBottomn extends ClassComponent<HeroButtonBottomnProps, HeroButtonBottomnSlots, HeroButtonBottomnEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroButtonBottomn: GlobalComponentConstructor<HeroButtonBottomn>;
  }
}

export default HeroButtonBottomn;
