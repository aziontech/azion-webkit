/**
 *
 * SectionCompliances
 *
 *
 * @module `sectioncompliance`
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
 * Defines valid properties in SectionCompliances component.
 */
export interface SectionCompliancesProps {
  data: BigNumbers;
  title: string;
  overline: string;
}

/**
 * Defines valid slots in SectionCompliances component.
 */
export interface SectionCompliancesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SectionCompliances component.
 */
export interface SectionCompliancesEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SectionCompliances extends ClassComponent<SectionCompliancesProps, SectionCompliancesSlots, SectionCompliancesEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SectionCompliances: GlobalComponentConstructor<SectionCompliances>;
  }
}

export default SectionCompliances;
