/**
 *
 * SectionSuccessCases
 *
 *
 * @module `sectionsuccesscases`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type CardsType = {
  logo: string,
  tag: string,
  description: string,
  link: string,
  action: {
    label: string
  }
}

type ButtonType = {}

/**
 * Defines valid properties in SectionSuccessCases component.
 */
export interface SectionSuccessCasesProps {
  button: ButtonType
  title: string;
  overline: string;
  cards: Array<CardsType>
}

/**
 * Defines valid slots in SectionSuccessCases component.
 */
export interface SectionSuccessCasesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SectionSuccessCases component.
 */
export interface SectionSuccessCasesEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SectionSuccessCases extends ClassComponent<SectionSuccessCasesProps, SectionSuccessCasesSlots, SectionSuccessCasesEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SectionSuccessCases: GlobalComponentConstructor<SectionSuccessCases>;
  }
}

export default SectionSuccessCases;
