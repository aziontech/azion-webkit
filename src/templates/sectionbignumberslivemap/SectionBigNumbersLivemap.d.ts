/**
 *
 * SectionBigNumbersLivemap
 *
 *
 * @module `sectionbignumberslivemap`
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
 * Defines valid properties in SectionBigNumbersLivemap component.
 */
export interface SectionBigNumbersLivemapProps {
  title: string;
  overline: string;
  lang: string;
  data: DataBlock;
}

/**
 * Defines valid slots in SectionBigNumbersLivemap component.
 */
export interface SectionBigNumbersLivemapSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SectionBigNumbersLivemap component.
 */
export interface SectionBigNumbersLivemapEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SectionBigNumbersLivemap extends ClassComponent<SectionBigNumbersLivemapProps, SectionBigNumbersLivemapSlots, SectionBigNumbersLivemapEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SectionBigNumbersLivemap: GlobalComponentConstructor<SectionBigNumbersLivemap>;
  }
}

export default SectionBigNumbersLivemap;
