/**
 *
 * HeroFormRight
 *
 *
 * @module `heroformright`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeroFormRight component.
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


export interface HeroFormRightProps {
  overline: string;
  title: string;
  description: string;
  list: List[];
  form: Form;
}

/**
 * Defines valid slots in HeroFormRight component.
 */
export interface HeroFormRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroFormRight component.
 */
export interface HeroFormRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroFormRight extends ClassComponent<HeroFormRightProps, HeroFormRightSlots, HeroFormRightEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroFormRight: GlobalComponentConstructor<HeroFormRight>;
  }
}

export default HeroFormRight;
