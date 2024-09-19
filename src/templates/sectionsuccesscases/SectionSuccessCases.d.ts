/**
 *
 * SectionBigNumbers
 *
 *
 * @module `sectionbignumbers`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type BigNumbers = {
  justify: "center" | "start"
  items: Array<{
    icon: string,
    title: string,
    description: string
   }>
}

/**
 * Defines valid properties in SectionBigNumbers component.
 */
export interface SectionBigNumbersProps {
  data: BigNumbers;
  title: string;
  overline: string;
}

/**
 * Defines valid slots in SectionBigNumbers component.
 */
export interface SectionBigNumbersSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SectionBigNumbers component.
 */
export interface SectionBigNumbersEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SectionBigNumbers extends ClassComponent<SectionBigNumbersProps, SectionBigNumbersSlots, SectionBigNumbersEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SectionBigNumbers: GlobalComponentConstructor<SectionBigNumbers>;
  }
}

export default SectionBigNumbers;
