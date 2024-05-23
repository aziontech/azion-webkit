/**
 *
 * HeaderMenuTabPanel
 *
 *
 * @module `headermenutabpanel`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeaderMenuTabPanel component.
 */
export interface HeaderMenuTabPanelProps {
  menuData: object;
}

/**
 * Defines valid slots in HeaderMenuTabPanel component.
 */
export interface HeaderMenuTabPanelSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeaderMenuTabPanel component.
 */
export interface HeaderMenuTabPanelEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeaderMenuTabPanel extends ClassComponent<HeaderMenuTabPanelProps, HeaderMenuTabPanelSlots, HeaderMenuTabPanelEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeaderMenuTabPanel: GlobalComponentConstructor<HeaderMenuTabPanel>;
  }
}

export default HeaderMenuTabPanel;
