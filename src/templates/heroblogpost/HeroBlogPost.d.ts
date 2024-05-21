/**
 *
 * HeroBlogPost represents people using links in the page with css buttons look.
 *
 *
 * @module `heroblogpost`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in HeroBlogPost component.
 */
export interface HeroBlogPostProps {
  /**
   * Defines the date of post.
   */
  date?: string | undefined;
  /**
   * Defines the icon to display.
   */
  title: string;
  /**
   * Defines icon position, options: [left, right]
   * interface Authors {
   *   avatars: [url, url],
   *  title: String
   * }
   */
  authors?: object | undefined;
  /**
   * Defines category post tag
   */
  tag?: [] | string | undefined;
  /**
   * Defines category post list of unic
   */
  tagList?: [] | string | undefined;
  /**
   * Defines the breadcrumb of post
   */
  breadcrumbItems?: [] | undefined;
  /**
   * Defines the breadcrumb of post
   */
  description?: string | undefined;
}

/**
 * Defines valid slots in HeroBlogPost component.
 */
export interface HeroBlogPostSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HeroBlogPost component.
 */
export interface HeroBlogPostEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HeroBlogPost extends ClassComponent<HeroBlogPostProps, HeroBlogPostSlots, HeroBlogPostEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HeroBlogPost: GlobalComponentConstructor<HeroBlogPost>;
  }
}

export default HeroBlogPost;
