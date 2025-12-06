/**
 *
 * HeroHome represents a hero section with title, description, buttons and logos.
 * Now uses the unified Button component instead of LinkButton for better consistency.
 *
 * @module `herohome`
 * @version 2.0.0 - Migrated from LinkButton to Button component
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Button configuration for HeroHome component
 * Supports both new Button component props and legacy LinkButton props for migration compatibility
 */
interface Button {
  /** Button text label */
  label: string

  /** Link URL - legacy prop (mapped to href internally) */
  link: string

  /** Direct href prop for Button component */
  href?: string

  /** PrimeVue icon class (e.g., 'pi pi-github') */
  icon?: string

  /** Button size - medium maps to large internally */
  size?: 'small' | 'medium' | 'large'

  /** Button visual type/style */
  type?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'linkExternal' | 'linkSecondary'

  /** Theme variant */
  theme?: 'dark' | 'light'

  /** Additional CSS classes */
  customClass?: string

  // Legacy LinkButton props (for migration compatibility)
  /** @deprecated Use type="secondary" instead */
  outlined?: boolean

  /** @deprecated Use type="link" instead */
  text?: boolean

  /** @deprecated Use type="linkSecondary" instead */
  textLink?: boolean

  /** @deprecated Use type prop instead */
  severity?: 'secondary' | 'info'

  /** Link target attribute */
  target?: '_blank' | '_self'
}

interface Logo {
  title: string
  images: string[]
}

interface CTA {
  label: string
  link: string
}

interface BannerNews {
  description: string
  cta: CTA
}

/**
 * Props for HeroHome component
 * @version 2.0.0 - Updated to support new Button component
 */
export interface HeroHomeProps {
  /** Optional component ID */
  id?: string

  /** Overline text above title */
  overline: string

  /** HTML tag for title (h1, h2, etc.) */
  titleTag: string

  /** Main hero title (supports HTML) */
  title: string

  /** Hero description text */
  description: string

  /** Raw HTML description (alternative to description) */
  descriptionRawHtml: string

  /** Optional banner news configuration */
  bannerNews?: BannerNews

  /** Array of button configurations (now supports Button component props) */
  buttons?: Button[]

  /** Title for logos section */
  logosTitle: string

  /** Array of logo configurations */
  logos: Array<{
    /** SVG or image source for logo */
    imageSrc: string
  }>

  /** Margin configuration */
  margin?: 'none' | 'small' | 'default' | 'large'
}

export interface HeroHomeSlots {
  default(): VNode[]
}

export interface HeroHomeEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroHome extends ClassComponent<HeroHomeProps, HeroHomeSlots, HeroHomeEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroHome: GlobalComponentConstructor<HeroHome>
  }
}

export default HeroHome
