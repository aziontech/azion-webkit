/**
 *
 * cardrelease
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module cardrelease
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type Tag = {
  label: string;
  icon: string;
}

type Image = {
  light: string;
  dark: string;
  alt: string;
  description: string;
}

type Card = {
  link: string;
  target: string;
  icon: "external" | "internal";
  ariaLabel: string;
}

/**
 * Defines valid properties in cardrelease component.
 */
export interface CardReleaseProps {
  /**
   * options: ['compact', 'relaxed', 'base'],
   * @defaultValue 'base'
   */
  image: Image;
  title: string;
  tag: Tag;
  card: Card;
  grid?: Boolean;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardReleaseSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardReleaseEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardRelease extends ClassComponent<CardReleaseProps, CardReleaseSlots, CardReleaseEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardRelease: GlobalComponentConstructor<CardRelease>;
  }
}

export default CardRelease;
