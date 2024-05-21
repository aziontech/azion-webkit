/**
 *
 * ThemeSwitcher represents people using links in the page with css buttons look.
 *
 *
 * @module `themeswitcher`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in ThemeSwitcher component.
 */
export interface ThemeSwitcherProps {}

/**
 * Defines valid slots in ThemeSwitcher component.
 */
export interface ThemeSwitcherSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in ThemeSwitcher component.
 */
export interface ThemeSwitcherEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ThemeSwitcher extends ClassComponent<ThemeSwitcherProps, ThemeSwitcherSlots, ThemeSwitcherEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ThemeSwitcher: GlobalComponentConstructor<ThemeSwitcher>;
  }
}

export default ThemeSwitcher;
