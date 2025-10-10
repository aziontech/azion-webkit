export interface ImageProps {
  /**
   * Image source URL
   */
  src: string

  /**
   * Alternative text for the image
   */
  alt?: string

  /**
   * If true, applies w-full class to make image full width
   * @default false
   */
  fullWidth?: boolean

  /**
   * If true, applies object-cover and h-full classes
   * @default false
   */
  cover?: boolean

  /**
   * Loading strategy for the image
   * @default 'lazy'
   */
  loading?: 'lazy' | 'eager'
}

declare const Image: import('vue').DefineComponent<ImageProps>

export default Image
