/**
 *
 * BannerLiveMap represents the big numbers template
 *
 *
 * @module `bannerlivemap`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type Buttons = {
  link: string,
  label: string,
  outlined: boolean,
  icon: string
}

type BannerLiveMapItems = {
  overline: string,
  title: string,
  button: Buttons,
  description: string
}

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface BannerLiveMapProps {
  items: BannerLiveMapItems[];
  /**
   * Defines the text to display is centralized.
   * @defaultValue true
   */
  centralized: boolean;
  /**
   * Defines the text to display with border.
   * @defaultValue true
   */
  border: boolean;
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface BannerLiveMapSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface BannerLiveMapEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class BannerLiveMap extends ClassComponent<BannerLiveMapProps, BannerLiveMapSlots, BannerLiveMapEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    BannerLiveMap: GlobalComponentConstructor<BannerLiveMap>;
  }
}

export default BannerLiveMap;
