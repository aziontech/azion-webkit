/**
 *
 * Avatar
 *
 *
 * @module `avatar`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Avatar component.
 */
export interface AvatarProps {
  image: string;
  ariaLabel: string;
  title: string;
  description?: string;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface AvatarSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface AvatarEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Avatar extends ClassComponent<AvatarProps, AvatarSlots, AvatarEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Avatar: GlobalComponentConstructor<Avatar>;
  }
}

export default Avatar;
