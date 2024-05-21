/**
 *
 * LinkIcon represents people using links in the page with css buttons look.
 *
 *
 * @module `linkicon`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in LinkIcon component.
 */
export interface LinkIconProps {
  /**
   * Defines the icon to display.
   */
  icon: string;
  /**
   * Defines the href attribute of LinkIcon
   */
  link: string;
  /**
   * Defines text of linkicon tooltip
   */
  tooltipText: string;
}

/**
 * Defines valid slots in LinkIcon component.
 */
export interface LinkIconSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in LinkIcon component.
 */
export interface LinkIconEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class LinkIcon extends ClassComponent<LinkIconProps, LinkIconSlots, LinkIconEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    LinkIcon: GlobalComponentConstructor<LinkIcon>;
  }
}

export default LinkIcon;
