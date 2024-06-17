/**
 *
 * HeroBase represents people using links in the page with css buttons look.
 *
 *
 * @module `herobase`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeroBase component.
 */
export interface HeroBaseProps {
  bannerNews?: object;
  overline?: string;
  /**
   * @defaultValue: false
   */
  isReverse?: boolean;
  title: false;
  /**
   * @defaultValue: h1
   */
  titleTag?: string;
  description?: string;
  justify?: string;
  /**
   * @defaultValue: false
   */
  isCentralized?: boolean;
  /**
   * @defaultValue: false
   */
  isDisplay?: boolean;
}

/**
 * Defines valid slots in HeroBase component.
 */
export interface HeroBaseSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroBase component.
 */
export interface HeroBaseEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroBase extends ClassComponent<HeroBaseProps, HeroBaseSlots, HeroBaseEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroBase: GlobalComponentConstructor<HeroBase>;
  }
}

export default HeroBase;
