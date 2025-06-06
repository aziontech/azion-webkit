/**
 *
 * HeroSimpleBaseWithLogos
 *
 *
 * @module `herosimplebasewithlogos`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface HeroSimpleBaseWithLogosProps {
  overline?: string
  titleTag?: string
  title?: string
  description?: string
  descriptionRawHtml?: string
  logosTitle: string
  logos: Array<{
    imageSrc: string
    alt: string
  }>
}

export interface HeroSimpleBaseWithLogosSlots {
  default(): VNode[]
}

export interface HeroSimpleBaseWithLogosEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroSimpleBaseWithLogos extends ClassComponent<
  HeroSimpleBaseWithLogos,
  HeroSimpleBaseWithLogosSlots,
  HeroSimpleBaseWithLogosEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroSimpleBaseWithLogos: GlobalComponentConstructor<HeroSimpleBaseWithLogos>
  }
}

export default HeroSimpleBaseWithLogos
