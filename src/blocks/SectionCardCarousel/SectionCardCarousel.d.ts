export interface CarouselCard {
  tag?: string
  title: string
  description: string
  link?: string
  linkLabel?: string
}

export interface SectionCardCarouselProps {
  title?: string
  cards?: CarouselCard[]
  id?: string
}

export { default } from './SectionCardCarousel.vue'
