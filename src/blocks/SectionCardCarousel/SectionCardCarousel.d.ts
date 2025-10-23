export interface CarouselCard {
  tag?: string
  tagIcon?: string
  title: string
  descriptionRawMarkdown: string
  link?: string
  linkLabel?: string
}

export interface SectionCardCarouselProps {
  title?: string
  cards?: CarouselCard[]
  id?: string
}

export { default } from './SectionCardCarousel.vue'
