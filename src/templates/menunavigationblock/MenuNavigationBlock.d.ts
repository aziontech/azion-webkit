/**
 *
 * MenuNavigationBlock represents people using links in the page with css buttons look.
 *
 *
 * @module `menunavigationblock`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in MenuNavigationBlock component.
 */
export interface MenuNavigationBlockProps {
  menuTitle: string;
  menuItems: [];
  mobileLabel?: string;
  /**
   * @defaultValue false
   */
  isContainer?: boolean;
}

/**
 * Defines valid slots in MenuNavigationBlock component.
 */
export interface MenuNavigationBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in MenuNavigationBlock component.
 */
export interface MenuNavigationBlockEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class MenuNavigationBlock extends ClassComponent<MenuNavigationBlockProps, MenuNavigationBlockSlots, MenuNavigationBlockEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    MenuNavigationBlock: GlobalComponentConstructor<MenuNavigationBlock>;
  }
}

export default MenuNavigationBlock;
