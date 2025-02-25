/**
 *
 * HeroContent
 *
 * @module `herocontent`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface breadcrumbItems {
  label: string
  target: '_self' | '_blank' | ''
  url: string
}
interface authors {
  avatar: string
  title: string
  role: string
}

export interface HeroContentProps {
  breadcrumbItems: breadcrumbItems[]
  date: string
  title: string
  authors: authors[]
  description: string
}
export interface HeroContentSlots {
  default(): VNode[]
}
export interface HeroContentEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroContent extends ClassComponent<
  HeroContentProps,
  HeroContentSlots,
  HeroContentEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroContent: GlobalComponentConstructor<HeroContent>
  }
}

export default HeroContent
