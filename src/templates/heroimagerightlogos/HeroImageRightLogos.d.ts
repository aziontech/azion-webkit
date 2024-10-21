/**
 *
 * HeroImageRightLogo represents people using links in the page with css buttons look.
 *
 *
 * @module `heroimagerightlogos`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HeroImageRightLogo component.
 */

interface Button {
  label: string
  href: string
  target?: string
}

interface Images {
  light: string
  dark: string
  alt: string
}

interface Logo {
  title: string
  images: string[]
}

export interface HeroImageRightLogoProps {
  title: string
  images: Images
  logos: Logo
  buttons?: Button[]
}

/**
 * Defines valid slots in HeroImageRightLogo component.
 */
export interface HeroImageRightLogoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroImageRightLogo component.
 */
export interface HeroImageRightLogoEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroImageRightLogo extends ClassComponent<HeroImageRightLogoProps, HeroImageRightLogoSlots, HeroImageRightLogoEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroImageRightLogo: GlobalComponentConstructor<HeroImageRightLogo>;
  }
}

export default HeroImageRightLogo;
