/**
 *
 * newslettercard
 *
 *
 * @module newslettercard
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in newslettercard component.
 */
export interface NewsletterCardProps {
  title: string
  /**
   * @defaultValue 'Your Email'
   */
  placeholderInput?: string
  /**
   * @defaultValue 'submit'
   */
  buttonText?: string
  formData: object
  responseMessages?: {}
  /**
   * @defaultValue 'Error while subscribing to Azion newsletter, try again later'
   */
  errorMessage?: string
}

/**
 * Defines valid slots in Avatar component.
 */
export interface NewsletterCardSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface NewsletterCardEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class NewsletterCard extends ClassComponent<
  NewsletterCardProps,
  NewsletterCardSlots,
  NewsletterCardEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    NewsletterCard: GlobalComponentConstructor<NewsletterCard>
  }
}

export default NewsletterCard
