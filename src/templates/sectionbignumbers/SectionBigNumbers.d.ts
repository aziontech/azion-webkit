/**
 *
 * SectionBigNumbers
 *
 *
 * @module `sectionbignumbers`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

interface Item {
  icon: string;
  title: string;
  description: string;
}

// Type for the data block
interface DataBlock {
  justify: "center" | "start";
  items: Item[];
}

/**
 * Defines valid properties in SectionBigNumbers component.
 */
export interface SectionBigNumbersProps {
  title: string;
  overline: string;
  data: DataBlock;
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
