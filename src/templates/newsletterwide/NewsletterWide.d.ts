/**
 *
 * newsletterwide
 *
 *
 * @module newsletterwide
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in newslettercard component.
 */
export interface NewsletterWideProps {
  title: string;
  /**
   * @defaultValue 'Your Email'
   */
  placeholderInput?: string;
  /**
   * @defaultValue 'submit'
   */
  buttonText?: string;
  formData: object;
  /**
   * @dafaultValue 'Thanks for subscribing to Azion newsletter'
   */
  responseMessages?: {};
}

/**
 * Defines valid slots in Avatar component.
 */
export interface NewsletterWideSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface NewsletterWideEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class NewsletterWide extends ClassComponent<NewsletterWideProps, NewsletterWideSlots, NewsletterWideEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    NewsletterWide: GlobalComponentConstructor<NewsletterWide>;
  }
}

export default NewsletterWide;
