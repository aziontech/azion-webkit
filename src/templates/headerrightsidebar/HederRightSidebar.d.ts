/**
 *
 * HeaderRightSidebar represents people using links in the page with css buttons look.
 *
 *
 * @module `headerrightsidebar`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeaderRightSidebar component.
 */
export interface HeaderRightSidebarProps {
  menuData: object;
  menuSecondary: [];
  bottomButtons: [];
}

/**
 * Defines valid slots in HeaderRightSidebar component.
 */
export interface HeaderRightSidebarSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeaderRightSidebar component.
 */
export interface HeaderRightSidebarEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeaderRightSidebar extends ClassComponent<HeaderRightSidebarProps, HeaderRightSidebarSlots, HeaderRightSidebarEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeaderRightSidebar: GlobalComponentConstructor<HeaderRightSidebar>;
  }
}

export default HeaderRightSidebar;
