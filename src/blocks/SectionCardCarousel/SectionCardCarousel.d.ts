export interface CarouselCard {
  tag?: string
  tagIcon?: string
  title: string
  descriptionRawMarkdown: string
  link?: string
  linkLabel?: string
  target?: '_blank' | '_self'
}

export interface SectionCardCarouselProps {
  title?: string
  cards?: CarouselCard[]
  id?: string
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
}

export { default } from './SectionCardCarousel.vue'
