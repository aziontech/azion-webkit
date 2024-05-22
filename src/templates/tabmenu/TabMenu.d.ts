/**
 *
 * tabmenu
 *
 *
 * @module tabmenu
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in tabmenu component.
 */
export interface TabMenuProps {
  tabList: []
}

/**
 * Defines valid slots in Avatar component.
 */
export interface TabMenuSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface TabMenuEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class TabMenu extends ClassComponent<TabMenuProps, TabMenuSlots, TabMenuEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    TabMenu: GlobalComponentConstructor<TabMenu>;
  }
}

export default TabMenu;
