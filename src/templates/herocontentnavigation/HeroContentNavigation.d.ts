/**
 *
 * HeroContentNavigation
 *
 * @module `herocontentnavigation`
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
interface menuItem {
  label: string
  url: string
}
interface menuItems {
  label: string
  url: string
  items: menuItem[]
}

export interface HeroContentNavigationProps {
  breadcrumbItems: breadcrumbItems[]
  date: string
  title: string
  authors: authors[]
  description: string
  menuTitle: string
  menuItems: menuItems[]
  mobileLabel: string
}
export interface HeroContentNavigationSlots {
  default(): VNode[]
}
export interface HeroContentNavigationEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroContentNavigation extends ClassComponent<
  HeroContentNavigationProps,
  HeroContentNavigationSlots,
  HeroContentNavigationEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroContentNavigation: GlobalComponentConstructor<HeroContentNavigation>
  }
}

export default HeroContentNavigation
