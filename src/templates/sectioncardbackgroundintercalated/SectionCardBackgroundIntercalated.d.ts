/**
 *
 * SectionCardBackgroundIntercalated
 *
 *
 * @module `sectioncardbackgroundintercalated`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type HeroType = {
  "title": string,
  "description": string,
  "image": string,
  "buttons": Array<[
    {
      "label": string,
      "link": string
    }
  ]>
}

type CardsType = {
  "cards": {
    "title": string,
    "description": string,
    "cards": Array<[
      {
        "label": string,
        "title": string,
        "image": string,
        "alt": string
      }
    ]>
  }
}

/**
 * Defines valid properties in SectionCardBackgroundIntercalated component.
 */
export interface SectionCardBackgroundIntercalatedProps {
  hero: HeroType;
  cards: CardsType;
}

/**
 * Defines valid slots in SectionCardBackgroundIntercalated component.
 */
export interface SectionCardBackgroundIntercalatedSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SectionCardBackgroundIntercalated component.
 */
export interface SectionCardBackgroundIntercalatedEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SectionCardBackgroundIntercalated extends ClassComponent<SectionCardBackgroundIntercalatedProps, SectionCardBackgroundIntercalatedSlots, SectionCardBackgroundIntercalatedEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SectionCardBackgroundIntercalated: GlobalComponentConstructor<SectionCardBackgroundIntercalated>;
  }
}

export default SectionCardBackgroundIntercalated;
