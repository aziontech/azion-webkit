/**
 *
 * HeroHsFormRight
 *
 *
 * @module `herohsformright`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeroHsFormRight component.
 */

interface List {
  title: string;
  description: string;
  icon: string;
}

interface Form {
  id: string;
  title: string;
}


export interface HeroHsFormRightProps {
  overline: string;
  title: string;
  description: string;
  list: List[];
  form: Form;
}

/**
 * Defines valid slots in HeroHsFormRight component.
 */
export interface HeroHsFormRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroHsFormRight component.
 */
export interface HeroHsFormRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroHsFormRight extends ClassComponent<HeroHsFormRightProps, HeroHsFormRightSlots, HeroHsFormRightEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroHsFormRight: GlobalComponentConstructor<HeroHsFormRight>;
  }
}

export default HeroHsFormRight;
