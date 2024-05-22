/**
 *
 * newslettersingleline
 *
 *
 * @module newslettersingleline
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in newslettercard component.
 */
export interface NewsletterSingleLineProps {
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
export interface NewsletterSingleLineSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface NewsletterSingleLineEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class NewsletterSingleLine extends ClassComponent<NewsletterSingleLineProps, NewsletterSingleLineSlots, NewsletterSingleLineEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    NewsletterSingleLine: GlobalComponentConstructor<NewsletterSingleLine>;
  }
}

export default NewsletterSingleLine;
